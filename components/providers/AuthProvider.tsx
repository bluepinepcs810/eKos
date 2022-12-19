import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useGetNonce, useSignIn } from '../../hooks/api.hooks';
import LocalStorage from '../../libraries/utils/helpers/local-storage';
import { useStoreActions, useStoreState } from '../../store/types';
import { showError, showSuccess } from '../../libraries/utils/toast';

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { connected, publicKey, signMessage, disconnect, disconnecting } =
    useWallet();
  const nonceResult = useGetNonce(publicKey);
  const signInMutate = useSignIn(publicKey);
  const { signedIn, initial } = useStoreState((state) => state.session);
  const setSessionInitial = useStoreActions(
    (actions) => actions.setSessionInitial
  );
  const unsetSessionInitial = useStoreActions(
    (actions) => actions.unsetSessionInitial
  );
  const unsetSignedIn = useStoreActions((actions) => actions.unsetSignedIn);
  const setSignedIn = useStoreActions((actions) => actions.setSignedIn);

  const signIn = useCallback(async () => {
    try {
      const msg = 'Authorize your wallet to login ' + nonceResult.data?.nonce;
      const encodedMessage = new TextEncoder().encode(msg);
      if (!signMessage) return;
      const signedMessage = await signMessage(encodedMessage);
      const { accessToken } = await signInMutate.mutateAsync(signedMessage);
      LocalStorage.saveToken(accessToken);
      setSignedIn();
      showSuccess('Successfully signed');
    } catch (e) {
      console.error(e);
      disconnect();
      showError('Sign in failed');
    }
  }, [
    disconnect,
    nonceResult.data?.nonce,
    setSignedIn,
    signInMutate,
    signMessage,
  ]);

  useEffect(() => {
    if (nonceResult.isSuccess && connected) {
      if (signedIn) return;
      if (initial) {
        unsetSessionInitial();
        const token = LocalStorage.getToken();
        if (!token) {
          signIn();
        } else {
          setSignedIn();
        }
      }
    } else if (nonceResult.isError) {
      showError((nonceResult.error as any).message);
    }
  }, [
    connected,
    initial,
    nonceResult.error,
    nonceResult.isError,
    nonceResult.isSuccess,
    setSignedIn,
    signIn,
    signedIn,
    unsetSessionInitial,
  ]);

  useEffect(() => {
    if (disconnecting) {
      unsetSignedIn();
      setSessionInitial();
      LocalStorage.removeToken();
    }
  }, [disconnecting, setSessionInitial, unsetSignedIn]);

  return <>{children}</>;
};

export default AuthProvider;
