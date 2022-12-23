import MyProductsPane from "../../../components/profile/products/MyProductsPane";
import ProfileLeftPane from "../../../components/profile/ProfileLeftPane";
import { ProfilePane } from "../../../libraries/types/pages/profile";

const MyProducts = () => {
  return (
    <div className="inbox-page bg-main-light min-h-[418px] flex justify-center h-full">
      <div className="content-container flex justify-start">
        <ProfileLeftPane activePane={ProfilePane.PRODUCTS} />
        <div className="right-pane flex-grow">
          <MyProductsPane />
        </div>
      </div>
    </div>
  )
}
export default MyProducts;
