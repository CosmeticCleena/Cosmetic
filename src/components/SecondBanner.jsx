import React from "react";
import BannerImg2 from "../assets/images/Banner_2.svg";
import Banner from "../components/Banner";
import BannerData from "../configs/Banners.json";
import QuoteArrow from "../assets/icons/Quote-Arrows.svg";
import { useState } from "react";

const banner = BannerData[1];
const SecondBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <Banner imgSrc={BannerImg2}>
      <img
        src={QuoteArrow}
        alt="Quote Arrow"
        className="w-[60px] h-[50px] mx-auto"
      />
      <p className="text-white text-3xl font-magnificent text-center">
        {banner.title}
      </p>
      <p className="text-center mb-4 text-[#FFFFFF] md:w-[50%] md:mx-auto">
        {banner.description}
      </p>
      <div className="flex items-center justify-center gap-4 py-4">
        {Array.from({ length: banner.indicators }, (_, index) => {
          const isActive =
            index === activeIndex ? "bg-[#6A6E4E] opacity-70" : "bg-white";
          return (
            <button
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
