import React, { useState } from 'react';

type CategoryItemProps = {
  icon: any,
  hoverIcon: any,
  text: string,
  tag?: string
}

const CategoryItem: React.FC<CategoryItemProps> = ({icon: Icon, hoverIcon: HoverIcon, text, tag}) => {
  const [hover, setHover] = useState(false);
  return (
    <div className={"rounded-md w-[130px] h-[130px] flex flex-col justify-center items-center gap-3 text-main-weighted transition " + (hover ? 'bg-main-gradient cursor-pointer' : 'bg-main')}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
    >
      <div className='min-h-[40px] flex justify-center items-center'>
        {hover ? <HoverIcon /> : <Icon />}
      </div>
      <div className={"text-center px-2 text-sm " + (hover ? 'text-main-light' : '')}>
        {text}
      </div>
    </div>
  )
}
export default CategoryItem;
