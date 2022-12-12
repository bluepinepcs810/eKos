import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useGetNonce, useSignIn } from '../../hooks/api.hooks';
import LocalStorage from '../../libraries/utils/helpers/local-storage';
import { useStoreActions, useStoreState } from '../../store/types';
import { showError } from '../../libraries/utils/toast';
import bs58 from 'bs58';
import nacl from 'tweetnacl';

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { connected, publicKey, signMessage, disconnect } = useWallet();
  const nonceResult = useGetNonce(publicKey);
  const signInMutate = useSignIn(publicKey);
  const { signedIn } = useStoreState((state) => state.session);
  const setSessionInitial = useStoreActions((actions) => actions.setSessionInitial);
  const unsetSignedIn = useStoreActions((actions) => actions.unsetSignedIn);

  const [initial, setInitial] = useState(true);

  const signIn = useCallback(async () => {
    try {
      const msg = 'Authorize your wallet to login ' + nonceResult.data?.nonce;
      const encodedMessage = new TextEncoder().encode(msg);
      if (!signMessage) return;
      const signedMessage = await signMessage(encodedMessage);
      console.log({ msg, publicKey: publicKey?.toBase58() });

      const {accessToken} = await signInMutate.mutateAsync(signedMessage)
      LocalStorage.saveToken(accessToken);

    } catch (e) {
      console.error(e);
      disconnect();
      showError("Sign in failed");
    }
  }, [disconnect, nonceResult.data?.nonce, publicKey, signInMutate, signMessage]);

  useEffect(() => {
    if (nonceResult.isSuccess && connected) {
      if (signedIn) return;
      if (initial) {
        setInitial(false);
        signIn();
      }
    } else if (nonceResult.isError) {
      showError((nonceResult.error as any).message);
    }
  }, [connected, initial, nonceResult.error, nonceResult.isError, nonceResult.isSuccess, signIn, signedIn]);

  useEffect(() => {
    if (!connected) {
      unsetSignedIn();
      setSessionInitial();
      LocalStorage.removeToken();
    }
  }, [connected, setSessionInitial, unsetSignedIn])

  return (
    <>
      {children}
    </>
  );
};

export default AuthProvider;
