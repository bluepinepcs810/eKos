import { useState, useCallback } from 'react';
import {
  ProductCondition,
  PRODUCT_CONDITIONS,
} from '../../../libraries/constants/products';
import CheckBox from '../../snippet/CheckBox';
import useProductFilter from '../hooks/useProductFilter';
import { ProductFilterPaneType } from './ProductFilterDrawer';

type ProductConditionPaneProps = {
  condition: ProductCondition[];
  setPane: (type: ProductFilterPaneType) => void;
  setCondition: (condition: ProductCondition[]) => void;
};

const ProductConditionPane: React.FC<ProductConditionPaneProps> = ({
  setPane,
  condition,
  setCondition,
}) => {
  const handleChange = useCallback(
    (targetCondition: ProductCondition, value: boolean) => {
      const conditions = [...condition];
      const index = conditions.findIndex((item) => item === targetCondition);
      const existing = index !== -1;
      if (value && existing) {
        return;
      } else if (value && !existing) {
        conditions.push(targetCondition);
      } else if (!value && existing) {
        conditions.splice(index, 1);
      } else {
        return;
      }
      setCondition(conditions);
    },
    [condition, setCondition]
  );

  return (
    <div className="bg-main-light h-full overflow-y-auto pt-12 px-3 md:pl-32 md:pr-2">
      <div className="flex flex-col">
        <div className="flex border-b border-third-main pb-4">
          <button onClick={() => setPane('main')}>
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.292893 8.22017C-0.0976311 7.82243 -0.0976311 7.17757 0.292893 6.77983L6.65685 0.298304C7.04738 -0.0994347 7.68054 -0.0994347 8.07107 0.298304C8.46159 0.696043 8.46159 1.3409 8.07107 1.73864L3.41421 6.48153H12.9815C13.544 6.48153 14 6.93751 14 7.5C14 8.06249 13.544 8.51847 12.9815 8.51847H3.41421L8.07107 13.2614C8.46159 13.6591 8.46159 14.304 8.07107 14.7017C7.68054 15.0994 7.04738 15.0994 6.65685 14.7017L0.292893 8.22017Z"
                fill="#5E25D9"
              />
            </svg>
          </button>
          <div className="text-center flex-grow text-main-weighted font-semibold">
            Item condition
          </div>
        </div>

        <div className="border-t border-third-main">
          {PRODUCT_CONDITIONS.map((item) => (
            <div
              className="flex justify-between py-2.5 px-6 border-b border-third-main"
              key={item.key}
            >
              <div className=" text-main-weighted">{item.text}</div>
              <div>
                <CheckBox
                  id={'filter_condition__' + item.key}
                  checked={condition.includes(item.key)}
                  onChange={(e) => handleChange(item.key, e.target.checked)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductConditionPane;
