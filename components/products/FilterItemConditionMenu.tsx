import { useCallback, useContext, useState } from 'react';
import ArrowDownIcon from '../../assets/icon/arrow-down.svg';
import {
  ProductCondition,
  PRODUCT_CONDITIONS,
} from '../../libraries/constants/products';
import CheckBox from '../snippet/CheckBox';
import {
  ProductFilterContext,
  ProductFilterSections,
} from './context/filter-context';
import { ProductFilterActionTypes } from './context/fitler-reducer';
import useProductFilter from './hooks/useProductFilter';

const FilterItemConditionMenu = () => {
  const {
    state: { activeFilterSection },
    dispatch,
  } = useContext(ProductFilterContext);
  const {
    query,
    refresh,
    setCondition,
    handleApply: queryApply,
  } = useProductFilter();

  const handleClick = useCallback(() => {
    dispatch({
      type: ProductFilterActionTypes.SET_SECTION,
      payload: ProductFilterSections.ITEM_CONDITION,
    });
  }, [dispatch]);

  const handleCancel = useCallback(() => {
    dispatch({
      type: ProductFilterActionTypes.SET_SECTION,
      payload: ProductFilterSections.NONE,
    });
    refresh();
  }, [dispatch, refresh]);

  const handleChange = useCallback(
    (condition: ProductCondition, value: boolean) => {
      const conditions = [...query.condition];
      const index = conditions.findIndex((item) => item === condition);
      const existing = index !== -1;
      if (value && existing) {
        return;
      } else if (value && !existing) {
        conditions.push(condition);
      } else if (!value && existing) {
        conditions.splice(index, 1);
      } else {
        return;
      }
      setCondition(conditions);
    },
    [query.condition, setCondition]
  );

  const handleApply = useCallback(() => {
    dispatch({
      type: ProductFilterActionTypes.SET_SECTION,
      payload: ProductFilterSections.NONE,
    });
    queryApply();
  }, [dispatch, queryApply]);

  return (
    <div
      className={
        'filter-item-condition-menu relative group ' +
        (activeFilterSection === ProductFilterSections.ITEM_CONDITION
          ? 'active'
          : '')
      }
    >
      <button
        className="filter-menu-button rounded-full bg-main-light py-1.5 px-5 text-main-dark hover:bg-main-strong transition flex justify-center items-center gap-x-3"
        onClick={handleClick}
      >
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6.47789L11.529 5.92316L9 0L6.471 5.93211L0 6.47789L4.914 10.71L3.438 17L9 13.6626L14.562 17L13.095 10.71L18 6.47789ZM9 11.9895L5.616 14.0205L6.516 10.1911L3.528 7.61421L7.47 7.27421L9 3.66842L10.539 7.28316L14.481 7.62316L11.493 10.2L12.393 14.0295L9 11.9895Z"
            fill="#5E25D9"
          />
        </svg>

        <div className="filter-category-menu__label pt-0.5">Item condition</div>
        <div className="filter-category-menu__drop-icon">
          <ArrowDownIcon />
        </div>
      </button>
      <div className="filter-menu__panel hidden group-[.active]:block absolute transition bg-main-light pt-2 z-40 w-screen max-w-[370px] rounded-lg">
        <div className="text-main-weighted text-lg font-semibold mt-2 mb-3 px-6">
          Item condition
        </div>
        <div className="border-t border-third-main">
          {PRODUCT_CONDITIONS.map((item) => (
            <div
              className="flex justify-between py-2.5 px-6 border-b border-third-main"
              key={item.key}
            >
              <div className=" text-main-weighted">{item.text}</div>
              <div>
                <CheckBox
                  id={'filter_condition__' + item.key}
                  checked={query.condition.includes(item.key)}
                  onChange={(e) => handleChange(item.key, e.target.checked)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 mb-4 flex justify-end gap-x-2 px-6">
          <button
            className="text-main-dark hover:bg-main-strong px-5 py-2 rounded-full transition"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="rounded-full text-main-light border border-main-dark px-5 py-2 filled-button"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterItemConditionMenu;
