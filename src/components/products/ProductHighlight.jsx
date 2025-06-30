import React from "react";

const ProductHighlight = ({ isReverse = false, imgSrc, children }) => {
  return (
    <div
      className={`max-w-[1440px] w-[90%] md:w-[75%] mx-auto flex flex-col md:flex-row ${
        isReverse ? "md:flex-row-reverse" : ""
      } justify-between items-center mt-[5%] md:gap-x-6 lg:gap-x-10 space-y-10 md:space-y-0 md:mb-[7%]`}
    >
      <div className="basis-1/2 space-y-5 flex flex-col justify-center">{children}</div>
      <div className="basis-1/2 flex items-center justify-center">
        <img
          src={imgSrc}
          className="w-[85%] min-h-[400px] h-auto max-h-[600px] object-cover rounded-lg backdrop-brightness-125"
          alt="Mỹ phẩm"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ProductHighlight;