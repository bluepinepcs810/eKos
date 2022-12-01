import React, { useState } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryItem from "../snippet/CategoryItem";

import AgricultureIndustrialCategoryIcon from '../../assets/icon/category-agriculture-industrial.svg';
import AllCategoryIcon from '../../assets/icon/category-all.svg';
import AppliancesCategoryIcon from '../../assets/icon/category-appliances.svg';
import BabyChildCategoryIcon from '../../assets/icon/category-baby-child.svg';
import BikesCategoryIcon from '../../assets/icon/category-bikes.svg';
import CarsCategoryIcon from '../../assets/icon/category-cars.svg';
import CollectableArtCategoryIcon from '../../assets/icon/category-collectable-art.svg';
import ComputerElectronicCategoryIcon from '../../assets/icon/category-computer-electronic.svg';
import ConstructionsCategoryIcon from '../../assets/icon/category-constructions.svg';
import FashionCategoryIcon from '../../assets/icon/category-fashion.svg';
import GamesConsolesCategoryIcon from '../../assets/icon/category-games-consoles.svg';
import HomeGardenCategoryIcon from '../../assets/icon/category-home-garden.svg';
import JobsCategoryIcon from '../../assets/icon/category-jobs.svg';
import MovieBookMusicCategoryIcon from '../../assets/icon/category-movie-book-music.svg';
import OtherCategoryIcon from '../../assets/icon/category-other.svg';
import PhoneAccessoryCategoryIcon from '../../assets/icon/category-phone-accessory.svg';
import ServicesCategoryIcon from '../../assets/icon/category-services.svg';
import SportsCategoryIcon from '../../assets/icon/category-sports.svg';
import TvAudioCategoryIcon from '../../assets/icon/category-tv-audio.svg';


import AgricultureIndustrialCategoryHoverIcon from '../../assets/icon/category-agriculture-industrial-hover.svg';
import AllCategoryHoverIcon from '../../assets/icon/category-all-hover.svg';
import AppliancesCategoryHoverIcon from '../../assets/icon/category-appliances-hover.svg';
import BabyChildCategoryHoverIcon from '../../assets/icon/category-baby-child-hover.svg';
import BikesCategoryHoverIcon from '../../assets/icon/category-bikes-hover.svg';
import CarsCategoryHoverIcon from '../../assets/icon/category-cars-hover.svg';
import CollectableArtCategoryHoverIcon from '../../assets/icon/category-collectable-art-hover.svg';
import ComputerElectronicCategoryHoverIcon from '../../assets/icon/category-computer-electronic-hover.svg';
import ConstructionsCategoryHoverIcon from '../../assets/icon/category-constructions-hover.svg';
import FashionCategoryHoverIcon from '../../assets/icon/category-fashion-hover.svg';
import GamesConsolesCategoryHoverIcon from '../../assets/icon/category-games-consoles-hover.svg';
import HomeGardenCategoryHoverIcon from '../../assets/icon/category-home-garden-hover.svg';
import JobsCategoryHoverIcon from '../../assets/icon/category-jobs-hover.svg';
import MovieBookMusicCategoryHoverIcon from '../../assets/icon/category-movie-book-music-hover.svg';
import OtherCategoryHoverIcon from '../../assets/icon/category-other-hover.svg';
import PhoneAccessoryCategoryHoverIcon from '../../assets/icon/category-phone-accessory-hover.svg';
import ServicesCategoryHoverIcon from '../../assets/icon/category-services-hover.svg';
import SportsCategoryHoverIcon from '../../assets/icon/category-sports-hover.svg';
import TvAudioCategoryHoverIcon from '../../assets/icon/category-tv-audio-hover.svg';

const NextArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, style, onClick } = props;
  const [hover, setHover] = useState(false);
  return (
    <div className={className} style={style} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="border border-main-dark p-2 rounded-full flex justify-center items-center transition hover:bg-main-dark">
        <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L9.29289 9.29289C9.68342 9.68342 9.68342 10.3166 9.29289 10.7071L1 19" strokeWidth="2" strokeLinecap="round"
            stroke={hover ? '#fff' : '#5E25D9'}
          />
        </svg>
      </div>
    </div>
  )
}
const PrevArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, style, onClick } = props;
  const [hover, setHover] = useState(false);

  return (
    <div className={className} style={style} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="border border-main-dark p-2 rounded-full flex justify-center items-center transition hover:bg-main-dark">
        <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 1L1.70711 9.29289C1.31658 9.68342 1.31658 10.3166 1.70711 10.7071L10 19" strokeWidth="2" strokeLinecap="round"
            stroke={hover ? '#fff' : '#5E25D9'}
          />
        </svg>
      </div>
    </div>
  )
}

const Banner = () => {
  return (
    <section className="banner bg-main-light min-h-[418px] flex items-center justify-center">
      <div className="content-container flex flex-col items-center justify-center">
        <h1 className="text-[28px] text-main-thick font-semibold mb-7">What are you looking for?</h1>
        <div className="content-container">
          <Slider dots infinite speed={500} slidesToShow={8} slidesToScroll={1} accessibility nextArrow={<NextArrow />} prevArrow={<PrevArrow />} centerPadding="10px">
            <div>
              <CategoryItem icon={AllCategoryIcon} hoverIcon={AllCategoryHoverIcon} text="All Categories" />
            </div>
            <div>
              <CategoryItem icon={CarsCategoryIcon} hoverIcon={CarsCategoryHoverIcon} text="Cars" />
            </div>
            <div>
              <CategoryItem icon={FashionCategoryIcon} hoverIcon={FashionCategoryHoverIcon} text="Fashion & Accessories" />
            </div>
            <div>
              <CategoryItem icon={TvAudioCategoryIcon} hoverIcon={TvAudioCategoryHoverIcon} text="TV, Audio & Cameras" />
            </div>
            <div>
              <CategoryItem icon={PhoneAccessoryCategoryIcon} hoverIcon={PhoneAccessoryCategoryHoverIcon} text="Cell Phones & Accessories" />
            </div>
            <div>
              <CategoryItem icon={ComputerElectronicCategoryIcon} hoverIcon={ComputerElectronicCategoryHoverIcon} text="Computers & Electronic" />
            </div>
            <div>
              <CategoryItem icon={SportsCategoryIcon} hoverIcon={SportsCategoryHoverIcon} text="Sports & Leisure" />
            </div>
            <div>
              <CategoryItem icon={BikesCategoryIcon} hoverIcon={BikesCategoryHoverIcon} text="Bikes" />
            </div>
            <div>
              <CategoryItem icon={GamesConsolesCategoryIcon} hoverIcon={GamesConsolesCategoryHoverIcon} text="Games & Consoles" />
            </div>
            <div>
              <CategoryItem icon={HomeGardenCategoryIcon} hoverIcon={HomeGardenCategoryHoverIcon} text="Home & Garden" />
            </div>
            <div>
              <CategoryItem icon={AppliancesCategoryIcon} hoverIcon={AppliancesCategoryHoverIcon} text="Appliances" />
            </div>
            <div>
              <CategoryItem icon={MovieBookMusicCategoryIcon} hoverIcon={MovieBookMusicCategoryHoverIcon} text="Movies, Bookes & Musics" />
            </div>
            <div>
              <CategoryItem icon={AppliancesCategoryIcon} hoverIcon={AppliancesCategoryHoverIcon} text="Appliances" />
            </div>
            <div>
              <CategoryItem icon={BabyChildCategoryIcon} hoverIcon={BabyChildCategoryHoverIcon} text="Baby & Child" />
            </div>
            <div>
              <CategoryItem icon={CollectableArtCategoryIcon} hoverIcon={CollectableArtCategoryHoverIcon} text="Collectables & Art" />
            </div>
            <div>
              <CategoryItem icon={ConstructionsCategoryIcon} hoverIcon={ConstructionsCategoryHoverIcon} text="Constructions" />
            </div>
            <div>
              <CategoryItem icon={AgricultureIndustrialCategoryIcon} hoverIcon={AgricultureIndustrialCategoryHoverIcon} text="Agriculture & Industrial" />
            </div>
            <div>
              <CategoryItem icon={JobsCategoryIcon} hoverIcon={JobsCategoryHoverIcon} text="Jobs" />
            </div>
            <div>
              <CategoryItem icon={ServicesCategoryIcon} hoverIcon={ServicesCategoryHoverIcon} text="Services" />
            </div>
            <div>
              <CategoryItem icon={OtherCategoryIcon} hoverIcon={OtherCategoryHoverIcon} text="Other" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default Banner;
