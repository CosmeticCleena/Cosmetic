import React from "react";
import SkinCare1 from "../../assets/images/SkinCare1.svg";
import SkinCare2 from "../../assets/images/SkinCare2.svg";
import SkinCare3 from "../../assets/images/SkinCare3.svg";
import SkinCare4 from "../../assets/images/SkinCare4.svg";

const images = [SkinCare1, SkinCare2, SkinCare3, SkinCare4];

const ProductSkincareResult = () => {
  return (
    <div className="md:flex  flex-col bg-[#7F4F29] w-full max-h-[488px] px-[108px] py-10">
      <div className="flex  max-w-[1224px]   gap-6 mb-5 mx-auto ">
        {/* Four images in a row */}
        {images.map((image, index) => {
          return (
            <div key={index} className="w-1/4 px-1">
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>

      <div className="text-center space-y-3 font-lato">
        <p className="text-white text-[20px]">
          <span className="font-magnificent text-[18px]">
            In just 1 week: {""}
          </span>
          It Appears Firmer, Stronger And Smoother.
        </p>

        <p className="text-white text-[20px]">
          <span className="font-magnificent text-[18px]">In 3 weeks: {""}</span>
          2x Improvement In The Look Of Feel Of Skin Elasticity
        </p>

        <p className="text-white text-[20px]">
          <span className="font-magnificent text-[18px]">
            After 1 month: {""}
          </span>
          The skin looks firmer+60% | The skin looks denser +56%
        </p>
      </div>
    </div>
  );
};

export default ProductSkincareResult;
