import React from "react";
import HeroBg from "../../assets/images/Hero.svg";
import LinearImage from "../common/LinearImage";
import HeroData from "../../configs/Hero.json";

const Hero = () => {
  return (
    <LinearImage
      leftColor="from-white/50"
      imgSrc={HeroBg}
      isLinear={false}
      height="h-screen"
    >
      <div className="relative z-20 h-full w-full flex items-center">
        <div className="absolute w-[90%] md:w-[40%] text-center md:text-start top-[40%] left-[5%] lg:left-[10%]">
          <h1 className="font-magnificent text-2xl lg:text-4xl font-light tracking-tight text-gray-900 mb-6">
            {HeroData.title}
          </h1>
          <p className="md:text-2xl mb-8">{HeroData.description}</p>
          <div>
            <button className="bg-gradient-to-r from-[#B08B3B] to-[#EAC980] text-md px-8 py-3 transition duration-300">
              {HeroData.buttonText}
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
