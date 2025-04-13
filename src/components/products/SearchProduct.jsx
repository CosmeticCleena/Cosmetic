import React from "react";
import { useNavigate } from "react-router-dom";

const SearchProduct = ({
  id,
  productImg,
  productName,
  description = "",
  price = "",
}) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/products/${id}`);
    console.log("Product ID:", id);
  };
  return (
    <div
      className="col-span-3 w-full flex flex-col border border-[#DFDFDF] transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2"
      onClick={() => handleClick(id)}
    >
      <img
        src={productImg}
        alt="productSearch0"
        className="object-cover w-full"
      />
      <div className="w-full px-4 py-4 h-full bg-white flex flex-col justify-evenly gap-2">
        <p className="text-md md:text-lg min-h-16 text-[#D1AE62] font-magnificent">
          {productName}
        </p>
        {description && (
          <p className="text-md min-h-20 md:min-h-0 font-latox text-black leading-tight">
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
