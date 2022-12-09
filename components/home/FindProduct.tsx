import Image from 'next/image';
import MagnifierWhiteIcon from '../../assets/icon/magnifier-white.svg';
import CityItem from './snippet/CityItem';

const FindProduct = () => {
  return (
    <section className="find-product bg-main-light min-h-[374px] flex justify-center items-center">
      <div className="content-container">
        <h2 className="text-[28px] font-semibold text-center text-main-thick mb-5">
          Find a product near me
        </h2>
        <div className="search-city flex justify-center items-center gap-x-1 mb-7">
          <input
            className="search-city-input w-[300px] py-2 px-5 rounded-full border border-main-thick"
            placeholder="Find your city"
          />
          <button className="rounded-full w-[40px] h-[40px] bg-main-thick flex justify-center items-center">
            <MagnifierWhiteIcon />
          </button>
        </div>
        <div className="city-bar flex gap-6 flex-wrap">
          <CityItem image="/assets/london.jpg" text="London" />
          <CityItem image="/assets/lecester.jpg" text="Lecester" />
          <CityItem image="/assets/manchester.jpg" text="Manchester" />
          <CityItem image="/assets/wast_burton.jpg" text="Wast Burton" />
          <CityItem image="/assets/bristol.jpg" text="Bristol" />
          <CityItem image="/assets/birmingham.jpg" text="Birmingham" />
        </div>
      </div>
    </section>
  );
};

export default FindProduct;
