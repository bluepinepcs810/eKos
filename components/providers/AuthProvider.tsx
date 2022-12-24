import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useGetNonce, useSignIn } from '../../hooks/api.hooks';
import LocalStorage from '../../libraries/utils/helpers/local-storage';
import { useStoreActions, useStoreState } from '../../store/types';
import { showError, showSuccess } from '../../libraries/utils/toast';
import AuthApi from '../../libraries/api/auth';
import { useRouter } from 'next/router';

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

  const signIn = useCallback(async () => {
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
  }, [
    disconnect,
    nonceResult.data?.nonce,
    setSessionMe,
    setSignedIn,
    signInMutate,
    signMessage,
  ]);

  const getMe = useCallback(() => {
    AuthApi.getMe()
      .then((response) => {
        setSessionMe(response.user);
      })
      .catch((e) => {
        if (e.status === 401) {
          setSessionMe(undefined);
          unsetSignedIn();
          window.location.reload();
        }
      });
  }, [setSessionMe, unsetSignedIn]);

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
          setSignedIn();
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
    if (token) {
      getMe();
    }
  }, [getMe]);

  return <>{children}</>;
};

export default AuthProvider;
