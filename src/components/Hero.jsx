import React from "react";
import HeroBg from "../assets/images/Hero.svg";
import LinearImage from "./LinearImage";
import { useState } from "react";

const Hero = () => {
  const [displayImg, setDisplayImg] = useState();
  return (
    <LinearImage leftColor="from-white" imgSrc={HeroBg}>
      <div className="relative z-20 h-full flex items-center">
        <div className="absolute w-[90%] lg:w-full max-w-md top-[40%] left-[5%] lg:left-[10%]">
          <h1 className="font-magnificent text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6">
            Dòng mỹ phẩm
            <br />
            cao cấp
          </h1>
          <p className="text-xl mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
          </p>
          <div>
            <button className="bg-gradient-to-r from-[#B08B3B] to-[#EAC980] text-md px-8 py-3 transition duration-300">
              Khám phá ngay
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        <div className="w-10 lg:w-16 h-1 bg-gray-900"></div>
        <div className="w-10 lg:w-16 h-1 bg-[#79541F]"></div>
        <div className="w-10 lg:w-16 h-1 bg-[#79541F]"></div>
      </div>
    </LinearImage>
  );
};

export default Hero;
