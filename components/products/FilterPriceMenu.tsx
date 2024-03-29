import { useCallback, useContext, useMemo, useState } from 'react';
import ArrowDownIcon from '../../assets/icon/arrow-down.svg';
import {
  ProductFilterContext,
  ProductFilterSections,
  ProductPriceFilterType,
} from './context/filter-context';
import { ProductFilterActionTypes } from './context/fitler-reducer';
import useProductFilter from './hooks/useProductFilter';

const FilterPriceMenu = () => {
  const {
    state: { activeFilterSection },
    dispatch,
  } = useContext(ProductFilterContext);
  const {
    query,
    handleApply: queryApply,
    setFrom,
    setTo,
    refresh,
  } = useProductFilter();

  const handleClick = useCallback(() => {
    dispatch({
      type: ProductFilterActionTypes.SET_SECTION,
      payload: ProductFilterSections.PRICE,
    });
  }, [dispatch]);

  const handleCancel = useCallback(() => {
    dispatch({
      type: ProductFilterActionTypes.SET_SECTION,
      payload: ProductFilterSections.NONE,
    });
    refresh();
  }, [dispatch, refresh]);

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
        'filter-menu filter-price-menu relative group ' +
        (activeFilterSection === ProductFilterSections.PRICE ? 'active' : '')
      }
    >
      <button
        className="filter-menu-button rounded-full bg-main-light py-1 px-5 text-main-dark hover:bg-main-strong transition flex justify-center items-center gap-x-3"
        onClick={handleClick}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
            fill="#5E25D9"
          />
          <path
            d="M7.6297 14V3H8.50984V14H7.6297ZM7.96243 12.7128C7.37567 12.7128 6.81395 12.623 6.27728 12.4436C5.74061 12.2564 5.31485 12.0184 5 11.7298L5.48301 10.5479C5.78354 10.8053 6.15563 11.0199 6.59928 11.1915C7.04293 11.3631 7.49732 11.4489 7.96243 11.4489C8.35599 11.4489 8.67442 11.4021 8.91771 11.3085C9.161 11.2149 9.33989 11.0901 9.45438 10.934C9.56887 10.7702 9.62612 10.5869 9.62612 10.384C9.62612 10.1344 9.54383 9.93546 9.37925 9.78723C9.21467 9.63121 9 9.51028 8.73524 9.42447C8.47764 9.33085 8.18784 9.24504 7.86583 9.16702C7.55098 9.08901 7.23256 8.99929 6.91055 8.89787C6.59571 8.78865 6.3059 8.65213 6.04114 8.4883C5.78354 8.31667 5.57245 8.09043 5.40787 7.80957C5.24329 7.52872 5.161 7.16986 5.161 6.73298C5.161 6.2883 5.26834 5.88262 5.48301 5.51596C5.70483 5.14149 6.03757 4.84504 6.48122 4.6266C6.93202 4.40035 7.50089 4.28723 8.18784 4.28723C8.63864 4.28723 9.08587 4.34965 9.52952 4.47447C9.97317 4.59929 10.3596 4.77872 10.6887 5.01277L10.2487 6.19468C9.91234 5.97624 9.5653 5.81631 9.20751 5.71489C8.84973 5.60567 8.50626 5.55106 8.1771 5.55106C7.7907 5.55106 7.47585 5.60177 7.23256 5.70319C6.99642 5.80461 6.82111 5.93723 6.70662 6.10106C6.59928 6.26489 6.54562 6.45213 6.54562 6.66277C6.54562 6.91241 6.62433 7.11525 6.78175 7.27128C6.94633 7.4195 7.15742 7.53652 7.41503 7.62234C7.67979 7.70816 7.97317 7.79397 8.29517 7.87979C8.61717 7.9578 8.9356 8.04752 9.25045 8.14894C9.57245 8.25035 9.86225 8.38298 10.1199 8.54681C10.3846 8.71064 10.5957 8.93298 10.7531 9.21383C10.9177 9.49468 11 9.84965 11 10.2787C11 10.7156 10.8891 11.1213 10.6673 11.4957C10.4526 11.8624 10.1199 12.1589 9.66905 12.3851C9.21825 12.6035 8.64937 12.7128 7.96243 12.7128Z"
            fill="#5E25D9"
          />
        </svg>
        <div className="filter-category-menu__label pt-0.5">Price</div>
        <div className="filter-category-menu__drop-icon">
          <ArrowDownIcon />
        </div>
      </button>
      <div className="filter-menu__panel hidden group-[.active]:block absolute transition bg-main-light pt-2 px-6 z-40 w-screen lg:max-w-[370px] lg:rounded-lg">
        <div className="text-main-weighted text-lg font-semibold mt-2 mb-3">
          Price range
        </div>
        <div className="flex justify-between gap-x-3.5">
          <div className="flex-grow">
            <div>
              <label className="text-main-weighted">From</label>
            </div>
            <div>
              <input
                className="bg-white text-black w-full border border-third-main py-2 px-2.5"
                placeholder="0"
                type="number"
                value={query.priceFrom}
                onChange={(e) =>
                  setFrom(
                    e.target.value ? parseFloat(e.target.value) : undefined
                  )
                }
              />
            </div>
          </div>
          <div className="flex-grow">
            <div>
              <label className="text-main-weighted">To</label>
            </div>
            <div>
              <input
                className="bg-white text-black w-full border border-third-main py-2 px-2.5"
                placeholder="No limit"
                type="number"
                value={query.priceTo}
                onChange={(e) =>
                  setTo(e.target.value ? parseFloat(e.target.value) : undefined)
                }
              />
            </div>
          </div>
        </div>
        <div className="lg:mt-4 lg:mb-4 flex justify-end gap-x-2 fixed z-30 bottom-0 left-0 pr-5 lg:pr-0 py-3 lg:py-0 w-screen lg:relative lg:w-full border-t border-main-weighted lg:border-none ">
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
export default FilterPriceMenu;
