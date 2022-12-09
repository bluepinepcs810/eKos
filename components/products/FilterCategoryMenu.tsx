import { useCallback, useContext, useMemo, useState } from 'react';
import ArrowDownIcon from '../../assets/icon/arrow-down.svg';
import CATEGORIES, {
  CATEGORY_KEYS,
  findCategoryItem,
} from '../../libraries/constants/categories';
import {
  ProductFilterContext,
  ProductFilterSections,
} from './context/filter-context';
import { ProductFilterActionTypes } from './context/fitler-reducer';
import CategoryItem from './snippet/CategoryItem';

const FilterCategoryMenu = () => {
  const {
    state: { filter, activeFilterSection },
    dispatch,
  } = useContext(ProductFilterContext);
  const category = useMemo(
    () => findCategoryItem(filter.category),
    [filter.category]
  );

  const handleClick = useCallback(() => {
    dispatch({
      type: ProductFilterActionTypes.SET_SECTION,
      payload: ProductFilterSections.CATEGORY,
    });
  }, [dispatch]);
  const handleCancel = useCallback(() => {
    dispatch({
      type: ProductFilterActionTypes.SET_SECTION,
      payload: ProductFilterSections.NONE,
    });
  }, [dispatch]);

  return (
    <div
      className={
        'filter-category-menu relative group ' +
        (activeFilterSection === ProductFilterSections.CATEGORY ? 'active' : '')
      }
    >
      <button
        className="filter-menu-button rounded-full bg-main-light py-1.5 px-5 text-main-dark hover:bg-main-strong transition flex justify-center items-center gap-x-3"
        onClick={handleClick}
      >
        {category?.icon.type3}
        <div className="filter-category-menu__label pt-0.5">
          {category?.text}
        </div>
        <div className="filter-category-menu__drop-icon">
          <ArrowDownIcon />
        </div>
      </button>
      <div className="filter-menu__panel hidden group-[.active]:block absolute transition bg-main-light pt-2 px-6 z-40 w-screen max-w-[580px] rounded-lg">
        <div className="text-main-weighted text-lg font-semibold mt-2 mb-3">
          Category
        </div>
        <div className="flex flex-wrap">
          {CATEGORIES.map((item) => (
            <CategoryItem category={item} key={item.key} />
          ))}
        </div>
        <div className="mt-2 mb-4 flex justify-end">
          <button
            className="text-main-dark hover:bg-main-strong px-5 py-2 rounded-full transition"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default FilterCategoryMenu;
