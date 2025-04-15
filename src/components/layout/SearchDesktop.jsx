import { useState } from "react";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import DATA from "../../configs/MobileSearch.json";
import SearchProduct from "../products/SearchProduct";

import productSearch0 from "../../assets/images/productSearch0.svg";
import productSearch1 from "../../assets/images/productSearch1.svg";
import productSearch2 from "../../assets/images/productSearch2.svg";
import productSearch3 from "../../assets/images/productSearch3.svg";
import { useNavigate } from "react-router-dom";

const imgSrc = {
  productSearch0: productSearch0,
  productSearch1: productSearch1,
  productSearch2: productSearch2,
  productSearch3: productSearch3,
};
const SearchDesktop = ({ isDesktopSearchOpen, setIsDesktopSearchOpen }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const navigate = useNavigate();
  const filterData = DATA.popular_products.list.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  const isSearching = searchValue === "";
  return isDesktopSearchOpen ? (
    <>
      {/* Overlay that darkens content below */}
      <div
        onClick={() => {
          setIsDesktopSearchOpen(false);
        }}
        className="fixed hidden md:flex inset-0 top-[100px] bg-black  bg-opacity-70 z-40"
      />
      {/* Search dropdown - positioned like ProductDropdown */}
      <div className="absolute hidden overflow-auto md:flex left-0 right-0 md:max-h-[530px] bg-white z-50 shadow-lg pb-10">
        <div className="container mx-auto px-4 md:px-[60px] xl:px-[120px]">
          {/* Search bar */}
          <div
            className={`flex items-center border-b ${
              isFocus ? "border-[#D1AE62]" : "border-black "
            } pb-4 px-4`}
          >
            <img src={SearchIcon} alt="search" className="w-5 h-5 mr-3" />
            <input
              onFocus={() => {
                setIsFocus(true);
              }}
              onBlur={() => {
                setIsFocus(false);
              }}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              value={searchValue}
              type="text"
              placeholder="What Are You Looking For?"
              className="w-full outline-none text-lg font-lato"
            />
          </div>

          {/* Content grid */}
          <div className="mt-5 flex  gap-24">
            {/* Left column: Trending and Recent searches */}
            {isSearching ? (
              <div className="flex flex-col font-magnificent w-[196px]">
                <div className="flex flex-col space-y-2 font-thin">
                  <h1 className="text-xl text-[#0C0C0C]">
                    {DATA.trending_now.title}
                  </h1>
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
            ) : (
              <div className="flex flex-col font-magnificent gap-4 w-[196px]">
                <p className="font-[20px]">Suggetion</p>
                <p className="font-[16px] text-[#404040]">Cream</p>
              </div>
            )}

            {/* Right column: Popular Products */}
            <div className="w-[60%]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-magnificent">Popular Products</h3>
                <span
                  onClick={() => {
                    navigate("/products");
                  }}
                  className="text-sm text-[#D1AE62] cursor-pointer hover:underline"
                >
                  View All
                </span>
              </div>

              <div className="grid grid-cols-12 md:flex-row md:gap-6">
                {filterData.map((item, index) => (
                  <SearchProduct
                    key={index}
                    productImg={imgSrc[item.image]}
                    productName={item.name}
                    description={item.description}
                    isSearch={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default SearchDesktop;
