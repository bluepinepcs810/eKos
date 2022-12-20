import { useCallback, useContext, useState } from 'react';
import ArrowDownIcon from '../../assets/icon/arrow-down.svg';
import {
  ProductFilterContext,
  ProductFilterSections,
} from './context/filter-context';
import { ProductFilterActionTypes } from './context/fitler-reducer';

const FilterLocationMenu = () => {
  const {
    state: { filter, activeFilterSection },
    dispatch,
  } = useContext(ProductFilterContext);
  const [location, setLocation] = useState(filter.location);

  const handleClick = useCallback(() => {
    dispatch({
      type: ProductFilterActionTypes.SET_SECTION,
      payload: ProductFilterSections.LOCATION,
    });
  }, [dispatch]);

  const handleCancel = useCallback(() => {
    setLocation(filter.location);
    dispatch({
      type: ProductFilterActionTypes.SET_SECTION,
      payload: ProductFilterSections.NONE,
    });
  }, [dispatch, filter.location]);

  const handleApply = useCallback(() => {
    dispatch({
      type: ProductFilterActionTypes.SET_FILTER_LOCATION,
      payload: location,
    });
    dispatch({
      type: ProductFilterActionTypes.SET_SECTION,
      payload: ProductFilterSections.NONE,
    });
  }, [dispatch, location]);

  return (
    <div
      className={
        'filter-category-menu relative group ' +
        (activeFilterSection === ProductFilterSections.LOCATION ? 'active' : '')
      }
    >
      <button
        className="filter-menu-button rounded-full bg-main-light py-1.5 px-5 text-main-dark hover:bg-main-strong transition flex justify-center items-center gap-x-3"
        onClick={handleClick}
      >
        <svg
          width="13"
          height="18"
          viewBox="0 0 13 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 6.3C0 2.817 2.90643 0 6.5 0C10.0936 0 13 2.817 13 6.3C13 11.025 6.5 18 6.5 18C6.5 18 0 11.025 0 6.3ZM6.5 1.8C3.93714 1.8 1.85714 3.816 1.85714 6.3C1.85714 8.865 4.56857 12.789 6.5 15.192C8.46857 12.771 11.1429 8.892 11.1429 6.3C11.1429 3.816 9.06286 1.8 6.5 1.8ZM8.82158 6.30005C8.82158 7.54269 7.78224 8.55005 6.50016 8.55005C5.21807 8.55005 4.17873 7.54269 4.17873 6.30005C4.17873 5.05741 5.21807 4.05005 6.50016 4.05005C7.78224 4.05005 8.82158 5.05741 8.82158 6.30005Z"
            fill="#5E25D9"
          />
        </svg>

        <div className="filter-category-menu__label pt-0.5">Location</div>
        <div className="filter-category-menu__drop-icon">
          <ArrowDownIcon />
        </div>
      </button>
      <div className="filter-menu__panel hidden group-[.active]:block absolute transition bg-main-light px-6 pt-2 z-40 w-screen max-w-[370px] rounded-lg">
        <div className="text-main-weighted text-lg font-semibold mt-2 mb-3">
          Item condition
        </div>
        <div className="mb-3">
          <input
            className="rounded-full w-full py-2.5 px-5 border border-main-thick"
            placeholder="Find your city"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <div className="h-[222px] bg-main rounded-md"></div>
        </div>
        <div className="mt-4 mb-4 flex justify-end gap-x-2">
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
export default FilterLocationMenu;
