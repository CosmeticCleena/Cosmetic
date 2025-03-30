import React from "react";
import FeaturedProductCard from "./FeaturedProductCard";
import FEATURED_PRODUCTS from "../configs/FeaturedProducts.json";
const FeaturedProducts = () => {
  console.log(FEATURED_PRODUCTS.length);
  return (
    <div className="w-full bg-white py-[60px] font-magnificent md:px-[120px]">
      <h1 className="text-[40px] text-center mb-8">CÁC SẢN PHẨM NỔI BẬT</h1>
      <div className="md:flex grid grid-cols-2 gap-[30px] justify-center p-4">
        {FEATURED_PRODUCTS.map((product, index) => {
          return (
            <FeaturedProductCard
              key={index}
              isAddToCart={true}
              data={{ ...product }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default FeaturedProducts;
