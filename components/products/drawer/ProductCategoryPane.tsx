import { FC } from "react";
import CATEGORIES from "../../../libraries/constants/categories";
import { ProductFilterPaneType } from "./ProductFilterDrawer";

type ProductCategoryPaneProps = {
  setPane: (type: ProductFilterPaneType) => void
}

const ProductCategoryPane: FC<ProductCategoryPaneProps> = ({ setPane }) => {

  return (
    <div className="bg-main-light h-full overflow-y-auto pt-12 pl-32 pr-2">
      <div className="flex flex-col">
        <div className="flex border-b border-third-main pb-4">
          <button
            onClick={() => setPane('main')}
          >
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 8.22017C-0.0976311 7.82243 -0.0976311 7.17757 0.292893 6.77983L6.65685 0.298304C7.04738 -0.0994347 7.68054 -0.0994347 8.07107 0.298304C8.46159 0.696043 8.46159 1.3409 8.07107 1.73864L3.41421 6.48153H12.9815C13.544 6.48153 14 6.93751 14 7.5C14 8.06249 13.544 8.51847 12.9815 8.51847H3.41421L8.07107 13.2614C8.46159 13.6591 8.46159 14.304 8.07107 14.7017C7.68054 15.0994 7.04738 15.0994 6.65685 14.7017L0.292893 8.22017Z" fill="#5E25D9"/>
            </svg>
          </button>
          <div className="text-center flex-grow text-main-weighted font-semibold">Category</div>
        </div>
        {CATEGORIES.map(category => (
          <button className="flex items-center border-b border-third-main py-4 gap-x-3" key={category.key}>
            <div className="w-6 flex items-center justify-center">
              {category.icon.type3}
            </div>
            <div className="text-main-dark">
              {category.text}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
export default ProductCategoryPane;
