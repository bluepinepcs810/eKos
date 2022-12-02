import ArrowDownIcon from '../../assets/icon/arrow-down.svg';

const FilterItemConditionMenu = () => {
  return (
    <div className="filter-item-condition-menu">
      <button className="filter-menu-button rounded-full bg-main-light py-1.5 px-5 text-main-dark hover:bg-main-strong transition flex justify-center items-center gap-x-3">
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6.47789L11.529 5.92316L9 0L6.471 5.93211L0 6.47789L4.914 10.71L3.438 17L9 13.6626L14.562 17L13.095 10.71L18 6.47789ZM9 11.9895L5.616 14.0205L6.516 10.1911L3.528 7.61421L7.47 7.27421L9 3.66842L10.539 7.28316L14.481 7.62316L11.493 10.2L12.393 14.0295L9 11.9895Z" fill="#5E25D9"/>
        </svg>

        <div className='filter-category-menu__label'>
          Item condition
        </div>
        <div className='filter-category-menu__drop-icon'>
          <ArrowDownIcon />
        </div>
      </button>

    </div>
  )
}

export default FilterItemConditionMenu;
