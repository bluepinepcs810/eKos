import ProductFilter from "../../components/products/ProductFilter";
import ProductList from "../../components/products/ProductList";

const ProductsPage = () => {
  return (
    <div className="products-page">
      <ProductFilter />
      <ProductList />
    </div>
  )
}
export default ProductsPage;
