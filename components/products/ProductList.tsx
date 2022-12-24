import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useProductList } from '../../hooks/api.hooks';
import { showError } from '../../libraries/utils/toast';
import ProductCard from '../common/ProductCard';
import {
  ProductFilterContext,
  ProductFilterSections,
} from './context/filter-context';
import useProductFilter from './hooks/useProductFilter';

const ProductList = () => {
  const {
    state: { activeFilterSection },
  } = useContext(ProductFilterContext);
  const queryClient = useQueryClient();
  const { query } = useProductFilter();
  const {
    data,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    refetch,
    isError,
    error,
  } = useProductList(query);

  useEffect(() => {
    queryClient.resetQueries({ queryKey: ['listProduct'] });
    refetch({ refetchPage: (_, index) => index === 0 });
  }, [queryClient, refetch]);

  useEffect(() => {
    if (isError) {
      showError((error as any).message);
    }
  }, [error, isError]);

  return (
    <div className="product-list bg-main pt-8 flex justify-center relative">
      <div
        className={
          'absolute top-0 transition ' +
          (activeFilterSection !== ProductFilterSections.NONE
            ? 'overlay w-full h-full '
            : '')
        }
      ></div>
      <div className="content-container">
        <div className="product-list__body flex flex-wrap gap-x-0 md:gap-x-6 gap-y-9">
          {isSuccess &&
            data.pages.map((page) =>
              page.productList.map((item) => (
                <ProductCard data={item} key={item.id} />
              ))
            )}
        </div>

        <div className="product-list__footer flex justify-center mt-12 mb-14">
          {hasNextPage && (
            <button
              className="px-10 py-2.5 rounded-full border border-main-dark bg-main text-main-dark outlined-button"
              onClick={() => fetchNextPage()}
            >
              View more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
