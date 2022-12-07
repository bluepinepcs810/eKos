import { CATEGORY_KEYS } from "../../../libraries/constants/categories";
import { ProductFilterContextType, ProductFilterItemCodition, ProductFilterSections, ProductPriceFilterType } from "./filter-context"

export enum ProductFilterActionTypes {
  SET_SECTION = 'SET_SECTION',
  SET_FILTER_CATEGORY = 'SET_FILTER_CATEGORY',
  SET_FILTER_PRICE_RANGE = 'SET_FILTER_PRICE_RANGE',
  SET_FILTER_ITEM_CONDITION = 'SET_FILTER_ITEM_CONDITION',
  SET_FILTER_LOCATION = 'SET_FILTER_LOCATION'
}
export const productFilterReducer = (state: ProductFilterContextType, action: { type: ProductFilterActionTypes, payload: any}) => {
  switch(action.type) {
    case ProductFilterActionTypes.SET_SECTION:
      return {
        ...state,
        activeFilterSection: action.payload as ProductFilterSections
      };
    case ProductFilterActionTypes.SET_FILTER_CATEGORY:
      return {
        ...state,
        filter: {
          ...state.filter,
          category: action.payload as CATEGORY_KEYS
        }
      }
    case ProductFilterActionTypes.SET_FILTER_PRICE_RANGE:
      return {
        ...state,
        filter: {
          ...state.filter,
          price: {...action.payload as ProductPriceFilterType}
        }
      }
    case ProductFilterActionTypes.SET_FILTER_ITEM_CONDITION:
      return {
        ...state,
        filter: {
          ...state.filter,
          condition: [...action.payload as ProductFilterItemCodition[]]
        }
      }
    case ProductFilterActionTypes.SET_FILTER_LOCATION:
      return {
        ...state,
        filter: {
          ...state.filter,
          location: action.payload as string
        }
      }
    default:
      return state
  }
}
