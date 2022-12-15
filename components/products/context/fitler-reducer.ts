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
    default:
      return state;
  }
};
