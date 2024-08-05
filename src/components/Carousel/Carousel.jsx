import React from "react";
import Slider from "react-slick";
const Carousel = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div className="w-full px-14">
      <Slider {...settings}>
        <div className="h-[400px] rounded-xl p-3">
          <div className="w-full h-full bg-violet-500 rounded-xl flex justify-center items-center text-white text-2xl">
            Will be added
          </div>
        </div>
        <div className="h-[400px] rounded-xl p-3">
          <div className="w-full h-full bg-violet-500 rounded-xl flex justify-center items-center text-white text-2xl">
            Will be added
          </div>
        </div>
        <div className="h-[400px] rounded-xl p-3">
          <div className="w-full h-full bg-violet-500 rounded-xl flex justify-center items-center text-white text-2xl">
            Will be added
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
