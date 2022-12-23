import { useCallback } from 'react';
import { PublicKey } from '@solana/web3.js';
import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from 'react-query';
import {
  ProductFilterType,
} from '../components/products/hooks/useProductFilter';
import AuthApi from '../libraries/api/auth';
import { ProductApi } from '../libraries/api/product';
import { ProductModel } from '../libraries/models/product';
import { ID, Pager } from '../libraries/types/common';
import { useStoreActions } from '../store/types';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';
import { OrderApi } from '../libraries/api/order';
import { showError, showSuccess } from '../libraries/utils/toast';


export const useAuthErrorHandler = () => {
  const queryClient = useQueryClient();
  const setSessionInitial = useStoreActions(
    (actions) => actions.setSessionInitial
  );
  const unsetSignedIn = useStoreActions((actions) => actions.unsetSignedIn);
  const { disconnect, publicKey } = useWallet();
  const authError = useCallback((error: any) => {
    if (error.status === 401) {
      queryClient.resetQueries({ queryKey: ['getNonce', publicKey]});
      disconnect();
      setTimeout(() => {
        unsetSignedIn();
        setSessionInitial();
      }, 500)
    }
  }, [disconnect, publicKey, queryClient, setSessionInitial, unsetSignedIn]);

  return {
    authError
  }

}

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
  const { authError } = useAuthErrorHandler();

  return useMutation((data: ProductModel) => ProductApi.createProduct(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(['listProduct']);
    },
    onError: (error: any) => {
      authError(error);
    }
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
        if (!lastPage.productList.length) return undefined;
        return allPages.length + 1;
      },
      retry: 1,
    }
  );
};

export const useProductLike = (productId: ID) => {
  const { authError } = useAuthErrorHandler();
  return useMutation(() => ProductApi.likeProduct(productId), {
    onError: (error: any) => {
      authError(error)
    }
  })
}

export const useMyFavorites = () =>
  useInfiniteQuery(
    ['getMyFavorites'],
    async ({ pageParam = 1}) => {
      return ProductApi.getMyFavorites({
        page: pageParam,
        size: PRODUCT_PAGE_SIZE
      })
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage.length) return undefined;
        return allPages.length + 1;
      },
      retry: 1,
    }
  )

export const useMyProducts = () =>
  useInfiniteQuery(
    ['getMyProducts'],
    async ({ pageParam = 1}) => {
      return ProductApi.getMyProducts({
        page: pageParam,
        size: PRODUCT_PAGE_SIZE
      })
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage.length) return undefined;
        return allPages.length + 1;
      },
      retry: 1,
    }
  )

export const useOrderCreate = () => {
  const queryClient = useQueryClient();
  const { authError } = useAuthErrorHandler();

  return useMutation(({ productId, txSig}: { productId: ID, txSig: string}) =>
    OrderApi.createOrder(productId, txSig), {
      onSuccess: () => {
        queryClient.invalidateQueries(['buyingOrders']);
        queryClient.invalidateQueries(['sellingOrders']);
      },
      onError: (error: any) => {
        authError(error);
      }
    }
  );
}
export const useSellingOrders = (page: number) =>
  useQuery(
    ['sellingOrders', page],
    () => OrderApi.getSellingOrders({ page, size: 1000 }),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage.length) return undefined;
        return allPages.length + 1;
      },
      retry: 1,
    }
  )


export const useBuyingOrders = (page: number) =>
  useQuery(
    ['buyingOrders', page],
    () => OrderApi.getBuyingOrders({ page, size: 1000 })
  )



export const useOrderConfirm = () => {
    const queryClient = useQueryClient();
    const { authError } = useAuthErrorHandler();

    return useMutation(({ orderId }: { orderId: ID}) =>
      OrderApi.confirmOrder(orderId), {
        onSuccess: () => {
          queryClient.invalidateQueries(['buyingOrders']);
          queryClient.invalidateQueries(['sellingOrders']);
          showSuccess("Successfully confirmed")
        },
        onError: (error: any) => {
          authError(error);
          showError(error);
        }
      }
    );
  }
