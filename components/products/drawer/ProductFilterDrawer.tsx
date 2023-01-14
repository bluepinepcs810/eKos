'use client';

import { FC, useCallback, useState, useEffect } from 'react';
import {
  CategoryItemType,
  findCategoryItem,
} from '../../../libraries/constants/categories';
import ArrowRight from '../../../assets/icon/menu-arrow-right.svg';
import useProductFilter from '../hooks/useProductFilter';
import { AnimatePresence, motion } from 'framer-motion';
import ProductCategoryPane from './ProductCategoryPane';
import ProductConditionPane from './ProductConditionPane';

type ProductFilterDrawerProps = {
  onClose: () => void;
};

export type ProductFilterPaneType = 'category' | 'price' | 'main';

const ProductFilterDrawer: FC<ProductFilterDrawerProps> = ({ onClose }) => {
  const [currentPane, setCurrentPane] = useState<ProductFilterPaneType>('main');
  const {
    query,
    setCategory,
    setFrom,
    setTo,
    setCondition,
    refresh,
    handleApply,
  } = useProductFilter();

  const category = findCategoryItem(query.category);

  const handleCancel = useCallback(() => {
    refresh();
    onClose();
  }, [onClose, refresh]);

  const handleSelectCategory = useCallback(
    (category: CategoryItemType) => {
      setCategory(category.key);
      setCurrentPane('main');
    },
    [setCategory]
  );

  return (
    <div className="overflow-hidden h-full">
      <AnimatePresence>
        {currentPane === 'main' && (
          <motion.div
            className="bg-main-light h-full overflow-y-auto"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%' }}
            transition={{ x: { duration: 0 } }}
          >
            <div className="bg-main-light h-full overflow-y-auto">
              <div className="px-4 md:pr-14 md:pt-20 md:pl-32 md:pb-8">
                {/* B Category selector */}
                <div className="text-main-weighted pt-5">Category</div>
                <button
                  className="flex py-5 items-center justify-between border-b border-third-main w-full"
                  onClick={() => setCurrentPane('category')}
                >
                  <div className="flex items-center gap-x-3.5">
                    <div>{category?.icon.type3}</div>
                    <div className="text-main-dark">{category?.text}</div>
                  </div>
                  <div>
                    <ArrowRight />
                  </div>
                </button>
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
                        className="bg-white text-black w-full border border-third-main py-2 px-2.5"
                        placeholder="0"
                        type="number"
                        value={query.priceFrom}
                        onChange={(e) =>
                          setFrom(
                            e.target.value
                              ? parseInt(e.target.value)
                              : undefined
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div>
                      <label className="text-main-dark">To</label>
                    </div>
                    <div>
                      <input
                        className="bg-white text-black w-full border border-third-main py-2 px-2.5"
                        placeholder="No limit"
                        type="number"
                        value={query.priceTo}
                        onChange={(e) =>
                          setTo(
                            e.target.value
                              ? parseInt(e.target.value)
                              : undefined
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
                {/* E Price selector */}

                {/* B Condition selector */}
                <div className="text-main-weighted pt-5">Category</div>
                <button
                  className="flex py-5 items-center justify-between border-b border-third-main cursor-pointer w-full"
                  onClick={() => setCurrentPane('price')}
                >
                  <div className="text-main-dark pl-8">Any item condition</div>
                  <div>
                    <ArrowRight />
                  </div>
                </button>
                {/* E Condition selector */}

                {/* Footer */}
                <div className="text-main-weighted pt-5 mb-5">
                  Time of listing
                </div>
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

              <div
                className="lg:mt-4 lg:mb-4 flex justify-end gap-x-2 fixed z-20 bottom-0 left-0 pr-5 py-3 lg:py-0
                lg:relative w-full border-t border-main-weighted lg:border-none"
              >
                <button
                  className="text-main-dark hover:bg-main-strong px-5 py-2 rounded-full transition"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="rounded-full text-main-light border border-main-dark px-5 py-2 filled-button"
                  onClick={() => {
                    onClose();
                    handleApply();
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {currentPane === 'category' && (
          <motion.div
            className="h-full"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            // transition={{ x: { duration: 0 }}}
          >
            <ProductCategoryPane
              setPane={setCurrentPane}
              setCategory={handleSelectCategory}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {currentPane === 'price' && (
          <motion.div
            className="h-full"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            // transition={{ x: { duration: 0 }}}
          >
            <ProductConditionPane
              setPane={setCurrentPane}
              condition={query.condition}
              setCondition={setCondition}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default ProductFilterDrawer;
