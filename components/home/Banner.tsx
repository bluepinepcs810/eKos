import React, { useState } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import NextArrow from "../snippet/slick/NextArrow";
import PrevArrow from "../snippet/slick/PrevArrow";
import CategoryItem from "./snippet/CategoryItem";
import categories from "../../libraries/constants/categories";



const Banner = () => {
  return (
    <section className="banner bg-main-light min-h-[418px] flex items-center justify-center">
      <div className="content-container flex flex-col items-center justify-center">
        <h1 className="text-[28px] text-main-thick font-semibold mb-7">What are you looking for?</h1>
        <div className="content-container">
          <Slider dots infinite speed={500} slidesToShow={8} slidesToScroll={1} accessibility nextArrow={<NextArrow />} prevArrow={<PrevArrow />} centerPadding="10px">
            {categories.map(category => (
              <div key={category.key}>
                <CategoryItem category={category} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default Banner;
