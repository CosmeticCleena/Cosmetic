import React from "react";
import SidebarBackground from "../common/SidebarBackground";
import { useState } from "react";
import productSearch0 from "../../assets/images/productSearch0.svg";
import productSearch1 from "../../assets/images/productSearch1.svg";
import productSearch2 from "../../assets/images/productSearch2.svg";
import productSearch3 from "../../assets/images/productSearch3.svg";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import DATA from "../../configs/MobileSearch.json";
import SearchProduct from "../products/SearchProduct";

const imgSrc = {
  productSearch0: productSearch0,
  productSearch1: productSearch1,
  productSearch2: productSearch2,
  productSearch3: productSearch3,
};

const SearchMobile = ({ isOpen }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFocus = (status) => {
    setIsFocus(status);
  };

  const filterData = DATA.popular_products.list.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <SidebarBackground isOpen={isOpen}>
      <div className="w-[90%] mx-auto mt-8">
        <div
          className={`flex items-center space-x-3 border-b border-black border-solid pb-3 px-4 
                      transition-colors duration-300 ease-in-out
                      ${isFocus && "border-b-[#D1AE62]"}`}
        >
          <img
            src={SearchIcon}
            alt="SearchIcon"
            className="object-cover w-5 h-5"
          />
          <input
            type="text"
            placeholder="what are you looking for?"
            className="w-full bg-[#FAF9F5] font-lato focus:outline-none placeholder:text-gray-400 placeholder:font-lato"
            onChange={handleSearch}
            onFocus={() => handleFocus(true)}
            onBlur={() => handleFocus(false)}
          />
        </div>
      </div>
      <div className="flex flex-col font-magnificent w-[90%] mx-auto mt-5">
        <div className="flex flex-col space-y-2 font-thin">
          <h1 className="text-xl text-[#0C0C0C]">{DATA.trending_now.title}</h1>
          <div className="mt-4 flex flex-col gap-1 text-[#404040]">
            {DATA.trending_now.list.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-2 font-thin mt-5">
          <h1 className="text-xl text-[#0C0C0C]">
            {DATA.recent_searches.title}
          </h1>
          <div className="mt-4 flex flex-col gap-1 text-[#404040]">
            {DATA.recent_searches.list.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-5">
        <div className="flex justify-between">
          <h1 className="text-xl text-[#0C0C0C] font-magnificent">
            {searchValue.length > 0
              ? `Showing ${filterData.length} of ${DATA.popular_products.list.length} results`
              : DATA.popular_products.title}
          </h1>
          <a className="text-[#D1AE62] font-lato">View all</a>
        </div>
        <div className="grid grid-cols-6 gap-3 mt-3">
          {filterData.map((item, index) => (
            <SearchProduct
              key={index}
              productImg={imgSrc[item.image]}
              productName={item.name}
            />
          ))}
        </div>
      </div>
    </SidebarBackground>
  );
};

export default SearchMobile;
