import React, { useCallback, useContext } from 'react';
import { CategoryItemProps } from '../../../libraries/types/category-item';
import {
  ProductFilterContext,
  ProductFilterSections,
} from '../context/filter-context';
import { ProductFilterActionTypes } from '../context/fitler-reducer';

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const {
    state: { filter },
    dispatch,
  } = useContext(ProductFilterContext);

  const handleClick = useCallback(() => {
    if (filter.category === category.key) return;
    dispatch({
      type: ProductFilterActionTypes.SET_FILTER_CATEGORY,
      payload: category.key,
    });
    dispatch({
      type: ProductFilterActionTypes.SET_SECTION,
      payload: ProductFilterSections.NONE,
    });
  }, [category.key, dispatch, filter.category]);
  return (
    <div
      className={
        'w-1/5 h-[90px] flex items-center justify-center flex-col gap-y-2 hover:bg-main hover:opacity-80 transition cursor-pointer ' +
        (filter.category === category.key ? 'bg-main' : '')
      }
      onClick={handleClick}
    >
      {category.icon.type2}
      <div className="text-xs text-main-weighted text-center">
        {category.text}
      </div>
    </div>
  );
};
export default CategoryItem;
