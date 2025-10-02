import React, { memo, useCallback } from "react";
import HeroBg from "../../assets/images/Hero.webp";
import LinearImage from "../common/LinearImage";
import HeroData from "../../configs/Hero.json";

const Hero = () => {
  const handleButtonClick = useCallback(() => {
    // Add your button click handler here if needed
    console.log("Hero button clicked");
  }, []);
  return (
    <LinearImage
      leftColor="from-white/50"
      imgSrc={HeroBg}
      isLinear={true}
      height="h-screen"
    >
      <div className="relative z-20 h-full w-full flex items-center">
        <div className="absolute w-[90%] md:w-[60%] lg:w-[40%] text-center md:text-start top-1/2 transform -translate-y-1/2 left-[5%] lg:left-[10%] flex flex-col">
          {/* Text container with white background and border radius */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-lg">
            <div className="flex-grow overflow-hidden">
              <h1 className="font-svn-avo text-xl sm:text-2xl lg:text-3xl xl:text-4xl tracking-tight text-gray-900 mb-2 sm:mb-3 md:mb-4">
                {HeroData.title}
              </h1>
              <p className="font-svn-avo text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 line-clamp-3 md:line-clamp-none text-gray-700">
                {HeroData.description}
              </p>
            </div>
            <div className="mt-2">
              <button 
                onClick={handleButtonClick}
                className="font-svn-avo bg-gradient-to-r from-[#B08B3B] to-[#EAC980] text-white text-xs sm:text-sm md:text-md px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 transition duration-300 whitespace-nowrap rounded-lg hover:shadow-md transform hover:scale-105"
              >
                {HeroData.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </LinearImage>
  );
};

export default memo(Hero);