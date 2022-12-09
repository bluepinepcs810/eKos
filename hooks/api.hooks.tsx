import { PublicKey } from '@solana/web3.js';
import { useQuery } from 'react-query';
import AuthApi from '../libraries/api/auth';

export const useGetNonce = (publicKey: PublicKey | null) =>
  useQuery(['getNonce', publicKey], () => AuthApi.getNonce(publicKey?.toBase58()), { enabled: !!publicKey});
