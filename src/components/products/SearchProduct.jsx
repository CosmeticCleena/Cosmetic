import React from "react";

const SearchProduct = ({
  productImg,
  productName,
  description = "",
  price = "",
}) => {
  return (
    <div className="col-span-3 w-full flex flex-col border border-[#DFDFDF]">
      <img
        src={productImg}
        alt="productSearch0"
        className="object-cover w-full"
      />
      <div className="w-full h-full px-2 py-3 bg-white">
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
        {price.length > 0 && (
          <p className="mt-2 text-xl font-latox text-[#0C0C0C] font-light">
            ${price}
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
