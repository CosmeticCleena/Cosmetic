import React, { useState } from "react";
import BannerImg1 from "../../assets/images/Banner_1.svg";
import Banner from "../common/Banner";
import BannerData from "../../configs/Banners.json";
const FirstBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = BannerData.FirstBanner;

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Banner imgSrc={BannerImg1}>
      <p className="text-[#D1AE62] text-3xl font-magnificent text-start md:text-center">
        {slides[activeIndex].title}
      </p>
      <p className="text-center mb-4 text-[#FFFFFF] md:w-[70%] md:mx-auto">
        {slides[activeIndex].description}
      </p>
      <button className="w-[200px] h-[56px] bg-[#D1AE62] text-white mx-auto rounded-md mb-6">
        {slides[activeIndex].buttonText}
      </button>
      <div className="flex items-center justify-center gap-4">
        {slides.map((_, index) => {
          const isActive =
            index === activeIndex ? "bg-[#D1AE62] opacity-70" : "bg-white";
          return (
            <button
              key={index}
              className={`h-3 w-3 rounded-full ${isActive}`}
              onClick={() => handleDotClick(index)}
            ></button>
          );
        })}
      </div>
    </Banner>
  );
};

export default FirstBanner;
