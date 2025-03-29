import React from "react";
import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedProducts = () => {
  return (
    <div className="w-full bg-white max-h-[738px] font-magnificent md:py-[60px] md:px-[120px]">
      <h1 className="text-[40px] text-center">CÁC SẢN PHẨM NỔI BẬT</h1>
      <div className="md:flex grid grid-cols-2 gap-[30px] justify-center p-4">
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
      </div>
    </div>
  );
};

export default FeaturedProducts;
