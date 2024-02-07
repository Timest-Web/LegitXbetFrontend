// components/Carousel.js

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MyCarousel = ({customItem}:{customItem: React.ReactNode}) => {
  const settings = {
    className: "slider variable-width",
    variableWidth: true
  };
  return (
    <Slider {...settings} className='flex items-center text-white w-full'>
        {customItem}
    </Slider>

  );
};

export default MyCarousel;




















