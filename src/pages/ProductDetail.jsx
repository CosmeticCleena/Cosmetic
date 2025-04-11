import React from "react";
import ProductDetailSlider from "../components/products/ProductDetailSlider";
import ProductDetailContent from "../components/products/ProductDetailContent";
import ProductSkincareResult from "../components/products/ProductSkincareResult";
import ProductFAQ from "../components/products/ProductDetailFAQ";
import Video from "../assets/images/Video.svg";
import img1 from "../assets/images/products/product1.svg";
import img2 from "../assets/images/products/product2.svg";
import img3 from "../assets/images/products/product3.svg";
import img4 from "../assets/images/products/product4.svg";
import SearchProduct from "../components/products/SearchProduct";
import ProductDetailReviews from "../components/products/ProductDetailReviews";

const imgSrc = {
  recommendedProduct1: img1,
  recommendedProduct2: img2,
  recommendedProduct3: img3,
  recommendedProduct4: img4,
};
const ProductDetail = () => {
  return (
    <div className="pb-16 md:pb-0 mt-28 mb-28 bg-[#FAF9F6]">
      <ProductDetailSlider />
      <ProductDetailContent />
      <ProductSkincareResult />
      <ProductFAQ />
      {/* Recommended Skincare */}
      <div className="mx-auto flex flex-col gap-8 max-w-[1224px] mt-10 mb-10 text-[24px]">
        <h1 className="text-center font-magnificent">
          Recommended Skincare Routine
        </h1>
        <div className="flex gap-6">
          {Object.values(imgSrc).map((prod, index) => {
            return (
              <SearchProduct
                key={index}
                productImg={prod}
                productName={"Beautya Capture Total Dreamskin Care & Perfect"}
                description="Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration"
                price="76"
              />
            );
          })}
        </div>
      </div>
      <img className="mx-auto" src={Video} alt="" />
      <ProductDetailReviews />
      {/* Recommended Skincare */}
      <div className="mx-auto flex flex-col gap-8 max-w-[1224px] mt-10 mb-10 text-[24px]">
        <h1 className="text-center font-magnificent">You May Also Like</h1>
        <div className="flex gap-6">
          {Object.values(imgSrc).map((prod, index) => {
            return (
              <SearchProduct
                key={index}
                productImg={prod}
                productName={"Beautya Capture Total Dreamskin Care & Perfect"}
                description="Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration"
                price={"76"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
