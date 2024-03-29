import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useGetNonce, useSignIn } from '../../hooks/api.hooks';
import LocalStorage from '../../libraries/utils/helpers/local-storage';
import { useStoreActions, useStoreState } from '../../store/types';
import { showError, showSuccess } from '../../libraries/utils/toast';
import AuthApi from '../../libraries/api/auth';
import { useRouter } from 'next/router';
import WalletInitiator from '../home/WalletInitiator';
import { HASH_LIST } from '../../libraries/constants/whitelist';
import { getTokensOfOwner } from '../../libraries/utils/web3';

const GUARDED = ['/products/create', '/profile/'];

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const { connected, publicKey, signMessage, disconnect, disconnecting } =
    useWallet();
  const nonceResult = useGetNonce(publicKey);
  const signInMutate = useSignIn(publicKey);
  const { signedIn, initial, me } = useStoreState((state) => state.session);
  const setSessionInitial = useStoreActions(
    (actions) => actions.setSessionInitial
  );
  const unsetSessionInitial = useStoreActions(
    (actions) => actions.unsetSessionInitial
  );
  const unsetSignedIn = useStoreActions((actions) => actions.unsetSignedIn);
  const setSignedIn = useStoreActions((actions) => actions.setSignedIn);
  const setSessionMe = useStoreActions((actions) => actions.setSessionMe);

  const isNFTHolder = useCallback(async () => {
    if (!publicKey) return false;
    const nftList = await getTokensOfOwner(publicKey);
    console.log({ nftList });
    return nftList.some(item => HASH_LIST.includes(item.tokenAccount?.account.data.parsed.info.mint));
  }, [publicKey])

  const signIn = useCallback(async () => {
    const isAllowed = await isNFTHolder();
    if (!isAllowed) {
      showError('You are not allowed');
      return;
    }
    try {
      const msg = 'Authorize your wallet to login ' + nonceResult.data?.nonce;
      const encodedMessage = new TextEncoder().encode(msg);
      if (!signMessage) return;
      const signedMessage = await signMessage(encodedMessage);
      const { accessToken, user } = await signInMutate.mutateAsync(
        signedMessage
      );
      LocalStorage.saveToken(accessToken);
      setSignedIn();
      setSessionMe(user);
      showSuccess('Successfully signed');
    } catch (e) {
      console.error(e);
      disconnect();
      showError('Sign in failed');
    }
  }, [disconnect, isNFTHolder, nonceResult.data?.nonce, setSessionMe, setSignedIn, signInMutate, signMessage]);

  const signOut = useCallback(() => {
    console.log('remove token 2');
    LocalStorage.removeToken();
    unsetSignedIn();
    setSessionInitial();
    setSessionMe(undefined);
  }, [setSessionInitial, setSessionMe, unsetSignedIn]);

  const getMe = useCallback(() => {
    AuthApi.getMe()
      .then((response) => {
        const address = publicKey?.toBase58();
        if (address !== response.user.walletAddress) {
          console.log({ address }, response.user.walletAddress);
          signOut();
        } else {
          setSignedIn();
          setSessionMe(response.user);
        }
      })
      .catch((e) => {
        if (e.status === 401) {
          setSessionMe(undefined);
          unsetSignedIn();
          window.location.reload();
        }
      });
  }, [publicKey, setSessionMe, setSignedIn, signOut, unsetSignedIn]);

  useEffect(() => {
    const path = router.pathname;
    let timer: NodeJS.Timeout;
    if (GUARDED.some((item) => path.startsWith(item))) {
      const token = LocalStorage.getToken();
      if (!token) {
        router.push('/');
      }
      timer = setTimeout(() => {
        if (!signedIn || !me) {
          router.push('/');
        }
      }, 2000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [me, router, signedIn]);

  useEffect(() => {
    if (nonceResult.isSuccess && connected && !disconnecting) {
      if (signedIn) return;
      if (initial) {
        unsetSessionInitial();
        const token = LocalStorage.getToken();
        if (!token) {
          signIn();
        } else {
          getMe();
        }
      }
    } else if (nonceResult.isError) {
      showError((nonceResult.error as any).message);
    }
  }, [
    connected,
    disconnecting,
    getMe,
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

  useEffect(() => {
    const token = LocalStorage.getToken();
    if (token && connected) {
      getMe();
    }
  }, [connected, getMe]);

  return (
    <>
      {!signedIn && <WalletInitiator />}
      {signedIn && children}
    </>
  );
};

export default AuthProvider;
