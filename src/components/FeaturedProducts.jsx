import React from "react";
import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedProducts = () => {
  return (
    <div className="w-full bg-white py-[60px] font-magnificent md:px-[120px]">
      <h1 className="text-[40px] text-center mb-8">CÁC SẢN PHẨM NỔI BẬT</h1>
      <div className="md:flex grid grid-cols-2 gap-[30px] justify-center p-4">
        <FeaturedProductCard isAddToCart={true} />
        <FeaturedProductCard isAddToCart={true} />
        <FeaturedProductCard isAddToCart={true} />
      </div>
    </div>
  );
};
export default FeaturedProducts;
