import React from "react";

const SearchProduct = ({ productImg, productName, description = "" }) => {
  return (
    <div className="col-span-3 w-full flex flex-col md:w-[184px] border border-[#DFDFDF]">
      <img
        src={productImg}
        alt="productSearch0"
        className="object-cover w-full md:w-[184px] md:h-[184px]"
      />
      <div className="w-full px-2 py-3 md:w-[168px]">
        <p
          className={`text-md font-magnificent font-thin ${
            description.length > 0 && "text-[#D1AE62]"
          }`}
        >
          {productName}
        </p>
        {description.length > 0 && (
          <p className="mt-2 font-latox">{description}</p>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
