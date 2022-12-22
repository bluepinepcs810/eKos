import { useEffect } from "react";
import { useMyFavorites } from "../../../hooks/api.hooks";
import { ProductDetailModel } from "../../../libraries/models/product";
import { showError } from "../../../libraries/utils/toast";
import ProductCard from "../../common/ProductCard";

const FavoritePane = () => {
  const {
    data,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    refetch,
    isError,
    error,
  } = useMyFavorites();

  useEffect(() => {
    if (isError) {
      showError((error as any).message);
    }
  }, [error, isError]);

  return (
    <div className="py-4 px-5">
      <div className="product-list__body flex flex-wrap gap-x-0 md:gap-x-6 gap-y-9">
        {isSuccess &&
          data.pages.map((page) =>
            page.map((item) => (
              <ProductCard data={item} key={item.id} className="!bg-main" />
            ))
          )}
      </div>

      <div className="product-list__footer flex justify-center mt-12 mb-14">
        {hasNextPage && (
          <button
            className="px-10 py-2.5 rounded-full border border-main-dark bg-main text-main-dark outlined-button"
            onClick={() => fetchNextPage()}
          >
            View more
          </button>
        )}
      </div>
    </div>
  )
}

export default FavoritePane;
