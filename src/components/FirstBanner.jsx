import React from "react";
import BannerData from "../configs/Banners.json";
import BannerImg1 from "../assets/images/Banner_1.svg";
import Banner from "../components/Banner";

const banner = BannerData[0];
const FirstBanner = () => {
  return (
    <Banner imgSrc={BannerImg1}>
      <p className="text-[#D1AE62] text-3xl font-magnificent text-start md:text-center">
        {banner.title}
      </p>
      <p className="text-center mb-4 text-[#FFFFFF] md:w-[50%] md:mx-auto">
        {banner.description}
      </p>
      <button className="w-[200px] h-[56px] bg-[#D1AE62] text-white mx-auto rounded-md">
        {banner.buttonText}
      </button>
    </Banner>
  );
};

export default FirstBanner;
