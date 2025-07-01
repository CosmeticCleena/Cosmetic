import React from "react";
import FeaturedProductCard from "./FeaturedProductCard";
import productController from "../../utils/ProductController";

const FeaturedProducts = () => {
  const FEATURED_PRODUCTS = productController.getFeatureProducts();
  return (
    <div className="w-full md:w-[75%] md:mx-auto bg-white py-[60px] font-magnificent">
      <h1 className="text-[40px] text-center mb-8">
        CÁC SẢN PHẨM <div>NỔI BẬT</div>
      </h1>
      <div className="flex flex-col items-center md:flex-row md:justify-between   gap-[30px] p-4 md:p-0">
        {FEATURED_PRODUCTS.map((product, index) => {
          return (
            <FeaturedProductCard
              key={index}
              isAddToCart={true}
              data={{ ...product }}
              image={product.mainImg}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
