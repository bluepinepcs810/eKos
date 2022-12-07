import React, { useState } from 'react';
import { CategoryItemProps } from '../../../libraries/types/category-item';

const CategoryItem: React.FC<CategoryItemProps> = ({category}) => {
  const [hover, setHover] = useState(false);
  return (
    <div className={"rounded-md w-[130px] h-[130px] flex flex-col justify-center items-center gap-3 text-main-weighted transition " + (hover ? 'bg-main-gradient cursor-pointer' : 'bg-main')}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
    >
      <div className='min-h-[40px] flex justify-center items-center'>
        {hover ? category.icon.type1Hover : category.icon.type1}
      </div>
      <div className={"text-center px-2 text-sm " + (hover ? 'text-main-light' : '')}>
        {category.text}
      </div>
    </div>
  )
}
export default CategoryItem;
