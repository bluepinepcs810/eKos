import React, { ButtonHTMLAttributes, useState } from 'react';
import ListProductIcon from '../../assets/icon/list-product.svg';
import ListProductHoverIcon from '../../assets/icon/list-product-hover.svg';

const ListProductButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const [hover, setHover] = useState<Boolean>(false);
  return (
    <button
      className="rounded-full h-[40px] bg-main-gradient text-white flex items-center justify-start pl-2 gap-2 pr-4"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      {!hover && <ListProductIcon />}
      {hover && <ListProductHoverIcon />}
      <div>List a product</div>
    </button>
  );
};
export default ListProductButton;
