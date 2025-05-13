import React from "react";
import SidebarBackground from "../common/SidebarBackground";
import { useState } from "react";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import DATA from "../../configs/product/Products.json";
import SearchProduct from "../products/SearchProduct";
import SIGNATURE_PRODUCT from "../../configs/SignatureProducts.json";
import { ProductImgs } from "../../configs/product/images.js";

const SearchMobile = ({ isOpen }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFocus = (status) => {
    setIsFocus(status);
  };
  console.log(DATA);
  const filterData = DATA.filter((item) => item?.title).filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
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
        {isFocus && searchValue.length > 0 ? (
          <div className="flex flex-col space-y-2 font-thin">
            <h1 className="text-xl text-[#0C0C0C]">Suggestion</h1>
            <div className="mt-4 flex flex-col gap-1 text-[#404040]">
              {filterData.slice(0, 4).map((item, index) => (
                <p
                  key={index}
                  onClick={() => {
                    setSearchValue(item.name);
                  }}
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col space-y-2 font-thin">
            <h1 className="text-xl text-[#0C0C0C]">Sản phẩm nổi bật</h1>
            <div className="mt-4 flex flex-col gap-1 text-[#404040]">
              {SIGNATURE_PRODUCT.map((item) => (
                <p key={item.id}>{item.title}</p>
              ))}
            </div>
          </div>
        )}
        <div className="flex flex-col space-y-2 font-thin mt-5">
          <h1 className="text-xl text-[#0C0C0C]">Tìm kiếm gần đây</h1>
          {/* <div className="mt-4 flex flex-col gap-1 text-[#404040]">
            {DATA.recent_searches.list.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div> */}
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-5">
        <div className="flex justify-between">
          <h1 className="text-xl text-[#0C0C0C] font-magnificent">
            {searchValue.length > 0
              ? `Showing ${filterData.length} of ${DATA.length} results`
              : "Các sản phẩm phổ biến"}
          </h1>
          <a className="text-[#D1AE62] font-lato">View all</a>
        </div>
        <div className="grid grid-cols-6 gap-3 mt-3">
          {filterData.slice(0, 4).map((item) => (
            <SearchProduct
              key={item.id}
              productImg={ProductImgs[item.mainImg]}
              productName={item.title}
              isSearch={true}
            />
          ))}
        </div>
      </div>
    </SidebarBackground>
  );
};

export default SearchMobile;
