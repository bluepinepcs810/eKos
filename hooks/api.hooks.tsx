import { PublicKey } from '@solana/web3.js';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import AuthApi from '../libraries/api/auth';
import { ProductApi } from '../libraries/api/product';
import { ProductModel } from '../libraries/models/product';
import { ID } from '../libraries/types/common';

export const useGetNonce = (publicKey: PublicKey | null) =>
  useQuery(
    ['getNonce', publicKey],
    () => AuthApi.getNonce(publicKey?.toBase58()),
    { enabled: !!publicKey }
  );
export const useSignIn = (publicKey: PublicKey | null) =>
  useMutation((signature: Uint8Array) =>
    AuthApi.signin(publicKey?.toBytes(), Buffer.from(signature))
  );

export const useProductCreate = () => {
  const queryClient = useQueryClient();
  return useMutation((data: ProductModel) => ProductApi.createProduct(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['listProduct']);
    },
  });
};

export const useProductRetrieve = (id: ID) =>
  useQuery(['retrieveProduct', id], () => ProductApi.retrieveProduct(id), {
    enabled: !!id,
  });
