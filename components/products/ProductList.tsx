import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useProductList } from '../../hooks/api.hooks';
import { ProductShortModel } from '../../libraries/models/product';
import ProductCard from '../common/ProductCard';
import {
  ProductFilterContext,
  ProductFilterSections,
} from './context/filter-context';

const ProductList = () => {
  const {
    state: { activeFilterSection, filter },
  } = useContext(ProductFilterContext);
  const queryClient = useQueryClient();

  const { data, isSuccess, hasNextPage, fetchNextPage, refetch } = useProductList(filter);

  useEffect(() => {
    queryClient.resetQueries({ queryKey: ['listProduct']})
    refetch({ refetchPage: (_, index) => index === 0});
  }, [filter, queryClient, refetch])

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
        <div className="product-list__body flex flex-wrap gap-x-6 gap-y-9">
          {isSuccess && data.pages.map(page =>
            page.products.map((item) =>
              <ProductCard data={item} key={item.id}/>
            )
          )}
        </div>

        <div className="product-list__footer flex justify-center mt-12 mb-14">
          {hasNextPage &&
            <button className="px-10 py-2.5 rounded-full border border-main-dark bg-main text-main-dark outlined-button"
              onClick={() => fetchNextPage()}
            >
              View more
            </button>
          }
        </div>
      </div>
    </div>
  );
};
export default ProductList;
