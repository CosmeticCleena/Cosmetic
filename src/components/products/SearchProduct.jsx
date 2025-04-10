import React from "react";

const SearchProduct = ({
  productImg,
  productName,
  description = "",
  price = "",
}) => {
  return (
    <div className="col-span-3 w-full flex flex-col border border-[#DFDFDF] transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2">
      <img
        src={productImg}
        alt="productSearch0"
        className="object-cover w-full"
      />
      <div className="w-full px-4 py-4 h-full bg-white flex flex-col justify-evenly gap-2">
        <p className="text-md md:text-lg text-[#D1AE62] font-magnificent">
          {productName}
        </p>
        {description && (
          <p className="text-md font-latox text-black leading-tight">
            {description}
          </p>
        )}
        {price && (
          <p className="text-md md:text-xl font-latox text-[#0C0C0C] pt-2">
            ${price}
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
