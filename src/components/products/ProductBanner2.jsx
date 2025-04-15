import React from "react";
import ProductBannerImg2 from "../../assets/images/products/ProductBanner2.svg";

const ProductBanner2 = () => {
  return (
    <div
      className="hidden w-full h-full md:block"
      style={{
        backgroundImage: `url(${ProductBannerImg2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[70%] text-[#FFFFFF] pt-5 pl-5">
        <h1 className="font-magnificent text-xl font-light capitalize mb-6">
          # AWARDED
        </h1>
        <p className="text-base font-lato mt-4">
          Capture Totale Super Potent Rich Cream
        </p>
        <ul className="mt-3 list-disc ml-3">
          <li>
            Global age-defying rich cream - intense nourishment & revitalisation
          </li>
          <li>Formulated with 88% natural-origin ingredients</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductBanner2;
