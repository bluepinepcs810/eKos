import CarsCategoryIcon from '../../assets/icon/category-cars.svg';
import ServicesCategoryIcon from '../../assets/icon/category-services.svg';
import JobsCategoryIcon from '../../assets/icon/category-jobs.svg';
import CategoryItem from '../../components/home/snippet/CategoryItem';
import CATEGORIES, {
  CATEGORY_KEYS,
  findCategoryItem,
} from '../../libraries/constants/categories';
import { PRODUCT_CONDITIONS } from '../../libraries/constants/products';
import FallbackImage from '../../components/snippet/FallbackImage';

const ProductCreatePage = () => {
  return (
    <div className="product-detail-page bg-main pt-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-[828px] mb-5">
        <div className="product-detail__card w-full bg-main-light p-5 mb-3">
          <h2 className="uppercase font-semibold text-main-dark mb-2">
            What will you list?
          </h2>
          <p className="text-main-dark text-sm mb-3">Set the product type</p>
          <button className="w-full text-center uppercase rounded-md py-5 text-main-light border border-main-dark filled-button hover:bg-main">
            Something I don&apos;t use anymore
          </button>
          <div className="flex mt-3">
            <div className="w-1/3 pr-2">
              <CategoryItem
                category={findCategoryItem(CATEGORY_KEYS.CARS)!}
                className="!w-full"
              />
            </div>
            <div className="w-1/3 pl-1 pr-1">
              <CategoryItem
                category={findCategoryItem(CATEGORY_KEYS.SERVICES)!}
                className="!w-full"
              />
            </div>
            <div className="w-1/3 pl-2">
              <CategoryItem
                category={findCategoryItem(CATEGORY_KEYS.JOBS)!}
                className="!w-full"
              />
            </div>
          </div>
        </div>
        <div className="product-detail__card w-full bg-main-light p-5 mb-3">
          <h2 className="uppercase font-semibold text-main-dark mb-6">
            Information about your item
          </h2>
          <div className="mb-5">
            <div className="text-main-weighted font-semibold mb-3.5">
              What are you selling?
            </div>
            <div>
              <input
                className="w-full py-4 px-6 border border-main-weighted rounded-md bg-main-light"
                placeholder="In some words..."
              />
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="w-1/2 pr-2">
              <div className="text-main-weighted font-semibold mb-3.5">
                Category
              </div>
              <div>
                <select className="w-full py-4 px-6 border border-main-weighted rounded-md bg-main-light select-box">
                  {CATEGORIES.map((category) => (
                    <option key={category.key} value={category.key}>
                      {category.text}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-1/2 pl-2">
              <div className="text-main-weighted font-semibold mb-3.5">
                Price
              </div>
              <div className="flex">
                <div className="w-full py-4 px-6 border border-main-weighted rounded-md flex">
                  <input
                    className="bg-main-light flex-grow"
                    placeholder="Your offer"
                    type="number"
                  />
                  <div>
                    <svg
                      width="27"
                      height="21"
                      viewBox="0 0 27 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.0507 0.21327C4.14427 0.0796061 4.29716 0 4.46032 0H26.0396C26.4441 0 26.6812 0.455341 26.4492 0.78673L22.9492 5.78675C22.8557 5.92042 22.7028 6.00002 22.5396 6.00002H0.960324C0.555813 6.00002 0.318737 5.54468 0.550708 5.21329L4.0507 0.21327Z"
                        fill="#C883FF"
                      />
                      <path
                        d="M22.9493 7.71327C22.8557 7.57961 22.7028 7.5 22.5397 7.5H0.960374C0.555863 7.5 0.318787 7.95534 0.550758 8.28673L4.05075 13.2868C4.14432 13.4204 4.29721 13.5 4.46037 13.5H26.0397C26.4442 13.5 26.6813 13.0447 26.4493 12.7133L22.9493 7.71327Z"
                        fill="#C883FF"
                      />
                      <path
                        d="M4.0507 15.2133C4.14427 15.0796 4.29716 15 4.46032 15H26.0396C26.4441 15 26.6812 15.4553 26.4492 15.7867L22.9492 20.7868C22.8557 20.9204 22.7028 21 22.5396 21H0.960324C0.555813 21 0.318737 20.5447 0.550708 20.2133L4.0507 15.2133Z"
                        fill="#C883FF"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-main-weighted flex justify-start items-center ml-4 w-32">
                  <div>=??$</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="w-1/2 pr-2">
              <div className="text-main-weighted font-semibold mb-3.5">
                Product condition
              </div>
              <div>
                <select className="w-full py-4 px-6 border border-main-weighted rounded-md bg-main-light select-box">
                  {PRODUCT_CONDITIONS.map((item) => (
                    <option key={item.key} value={item.key}>
                      {item.text}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="product-detail__card w-full bg-main-light p-5 mb-3">
          <h2 className="uppercase font-semibold text-main-dark mb-3">
            Photos
          </h2>
          <div className="mb-3 h-[130px] uppercase text-main-weighted border-2 rounded-lg border-main-weighted border-dashed flex justify-center items-center">
            <div>Move your photo here</div>
          </div>
          <div className="flex flex-wrap gap-x-[15px] gap-y-[15px]">
            <FallbackImage className="p-[21px] rounded-md" />
            <FallbackImage className="p-[21px] rounded-md" />
            <FallbackImage className="p-[21px] rounded-md" />
            <FallbackImage className="p-[21px] rounded-md" />
            <FallbackImage className="p-[21px] rounded-md" />
            <FallbackImage className="p-[21px] rounded-md" />
            <FallbackImage className="p-[21px] rounded-md" />
            <FallbackImage className="p-[21px] rounded-md" />
          </div>
        </div>

        <div className="product-detail__card w-full bg-main-light p-5 mb-3">
          <h2 className="uppercase font-semibold text-main-dark mb-3">
            Your products are in
          </h2>
          <div className="mb-3">
            <input
              className="w-full py-4 px-6 border border-main-weighted rounded-md bg-main-light"
              placeholder="Set a location"
            />
          </div>
          <div className="w-full h-[180px] bg-main-weighted rounded-md mb-2"></div>
          <div className="text-main-weighted">
            This is the spot where your profile is located. We will show all
            your products here.
          </div>
        </div>
        <div className="product-detail__card w-full bg-main-light p-5 mb-3 flex justify-between">
          <button className="rounded-full py-1.5 border border-main-dark text-main-light filled-button min-w-[175px]">
            Post Ad
          </button>
          <div className="flex items-center text-main-dark cursor-pointer">
            <div>Help?</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCreatePage;
