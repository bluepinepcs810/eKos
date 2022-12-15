import { FC, useCallback } from 'react';
import { findCategoryItem } from '../../../libraries/constants/categories';
import ArrowRight from '../../../assets/icon/menu-arrow-right.svg';
import useProductFilter from '../hooks/useProductFilter';

type ProductFilterDrawerProps = {
  onClose: () => void;
};

const ProductFilterDrawer: FC<ProductFilterDrawerProps> = ({ onClose }) => {
  const { query, setFrom, setTo, refresh, handleApply } =
    useProductFilter();

  const category = findCategoryItem(query.category);
  const handleCancel = useCallback(() => {
    refresh();
    onClose();
  }, [onClose, refresh]);


  return (
    <div className="bg-main-light h-full overflow-y-auto">
      <div className="pr-14 pt-20 pl-32 pb-8">
        {/* B Category selector */}
        <div className="text-main-weighted pt-5">Category</div>
        <div className="flex py-5 items-center justify-between border-b border-third-main cursor-pointer">
          <div className="flex items-center gap-x-3.5">
            <div>{category?.icon.type3}</div>
            <div className="text-main-dark">{category?.text}</div>
          </div>
          <div>
            <ArrowRight />
          </div>
        </div>
        {/* E Category selector */}

        {/* B Price selector */}
        <div className="text-main-weighted pt-5 mb-5">Price range</div>
        <div className="flex justify-between gap-x-3.5 pb-3.5 border-b border-third-main">
          <div className="flex-grow">
            <div>
              <label className="text-main-dark">From</label>
            </div>
            <div>
              <input
                className="w-full border border-third-main py-2 px-2.5"
                placeholder="0"
                type="number"
                value={query.priceFrom}
                onChange={(e) => setFrom(e.target.value ? parseInt(e.target.value): undefined)}
              />
            </div>
          </div>
          <div className="flex-grow">
            <div>
              <label className="text-main-dark">To</label>
            </div>
            <div>
              <input
                className="w-full border border-third-main py-2 px-2.5"
                placeholder="No limit"
                type="number"
                value={query.priceTo}
                onChange={(e) =>
                  setTo(e.target.value ? parseInt(e.target.value): undefined)
                }
              />
            </div>
          </div>
        </div>
        {/* E Price selector */}

        {/* B Condition selector */}
        <div className="text-main-weighted pt-5">Category</div>
        <div className="flex py-5 items-center justify-between border-b border-third-main cursor-pointer">
          <div className="text-main-dark pl-8">Any item condition</div>
          <div>
            <ArrowRight />
          </div>
        </div>
        {/* E Condition selector */}

        {/* Footer */}
        <div className="text-main-weighted pt-5 mb-5">Time of listing</div>
        <div className="flex justify-around text-main-weighted pb-5 border-b border-third-main">
          <div className="flex flex-col items-center">
            <div className="text-2xl">24</div>
            <div>Hours</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl">7</div>
            <div>Days</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl">30</div>
            <div>Days</div>
          </div>
        </div>
      </div>

      <div className="flex justify-end px-5 gap-x-2">
        <button
          className="text-main-dark hover:bg-main-strong px-5 py-2 rounded-full transition"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="rounded-full text-main-light border border-main-dark px-5 py-2 filled-button"
          onClick={() => { onClose(); handleApply(); }}
        >
          Apply
        </button>
      </div>
    </div>
  );
};
export default ProductFilterDrawer;