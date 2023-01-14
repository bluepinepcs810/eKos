import { useCallback, useContext } from 'react';
import ArrowDownIcon from '../../assets/icon/arrow-down.svg';
import CATEGORIES, {
  findCategoryItem,
} from '../../libraries/constants/categories';
import {
  ProductFilterContext,
  ProductFilterSections,
} from './context/filter-context';
import { ProductFilterActionTypes } from './context/fitler-reducer';
import useProductFilter from './hooks/useProductFilter';
import CategoryItem from './snippet/CategoryItem';

const FilterCategoryMenu = () => {
  const {
    state: { activeFilterSection },
    dispatch,
  } = useContext(ProductFilterContext);
  const { query } = useProductFilter();
  const category = findCategoryItem(query.category);

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
        'filter-menu filter-category-menu relative group ' +
        (activeFilterSection === ProductFilterSections.CATEGORY ? 'active' : '')
      }
    >
      <button
        className="filter-menu-button rounded-full bg-main-light py-1 px-5 text-main-dark hover:bg-main-strong transition flex justify-center items-center gap-x-3 flex-nowrap"
        onClick={handleClick}
      >
        {category?.icon.type3}
        <div className="filter-category-menu__label pt-0.5 whitespace-nowrap">
          {category?.text}
        </div>
        <div className="filter-category-menu__drop-icon">
          <ArrowDownIcon />
        </div>
      </button>
      <div className="filter-menu__panel hidden group-[.active]:block transition bg-main-light pb-10 lg:pb-0 lg:pt-2 px-6 z-40">
        <div className="text-main-weighted text-lg font-semibold mt-2 mb-3">
          Category
        </div>
        <div className="flex flex-wrap w-full">
          {CATEGORIES.map((item) => (
            <CategoryItem category={item} key={item.key} />
          ))}
        </div>
        <div className="flex justify-end fixed z-30 bottom-0 right-0 px-5 py-2 lg:py-0 lg:mt-2 lg:mb-4 bg-main-light border-t border-main-weighted lg:border-none w-screen lg:relative lg:w-full">
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
