import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CustomSlider = ({customItem}:{customItem: React.ReactNode}) => {
  const settings = {
    className: "slider variable-width",
    variableWidth: true,
    infinite: false,
  };
  return (
    <div className='w-full'>
      <Slider {...settings} className="flex items-center text-white w-full">
        {customItem}
      </Slider>
    </div>
  );
};

export default CustomSlider;




















