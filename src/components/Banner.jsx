import React from "react";

const Banner = ({ children, imgSrc, mt = "" }) => {
  return (
    <div
      className={`w-full relative py-20 md:w-[75%] md:mx-auto ${mt} md:mt-20 md:rounded-3xl overflow-hidden`}
    >
      <div className="w-full absolute inset-0 z-0">
        <img src={imgSrc} alt="Banner" className="w-full h-full object-cover" />
      </div>
      <div className={`absolute inset-0 z-10 bg-black opacity-60`}></div>
      <div className="relative w-[90%] mx-auto flex flex-col gap-5 z-20">
        {children}
      </div>
    </div>
  );
};

export default Banner;
