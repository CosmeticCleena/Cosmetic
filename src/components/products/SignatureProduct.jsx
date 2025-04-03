import React from "react";
import RightArrow from "../../assets/icons/RightArrow.svg";
import SignatureProductImg from "../../assets/images/SignatureProduct.svg";

const SignatureProduct = ({ title, description }) => {
  return (
    <div
      className="bg-[#FCF7E1] col-span-8 md:col-span-6 lg:col-span-3 rounded-lg p-4 shadow-lg hover:bg-[#E3C988] 
                  transition-all duration-300 flex flex-col col-start-3 sm:col-start-1"
    >
      <img
        src={SignatureProductImg}
        alt={title}
        className="object-contain max-h-[270px] h-auto mb-4 w-full"
      />
      <div className="flex items-center justify-between my-0 py-0 text-[#967031] font-magnificent space-x-4 text-3xl mx-auto">
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#B08B3B] to-[#EAC980] text-2xl md:text-3xl">
          {title}
        </p>
        <img
          src={RightArrow}
          alt="Right Arrow"
          className="inline-block align-middle h-fit object-contain"
        />
      </div>
      <p className="text-start text-[#0A0A0A] font-lato">{description}</p>
    </div>
  );
};

export default SignatureProduct;
