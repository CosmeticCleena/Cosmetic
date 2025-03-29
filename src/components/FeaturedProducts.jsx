import React from "react";
import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedProducts = () => {
  return (
    <div className="w-full bg-white max-h-[738px] font-magnificent md:py-[60px] md:px-[120px]">
      <h1 className="text-[40px] text-center">CÁC SẢN PHẨM NỔI BẬT</h1>
      <div className="md:flex grid grid-cols-2 gap-[20px] justify-center">
        <FeaturedProductCard color={"#FCF7E1"} />
        <FeaturedProductCard color={"#E6E6E6"} />
        <FeaturedProductCard color={"#E6E6E6"} />
      </div>
    </div>
  );
};

export default FeaturedProducts;
