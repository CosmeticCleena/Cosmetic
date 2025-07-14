import React from "react";

const Banner = ({ children, imgSrc, mt = "" }) => {
  return (
    <div
      className={`w-full relative md:w-[75%] md:mx-auto ${mt} md:mt-20 md:rounded-3xl overflow-hidden`}
    >
      <div className="w-full relative">
        <img 
          src={imgSrc} 
          alt="Banner" 
          className="w-full h-auto object-cover block" 
          loading="lazy" 
        />
        
        {/* Chỉ hiển thị children nếu có nội dung */}
        {children && (
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-8">
            <div className="w-full max-w-4xl mx-auto flex flex-col gap-5 text-center">
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;