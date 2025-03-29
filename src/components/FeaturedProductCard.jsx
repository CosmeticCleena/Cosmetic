import React from "react";
import FeatureProduct from "../assets/images/FeatureProduct.svg";

const FeaturedProductCard = ({ color }) => {
  return (
    <div
      className={`max-w-[380px] max-h-[518px] bg-[${color}] rounded-[20px] p-4 shadow-2xl`}
    >
      <div className="">
        <div className="bg-[#967031] absolute rounded-3xl text-white text-[10px] w-[20px] h-[12px] flex items-center justify-center p-3 md:p-5">
          NEW
        </div>
        <img
          className="rounded-t-[16px] w-full h-auto object-cover"
          src={FeatureProduct}
          alt="FeatureProduct"
        />
      </div>
      <div className="max-h-[119px] max-w-[348px] flex items-center justify-between pt-5">
        <div className="text-[#1A1A1A] flex flex-col gap-3 max-w-[203px]">
          <p className="font-magnificent">Brightening and Regenerating Cream</p>
          <span className="font-lato">Lorm, Typing, Institute</span>
          <div className="flex gap-[10px]">
            <div className="w-[17px] h-[18px] bg-[#6A6E4E] rounded-3xl"></div>
            <div className="w-[17px] h-[18px] bg-[#D9D9D9] rounded-3xl"></div>
          </div>
        </div>
        <div className="text-[#79541F]">
          <span className="font-magnificent text-[18px]">$00.00</span>
        </div>
      </div>
      <button className="bg-[#D1AE62]  text-white py-[10px] px-6 w-full rounded-[8px] mt-12  md:mt-5 shadow-md">
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};

export default FeaturedProductCard;
