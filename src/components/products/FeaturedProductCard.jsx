import React from "react";
import FeatureProduct from "../../assets/images/FeatureProduct.svg";
import { useNavigate } from "react-router-dom";
import SignatureProduct from "../../assets/images/SignatureProduct.svg";

const FeaturedProductCard = ({ isAddToCart, data }) => {
  const productName = data?.product_name;
  const description = data?.description;
  const id = data?.id;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/products/${id}`);
      }}
      className={`w-full cursor-pointer h-[518px] bg-[#E6E6E6] hover:bg-[#FCF7E1] rounded-[20px] p-4 shadow-2xl flex flex-col`}
    >
      <div className="relative">
        <div className="bg-[#967031] absolute top-2 left-2 rounded-3xl text-white text-[10px] w-[20px] h-[12px] flex items-center justify-center p-5">
          NEW
        </div>
        <img
          className="rounded-t-[16px] w-full h-[240px] object-contain"
          src={SignatureProduct}
          alt="FeatureProduct"
        />
      </div>

      {/* Content section with fixed height */}
      <div className="mt-4 flex-grow flex flex-col">
        <div className="text-[#1A1A1A] flex flex-col gap-2">
          {/* product name with fixed height */}
          <p className="font-medium h-[48px] overflow-hidden">{productName}</p>
          {/* description with fixed height and truncation */}
          <div className="h-[72px] overflow-hidden mb-2">
            <span className="text-sm line-clamp-3 overflow-hidden text-ellipsis">
              {description}
            </span>
          </div>
          <div className="flex gap-[10px] mt-1">
            <div className="w-[17px] h-[18px] bg-[#6A6E4E] rounded-3xl"></div>
            <div className="w-[17px] h-[18px] bg-[#D9D9D9] rounded-3xl"></div>
          </div>
        </div>
      </div>

      {/* Button at the bottom */}
      <div className="mt-auto">
        <button
          className={`${
            isAddToCart ? "bg-[#C09C50] hover:bg-[#a88235]" : "hidden"
          } text-white h-10 w-full rounded-[8px] transition-colors text-sm`}
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
