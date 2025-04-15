import React from "react";
import ProductBannerImg1 from "../../assets/images/products/ProductBanner1.svg";

const ProductBanner3 = () => {
  return (
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `url(${ProductBannerImg1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[90%] text-[#FFFFFF] mx-auto pt-5">
        <h1 className="font-magnificent text-md md:text-xl font-light capitalize">
          NEW Virtual Skincare Analysis
        </h1>
        <p className="text-sm md:text-base mt-2 font-lato md:mt-6">
          Looking for a full skincare routine? Our NEW Virtual Skincare Analysis
          Tool evaluates your skin and provides the most personalized
          recommendations.
        </p>
        <ul className="text-sm md:text-base font-lato mt-3 list-disc ml-3 hidden md:block">
          <li>Available exclusively for mobile</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductBanner3;
