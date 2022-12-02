import ArrowDownIcon from '../../assets/icon/arrow-down.svg';

const FilterCategoryMenu = () => {

  return (
    <div className="filter-category-menu">
      <button className="filter-menu-button rounded-full bg-main-light py-1.5 px-5 text-main-dark hover:bg-main-strong transition flex justify-center items-center gap-x-3">
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.4 0H1.6C0.72 0 0 0.7875 0 1.75V12.25C0 13.2125 0.72 14 1.6 14H14.4C15.28 14 16 13.2125 16 12.25V1.75C16 0.7875 15.28 0 14.4 0ZM4.8 6.125H1.6V1.75H4.8V6.125ZM9.6 6.125H6.4V1.75H9.6V6.125ZM14.4 6.125H11.2V1.75H14.4V6.125ZM4.8 12.25H1.6V7.875H4.8V12.25ZM9.6 12.25H6.4V7.875H9.6V12.25ZM14.4 12.25H11.2V7.875H14.4V12.25Z" fill="#5E25D9"/>
        </svg>
        <div className='filter-category-menu__label'>
          All categories
        </div>
        <div className='filter-category-menu__drop-icon'>
          <ArrowDownIcon />
        </div>
      </button>
      <div className='filter-menu__panel hidden'>
        Test panel
      </div>
    </div>
  )
}
export default FilterCategoryMenu;
