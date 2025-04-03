import React from "react";

const ProductHighlight = ({ isReverse = false, imgSrc, children }) => {
  return (
    <div
      className={`max-w-[1440px] w-[90%] md:w-[75%] mx-auto flex flex-col md:flex-row ${
        isReverse ? "md:flex-row-reverse" : ""
      } justify-between mt-[5%] md:gap-x-6 lg:gap-x-10 space-y-10 md:space-y-0 md:mb-[7%]`}
    >
      <div className="basis-1/2 space-y-5">{children}</div>
      <div className="basis-1/2 flex items-center">
        <img
          src={imgSrc}
          className="w-full min-h-[500px] h-auto max-h-[700px] object-cover rounded-lg backdrop-brightness-125"
          alt="Mỹ phẩm"
        />
      </div>
    </div>
  );
};

export default ProductHighlight;
