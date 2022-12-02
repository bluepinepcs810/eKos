import FilterCategoryMenu from "./FilterCategoryMenu";
import FilterItemConditionMenu from "./FilterItemConditionMenu";
import FilterLocationMenu from "./FilterLocationMenu";
import FiltersMenu from "./FilterMenu";
import FilterPriceMenu from "./FilterPriceMenu";

const ProductFilter = () => {
  return (
    <div className="product-filter flex justify-center h-[60px] py-3 bg-main">
      <div className="content-container flex justify-between">
        <div className="product-filter__filters flex gap-x-2">
          <FiltersMenu />
          <FilterCategoryMenu />
          <FilterPriceMenu />
          <FilterItemConditionMenu />
          <FilterLocationMenu />
        </div>
        <div className="product-filter__sorter">
          Sorter
        </div>
      </div>
    </div>
  )
}
export default ProductFilter;
