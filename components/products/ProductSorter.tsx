import { useCallback, useEffect, useState } from 'react';
import { ProductSorterEnum, productSorterToString } from './context/filter-context';
import useProductFilter from './hooks/useProductFilter';

const ProductSorter = () => {
  const { query, handleApply } = useProductFilter();
  const [active, setActive] = useState(false);

  const handleAscClick = useCallback(() => {
    handleApply({ dir: 'asc' });
  }, [handleApply]);

  const handleDescClick = useCallback(() => {
    handleApply({ dir: 'desc' });
  }, [handleApply]);

  const handleSortChange = useCallback(
    (value: ProductSorterEnum) => {
      handleApply({ sort: value });
      setActive(false);
    },
    [handleApply]
  );


  useEffect(() => {
    const outsideClick = (e: any) => {
      const sorterWrapper = e.target.closest('.sorter-wrapper');
      if (sorterWrapper) return;
      setActive(false);
    };
    document.addEventListener('touchend', outsideClick);
    document.addEventListener('click', outsideClick);
    return () => {
      document.removeEventListener('touchend', outsideClick);
      document.removeEventListener('click', outsideClick);
    }
  }, [])

  return (
    <div className="flex gap-x-2 flex-nowrap items-center">
      <div className="flex flex-col gap-y-1">
        <button className="" onClick={handleAscClick}>
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.13397 0.5C4.51887 -0.166667 5.48113 -0.166666 5.86603 0.5L9.33013 6.5C9.71503 7.16667 9.2339 8 8.4641 8H1.5359C0.766098 8 0.284973 7.16667 0.669873 6.5L4.13397 0.5Z"
              fill={query.dir === 'asc' ? '#5E25D9' : '#C883FF'}
            />
          </svg>
        </button>
        <button className="" onClick={handleDescClick}>
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.13397 7.5C4.51887 8.16667 5.48113 8.16667 5.86603 7.5L9.33013 1.5C9.71503 0.833334 9.2339 0 8.4641 0H1.5359C0.766098 0 0.284973 0.833333 0.669873 1.5L4.13397 7.5Z"
              fill={query.dir === 'desc' ? '#5E25D9' : '#C883FF'}
            />
          </svg>
        </button>
      </div>
      <div className="text-main-weighted items-center">
        <div className="whitespace-nowrap">Sort by:</div>
      </div>
      <div className={'sorter-wrapper group relative ' + (active ? 'active' : '')}>
        <div className='bg-main text-main-dark p-2 cursor-pointer' onClick={() => setActive(old => !old)}>
          {productSorterToString(query.sort || ProductSorterEnum.PRICE)}
        </div>
        <div className='product-sorter-panel hidden group-[.active]:block fixed left-3 lg:absolute lg:right-0 bg-main-light rounded-lg z-10 min-w-[300px]'>
          <div className='p-4 text-main-weighted border-b-2 border-third-main'>
            Sort by
          </div>
          <div className='px-4 py-2.5 border-b-2 border-third-main text-main-dark cursor-pointer hover:bg-main' onClick={() => handleSortChange(ProductSorterEnum.PRICE)}>
            {productSorterToString(ProductSorterEnum.PRICE)}
          </div>
          <div className='px-4 py-2.5 border-b-2 border-third-main text-main-dark cursor-pointer hover:bg-main' onClick={() => handleSortChange(ProductSorterEnum.CONDITION)}>
            {productSorterToString(ProductSorterEnum.CONDITION)}
          </div>
          <div className='px-4 py-2.5 border-b-2 border-third-main text-main-dark cursor-pointer hover:bg-main' onClick={() => handleSortChange(ProductSorterEnum.CATEGORY)}>
            {productSorterToString(ProductSorterEnum.CATEGORY)}
          </div>
          <div className='px-4 py-2.5 border-b-2 border-third-main text-main-dark cursor-pointer hover:bg-main' onClick={() => handleSortChange(ProductSorterEnum.NAME)}>
            {productSorterToString(ProductSorterEnum.NAME)}
          </div>
          <div className='px-4 py-2.5 border-b-2 border-third-main text-main-dark cursor-pointer hover:bg-main' onClick={() => handleSortChange(ProductSorterEnum.CREATED_AT)}>
            {productSorterToString(ProductSorterEnum.CREATED_AT)}
          </div>
          <div className='p-4 flex justify-end text-main-dark'>
            <button className='px-4 py-2 hover:bg-main rounded-lg' onClick={() => setActive(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductSorter;
