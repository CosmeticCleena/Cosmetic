import React from "react";
import ProductBannerImg3 from "../../assets/images/products/ProductBanner3.svg";

const ProductBanner1 = () => {
  return (
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `url(${ProductBannerImg3})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[90%] text-[#FFFFFF] mx-auto pt-5">
        <h1 className="font-magnificent text-xl font-light capitalize mb-6">
          1-2-1 expert advice
        </h1>
        <p className="text-sm md:text-base font-lato mt-3 md:mt-6">
          Take some time to feel uplifted with a complimentary, bespoke beauty
          service. our team of experts are here to help in person.
        </p>
      </div>
    </div>
  );
};

export default ProductBanner1;
