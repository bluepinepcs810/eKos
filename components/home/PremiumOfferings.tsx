import Link from 'next/link';
import { useCallback } from 'react';
import MagnifierIcon from '../../assets/icon/magnifier-gray.svg';
import { useProductList } from '../../hooks/api.hooks';
import ProductCard from '../common/ProductCard';
import useProductFilter from '../products/hooks/useProductFilter';

const PremiumOfferings = () => {
  const {
    data,
    isSuccess
  } = useProductList({ featured: true });

  const {
    query: { q },
    setQ,
    handleApply,
  } = useProductFilter();
  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      handleApply();
    },
    [handleApply]
  );

  return (
    <div className="premium-offerings bg-main py-14 flex justify-center" id="premium-offerings">
      <div className="content-container">
        <div className="premium-offerings__header flex justify-center lg:justify-between pr-1">
          <h2 className="text-[28px] font-semibold text-center text-main-thick mb-5">
            Premium Offerings
          </h2>

          {/* ----- B Search box ------*/}
          <div className="search-box hidden lg:block">
            <div className="flex gap-x-2 bg-white justify-start items-center rounded-full px-3 py-2">
              <div className="icon">
                <MagnifierIcon />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="search-input rounded-full">
                  <input className="mr-5 w-56" type="text"
                    placeholder="Search"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
          {/* ----- E Search box ------*/}
        </div>

        <div className="premium-offerings__body flex flex-wrap gap-x-6 gap-y-9">
          {/*  TODO get featured products */}
          {isSuccess &&
            data.pages.map((page) =>
              page.productList.map((item) => (
                <ProductCard data={item} key={item.id} />
              ))
            )
          }
        </div>
        <div className="premium-offerings__footer flex justify-center mt-12 mb-14">
          <Link
            href="/products"
            className="px-10 py-2.5 rounded-full border border-main-dark bg-main text-main-dark outlined-button"
          >
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PremiumOfferings;
