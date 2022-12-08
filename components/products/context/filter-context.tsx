import React, { Dispatch, PropsWithChildren, useReducer } from "react"
import { CATEGORY_KEYS } from "../../../libraries/constants/categories"
import { ProductCondition } from "../../../libraries/constants/products"
import { productFilterReducer } from "./fitler-reducer"

export type ProductPriceFilterType = {
  from?: number,
  to?: number
}
export type ProductFilterType = {
  category: CATEGORY_KEYS,
  price: ProductPriceFilterType,
  condition: ProductCondition[],
  location?: string
}

export enum ProductFilterSections {
  NONE = 'NONE',
  COMPREHENSIVE = 'COMPREHENSIVE',
  CATEGORY = 'CATEGORY',
  PRICE = 'PRICE',
  ITEM_CONDITION = 'ITEM_CONDITION',
  LOCATION = 'LOCATION',
}

export type ProductFilterContextType = {
  filter: ProductFilterType,
  activeFilterSection: ProductFilterSections,
}

const initialState: ProductFilterContextType = {
  filter: {
    category: CATEGORY_KEYS.ALL,
    price: {},
    condition: []
  },
  activeFilterSection: ProductFilterSections.NONE
}

export const ProductFilterContext = React.createContext<{state: ProductFilterContextType, dispatch: Dispatch<any>}>({
  state: initialState,
  dispatch: () => null
});


export const ProductFilterContextProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [state, dispatch] = useReducer(productFilterReducer, initialState);

  return (
    <ProductFilterContext.Provider value={{ state, dispatch}}>
      {children}
    </ProductFilterContext.Provider>
  )
}
