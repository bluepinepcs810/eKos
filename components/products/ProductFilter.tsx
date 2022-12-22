import FilterCategoryMenu from './FilterCategoryMenu';
import FilterItemConditionMenu from './FilterItemConditionMenu';
import FilterLocationMenu from './FilterLocationMenu';
import FiltersMenu from './FilterMenu';
import FilterPriceMenu from './FilterPriceMenu';
import ProductSorter from './ProductSorter';

const ProductFilter = () => {
  return (
    <div className="product-filter flex justify-center h-[60px] py-3 bg-main">
      <div className="content-container flex justify-between flex-row lg:flex-row-reverse overflow-x-auto lg:overflow-x-visible">
        <div className="product-filter__sorter flex items-center">
          <ProductSorter />
        </div>
        <div className="product-filter__filters flex gap-x-2">
          <FiltersMenu />
          <FilterCategoryMenu />
          <FilterPriceMenu />
          <FilterItemConditionMenu />
          <FilterLocationMenu />
        </div>
      </div>
    </div>
  );
};
export default ProductFilter;
