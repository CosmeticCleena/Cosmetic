import React from "react";
import { useState } from "react";
import BannerImg2 from "../../assets/images/Banner_2.svg";
import Banner from "../common/Banner";
import QuoteArrow from "../../assets/icons/Quote-Arrows.svg";
import BannerData from "../../configs/Banners.json";

const SecondBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = BannerData.SecondBanner;

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Banner imgSrc={BannerImg2} mt="mt-20">
      <img
        src={QuoteArrow}
        alt="Quote Arrow"
        className="w-[60px] h-[50px] mx-auto"
        loading="lazy"
      />
      <p className="text-white text-3xl font-magnificent text-center mb-4">
        {slides[activeIndex].title}
      </p>
      <p className="text-center mb-6 text-[#FFFFFF] md:w-[70%] md:mx-auto">
        {slides[activeIndex].description}
      </p>
      <div className="flex items-center justify-center gap-4 py-4">
        {slides.map((_, index) => {
          const isActive =
            index === activeIndex ? "bg-[#6A6E4E] opacity-70" : "bg-white";
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

export default SecondBanner;
