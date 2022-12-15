import { PublicKey } from '@solana/web3.js';
import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from 'react-query';
import useProductFilter, { ProductFilterType } from '../components/products/hooks/useProductFilter';
import AuthApi from '../libraries/api/auth';
import { ProductApi } from '../libraries/api/product';
import { ProductModel } from '../libraries/models/product';
import { ID } from '../libraries/types/common';

export const useGetNonce = (publicKey: PublicKey | null) =>
  useQuery(
    ['getNonce', publicKey],
    () => AuthApi.getNonce(publicKey?.toBase58()),
    { enabled: !!publicKey, retry: 2 }
  );
export const useSignIn = (publicKey: PublicKey | null) =>
  useMutation((signature: Uint8Array) =>
    AuthApi.signin(publicKey?.toBytes(), Buffer.from(signature))
  );

export const useProductCreate = () => {
  const queryClient = useQueryClient();
  return useMutation((data: ProductModel) => ProductApi.createProduct(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(['listProduct']);
    },
  });
};

export const useProductRetrieve = (id: ID) =>
  useQuery(['retrieveProduct', id], () => ProductApi.retrieveProduct(id), {
    enabled: !!id,
  });

const PRODUCT_PAGE_SIZE = 10;

export const useProductList = (query: ProductFilterType) => {
  return useInfiniteQuery(
    ['listProduct', query],
    async ({ pageParam = 1 }) => {
      return ProductApi.listProduct({
        ...query,
        page: pageParam,
        size: PRODUCT_PAGE_SIZE,
      });
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage.products.length) return undefined;
        return allPages.length + 1;
      },
      retry: 1
    }
  );
};
