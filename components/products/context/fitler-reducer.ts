import { CATEGORY_KEYS } from '../../../libraries/constants/categories';
import { ProductCondition } from '../../../libraries/constants/products';
import {
  ProductFilterContextType,
  ProductFilterSections,
  ProductPriceFilterType,
  ProductSorterEnum,
} from './filter-context';

export enum ProductFilterActionTypes {
  SET_SECTION = 'SET_SECTION',
  SET_FILTER_CATEGORY = 'SET_FILTER_CATEGORY',
  SET_FILTER_PRICE_RANGE = 'SET_FILTER_PRICE_RANGE',
  SET_FILTER_ITEM_CONDITION = 'SET_FILTER_ITEM_CONDITION',
  SET_FILTER_LOCATION = 'SET_FILTER_LOCATION',

  SET_SORTER_SORT = 'SET_SORTER_SORT',
  SET_SORTER_DIR = 'SET_SORTER_DIR'
}
export const productFilterReducer = (
  state: ProductFilterContextType,
  action: { type: ProductFilterActionTypes; payload: any }
) => {
  switch (action.type) {
    case ProductFilterActionTypes.SET_SECTION:
      return {
        ...state,
        activeFilterSection: action.payload as ProductFilterSections,
      };
    case ProductFilterActionTypes.SET_FILTER_CATEGORY:
      return {
        ...state,
        filter: {
          ...state.filter,
          category: action.payload as CATEGORY_KEYS,
        },
      };
    case ProductFilterActionTypes.SET_FILTER_PRICE_RANGE:
      return {
        ...state,
        filter: {
          ...state.filter,
          price: { ...(action.payload as ProductPriceFilterType) },
        },
      };
    case ProductFilterActionTypes.SET_FILTER_ITEM_CONDITION:
      return {
        ...state,
        filter: {
          ...state.filter,
          condition: [...(action.payload as ProductCondition[])],
        },
      };
    case ProductFilterActionTypes.SET_FILTER_LOCATION:
      return {
        ...state,
        filter: {
          ...state.filter,
          location: action.payload as string,
        },
      };
    case ProductFilterActionTypes.SET_SORTER_SORT:
      return {
        ...state,
        sorter: {
          ...state.sorter,
          sort: action.payload as ProductSorterEnum
        }
      }
    case ProductFilterActionTypes.SET_SORTER_DIR:
      return {
        ...state,
        sorter: {
          ...state.sorter,
          dir: action.payload
        }
      }
    default:
      return state;
  }
};
