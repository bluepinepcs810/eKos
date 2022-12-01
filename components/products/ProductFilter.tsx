import FiltersMenu from "./FilterMenu";

const ProductFilter = () => {
  return (
    <div className="product-filter flex justify-center h-[60px] py-3 bg-main">
      <div className="content-container flex justify-between">
        <div className="product-filter__filters">
          <FiltersMenu />
        </div>
        <div className="product-filter__sorter">
          Sorter
        </div>
      </div>
    </div>
  )
}
export default ProductFilter;
