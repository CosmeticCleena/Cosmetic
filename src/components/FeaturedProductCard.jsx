import React from "react";
import FeatureProduct from "../assets/images/FeatureProduct.svg";

const FeaturedProductCard = () => {
  return (
    <div
      className={`max-w-[380px] max-h-[518px] bg-[#E6E6E6] hover:bg-[#FCF7E1] rounded-[20px] p-4`}
    >
      <div className="relative">
        <div className="bg-[#967031] absolute top-2 left-2 rounded-3xl text-white text-[10px] w-[20px] h-[12px] flex items-center justify-center p-5">
          NEW
        </div>
        <img
          className="rounded-t-[16px] w-full"
          src={FeatureProduct}
          alt="FeatureProduct"
        />
      </div>

      {/* Fixed spacing between image and content */}
      <div className="mt-4 mb-3 min-h-[120px] flex justify-between">
        <div className="text-[#1A1A1A] flex flex-col gap-2 max-w-[203px]">
          <p className="font-medium">Brightening and Regenerating Cream</p>
          <span className="text-sm">Lorm, Typing, Institute</span>
          <div className="flex gap-[10px] mt-1">
            <div className="w-[17px] h-[18px] bg-[#6A6E4E] rounded-3xl"></div>
            <div className="w-[17px] h-[18px] bg-[#D9D9D9] rounded-3xl"></div>
          </div>
        </div>
        <div className="text-[#79541F] font-medium self-center">
          <span>$00.00</span>
        </div>
      </div>

      <button className="bg-[#D1AE62] text-white h-10 w-full rounded-[8px] transition-colors hover:bg-[#C09C50]">
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};

export default FeaturedProductCard;
