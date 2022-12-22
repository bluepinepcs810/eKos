import React, { useCallback, useContext } from 'react';
import { CategoryItemProps } from '../../../libraries/types/category-item';
import {
  ProductFilterContext,
  ProductFilterSections,
} from '../context/filter-context';
import { ProductFilterActionTypes } from '../context/fitler-reducer';
import useProductFilter from '../hooks/useProductFilter';

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const { dispatch } = useContext(ProductFilterContext);

  const { query, handleApply } = useProductFilter();
  const handleClick = useCallback(() => {
    if (query.category === category.key) return;
    dispatch({
      type: ProductFilterActionTypes.SET_SECTION,
      payload: ProductFilterSections.NONE,
    });
    handleApply({ category: category.key });
  }, [category.key, dispatch, handleApply, query.category]);
  return (
    <div
      className={
        'w-1/3 lg:w-1/5 h-[90px] flex items-center justify-center flex-col gap-y-2 hover:bg-main hover:opacity-80 transition cursor-pointer ' +
        (query.category === category.key ? 'bg-main' : '')
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
