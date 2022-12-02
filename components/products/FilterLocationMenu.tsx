import ArrowDownIcon from '../../assets/icon/arrow-down.svg';

const FilterLocationMenu = () => {

  return (
    <div className="filter-category-menu">
      <button className="filter-menu-button rounded-full bg-main-light py-1.5 px-5 text-main-dark hover:bg-main-strong transition flex justify-center items-center gap-x-3">
        <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 6.3C0 2.817 2.90643 0 6.5 0C10.0936 0 13 2.817 13 6.3C13 11.025 6.5 18 6.5 18C6.5 18 0 11.025 0 6.3ZM6.5 1.8C3.93714 1.8 1.85714 3.816 1.85714 6.3C1.85714 8.865 4.56857 12.789 6.5 15.192C8.46857 12.771 11.1429 8.892 11.1429 6.3C11.1429 3.816 9.06286 1.8 6.5 1.8ZM8.82158 6.30005C8.82158 7.54269 7.78224 8.55005 6.50016 8.55005C5.21807 8.55005 4.17873 7.54269 4.17873 6.30005C4.17873 5.05741 5.21807 4.05005 6.50016 4.05005C7.78224 4.05005 8.82158 5.05741 8.82158 6.30005Z" fill="#5E25D9"/>
        </svg>

        <div className='filter-category-menu__label'>
          Location
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
export default FilterLocationMenu;
