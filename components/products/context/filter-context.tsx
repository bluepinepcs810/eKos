import { useRouter } from 'next/router';
import React, {
  Dispatch,
  PropsWithChildren,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { CATEGORY_KEYS } from '../../../libraries/constants/categories';
import { ProductCondition } from '../../../libraries/constants/products';
import {
  ProductFilterActionTypes,
  productFilterReducer,
} from './fitler-reducer';

export type ProductPriceFilterType = {
  from?: number;
  to?: number;
};

export enum ProductSorterEnum {
  PRICE = 'price',
  CONDITION = 'condition',
  CATEGORY = 'category',
  NAME = 'name',
  CREATED_AT = 'createdAt',
}

export type ProductSorterType = {
  sort?: ProductSorterEnum;
  dir?: 'asc' | 'desc';
};

export enum ProductFilterSections {
  NONE = 'NONE',
  COMPREHENSIVE = 'COMPREHENSIVE',
  CATEGORY = 'CATEGORY',
  PRICE = 'PRICE',
  ITEM_CONDITION = 'ITEM_CONDITION',
  LOCATION = 'LOCATION',
}

export type ProductFilterContextType = {
  activeFilterSection: ProductFilterSections;
};

const initialState: ProductFilterContextType = {
  activeFilterSection: ProductFilterSections.NONE,
};

export const ProductFilterContext = React.createContext<{
  state: ProductFilterContextType;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const ProductFilterContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(productFilterReducer, initialState);
  return (
    <ProductFilterContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductFilterContext.Provider>
  );
};
