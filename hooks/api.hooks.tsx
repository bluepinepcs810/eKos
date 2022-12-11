import { PublicKey } from '@solana/web3.js';
import { useQuery, useMutation } from 'react-query';
import AuthApi from '../libraries/api/auth';


export const useGetNonce = (publicKey: PublicKey | null) =>
  useQuery(['getNonce', publicKey], () => AuthApi.getNonce(publicKey?.toBase58()), { enabled: !!publicKey});
export const useSignIn = (publicKey: PublicKey | null) =>
  useMutation((signature: Uint8Array) => AuthApi.signin(publicKey?.toBytes(), Buffer.from(signature)))
