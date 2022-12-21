import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import NextArrow from '../snippet/slick/NextArrow';
import PrevArrow from '../snippet/slick/PrevArrow';
import CategoryItem from './snippet/CategoryItem';
import categories from '../../libraries/constants/categories';

const Banner = () => {
  return (
    <section className="banner bg-main-light min-h-[418px] flex items-center justify-center" id="home-banner">
      <div className="content-container flex flex-col items-center justify-center">
        <h1 className="text-[28px] text-main-thick font-semibold mb-7 text-center">
          What are you looking for?
        </h1>
        <div className="content-container">
          <Slider
            dots
            infinite
            speed={500}
            slidesToShow={8}
            slidesToScroll={1}
            accessibility
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            centerPadding="10px"
            responsive={[
              {
                breakpoint: 1280,
                settings: {
                  slidesToScroll: 4
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 4
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: false
                }
              },
              {
                breakpoint: 452,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: false,
                  centerMode: true
                }
              }
            ]}
          >
            {categories.map((category) => (
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
