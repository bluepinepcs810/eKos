import React from 'react';
import Image from 'next/image';

type CityItemProps = {
  image: string;
  text: string;
};
const CityItem: React.FC<CityItemProps> = ({ image, text }) => {
  return (
    <div className="city-item flex p-[3px] bg-main rounded-lg">
      <Image
        className="rounded-md"
        src={image}
        alt="london"
        width={54}
        height={54}
      />
      <div className="flex items-center justify-center flex-grow">
        <div className="font-semibold text-main-thick">{text}</div>
      </div>
    </div>
  );
};

export default CityItem;
