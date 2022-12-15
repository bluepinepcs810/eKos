import { useCallback, useContext, useState } from "react";
import { ProductFilterContext, ProductSorterEnum } from "./context/filter-context";
import { ProductFilterActionTypes } from "./context/fitler-reducer";

const ProductSorter = () => {
  const { state: { sorter }, dispatch } = useContext(ProductFilterContext);
  const [sort, setSort] = useState(sorter.sort);
  const [dir, setDir] = useState(sorter.dir);

  const handleAscClick = useCallback(() => {
    setDir('asc');
    dispatch({
      type: ProductFilterActionTypes.SET_SORTER_DIR,
      payload: true
    })
  }, [dispatch]);

  const handleDescClick = useCallback(() => {
    setDir('desc');
    dispatch({
      type: ProductFilterActionTypes.SET_SORTER_DIR,
      payload: false
    })
  }, [dispatch]);

  const handleSortChange = useCallback((value: ProductSorterEnum) => {
    setSort(value);
    dispatch({
      type: ProductFilterActionTypes.SET_SORTER_SORT,
      payload: value
    })
  }, [dispatch])

  return (
    <div className="flex gap-x-2">
      <div className="flex flex-col gap-y-1">
        <button className="" onClick={handleAscClick}>
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.13397 0.5C4.51887 -0.166667 5.48113 -0.166666 5.86603 0.5L9.33013 6.5C9.71503 7.16667 9.2339 8 8.4641 8H1.5359C0.766098 8 0.284973 7.16667 0.669873 6.5L4.13397 0.5Z" fill={dir === 'asc' ? '#5E25D9' : '#C883FF'}/>
          </svg>
        </button>
        <button className="" onClick={handleDescClick}>
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.13397 7.5C4.51887 8.16667 5.48113 8.16667 5.86603 7.5L9.33013 1.5C9.71503 0.833334 9.2339 0 8.4641 0H1.5359C0.766098 0 0.284973 0.833333 0.669873 1.5L4.13397 7.5Z" fill={dir === 'desc' ? '#5E25D9' : '#C883FF'}/>
          </svg>
        </button>
      </div>
      <div className="text-main-weighted items-center">
        <div>
          Sort by:
        </div>
      </div>
      <div>
        <select name="product_sort" className="rounded-md bg-main text-main-dark appearance-none"
          onChange={e => handleSortChange(e.target.value as ProductSorterEnum)}
        >
          <option value={ProductSorterEnum.PRICE}>Price</option>
          <option value={ProductSorterEnum.CREATED_AT}>Date</option>
          <option value={ProductSorterEnum.NAME}>Name</option>
          <option value={ProductSorterEnum.CATEGORY}>Category</option>
          <option value={ProductSorterEnum.CONDITION}>Condition</option>
        </select>
      </div>
    </div>
  )
}
export default ProductSorter;
