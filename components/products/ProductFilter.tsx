import FilterCategoryMenu from './FilterCategoryMenu';
import FilterItemConditionMenu from './FilterItemConditionMenu';
import FiltersMenu from './FilterMenu';
import FilterPriceMenu from './FilterPriceMenu';
import ProductSorter from './ProductSorter';

const ProductFilter = () => {
  return (
    <div className="product-filter flex justify-center h-[60px] py-3 bg-main">
      <div className="content-container flex justify-between">
        <div className="product-filter__filters flex gap-x-2">
          <FiltersMenu />
          <FilterCategoryMenu />
          <FilterPriceMenu />
          <FilterItemConditionMenu />
          {/* <FilterLocationMenu /> */}
        </div>
        <div className="product-filter__sorter flex items-center">
          <ProductSorter />
        </div>
      </div>
    </div>
  );
};
export default ProductFilter;
