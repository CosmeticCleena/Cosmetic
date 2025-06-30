import React from "react";
import { useNavigate } from "react-router-dom";

const SearchProduct = ({
  id,
  productImg,
  productName,
  description = "",
  price = "",
  isSearch = false,
}) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };
  
  return (
    <div
      className="w-full flex flex-col border border-[#DFDFDF] transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2 cursor-pointer bg-white h-full"
      onClick={() => handleClick(id)}
    >
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={productImg}
          alt={productName}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 px-4 py-4 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <p
            className={`text-sm ${
              isSearch ? "lg:text-base" : "lg:text-lg"
            } text-[#D1AE62] font-magnificent line-clamp-2`}
          >
            {productName}
          </p>
          {description && (
            <p
              className={`text-xs ${
                isSearch ? "md:text-sm" : "md:text-base"
              } font-latox text-black leading-tight line-clamp-3`}
            >
              {description}
            </p>
          )}
        </div>
        {/* {price && (
          <div className="mt-2 pt-2 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-800">
              {price}
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default SearchProduct;