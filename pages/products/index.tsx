import { ProductFilterContextProvider } from "../../components/products/context/filter-context";
import ProductFilter from "../../components/products/ProductFilter";
import ProductList from "../../components/products/ProductList";

const ProductsPage = () => {
  return (
    <div className="products-page">
      <ProductFilterContextProvider>
        <ProductFilter />
        <ProductList />
      </ProductFilterContextProvider>
    </div>
  )
}
export default ProductsPage;
