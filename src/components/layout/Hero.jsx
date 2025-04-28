import React from "react";
import HeroBg from "../../assets/images/Hero.svg";
import LinearImage from "../common/LinearImage";
import HeroData from "../../configs/Hero.json";

const Hero = () => {
  return (
    <LinearImage
      leftColor="from-white/50"
      imgSrc={HeroBg}
      isLinear={true}
      height="h-screen"
    >
      <div className="relative z-20 h-full w-full flex items-center">
        <div className="absolute w-[90%] md:w-[60%] lg:w-[40%] text-center md:text-start top-1/2 transform -translate-y-1/2 left-[5%] lg:left-[10%] flex flex-col">
          <div className="flex-grow overflow-hidden">
            <h1 className="font-magnificent text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light tracking-tight text-gray-900 mb-2 sm:mb-3 md:mb-4">
              {HeroData.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 line-clamp-3 md:line-clamp-none">
              {HeroData.description}
            </p>
          </div>
          <div className="mt-2">
            <button className="bg-gradient-to-r from-[#B08B3B] to-[#EAC980] text-xs sm:text-sm md:text-md px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 transition duration-300 whitespace-nowrap">
              {HeroData.buttonText}
            </button>
          </div>
        </div>
      </div>
    </LinearImage>
  );
};

export default Hero;
