import { useState } from "react";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import DATA from "../../configs/product/Products.json";
import SIGNATURE_PRODUCT from "../../configs/SignatureProducts.json";
import SearchProduct from "../products/SearchProduct";
import { ProductImgs } from "../../configs/product/images.js";
import { useNavigate } from "react-router-dom";

const SearchDesktop = ({ isDesktopSearchOpen, setIsDesktopSearchOpen }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const navigate = useNavigate();
  
  const filterData = DATA.filter((item) => item?.title).filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
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
      <div className="absolute hidden  md:flex left-0 right-0 md:max-h-[570px] bg-white z-50 shadow-lg pb-10">
        <div className="container mx-auto px-4 md:px-[60px] xl:px-[120px]">
          {/* Search bar */}
          <div
            className={`flex items-center border-b ${
              isFocus ? "border-[#D1AE62]" : "border-black "
            } pb-4 px-4`}
          >
            <img
              src={SearchIcon}
              alt="search"
              className="w-5 h-5 mr-3"
              loading="lazy"
            />
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
              placeholder="Bạn đang tìm kiếm gì?"
              className="w-full outline-none text-lg font-lato"
            />
          </div>

          {/* Content grid */}
          <div className="mt-5 flex  gap-24">
            {/* Left column: Trending and Recent searches */}
            {isSearching ? (
              <div className="flex flex-col font-magnificent w-[196px]">
                <div className="flex flex-col space-y-2 font-thin">
                  <h1 className="text-xl text-[#0C0C0C]">Sản phẩm nổi bật</h1>
                  <div className="mt-4 flex flex-col gap-1 text-[#404040]">
                    {SIGNATURE_PRODUCT.map((item) => (
                      <p key={item.id}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col space-y-2 font-thin mt-5">
                  <h1 className="text-xl text-[#0C0C0C]">Tìm kiếm gần đây</h1>
                  {/* <div className="mt-4 flex flex-col gap-1 text-[#404040]">
                    {DATA.recent_searches.list.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div> */}
                </div>
              </div>
            ) : (
              <div className="flex flex-col font-magnificent gap-4 w-[196px]">
                <div className="flex flex-col space-y-2 font-thin">
                  <h1 className="text-xl text-[#0C0C0C]">Gợi ý</h1>
                  <div className="mt-4 flex flex-col gap-1 text-[#404040]">
                    {filterData.slice(0, 4).map((item, index) => (
                      <p
                        key={index}
                        onClick={() => {
                          setSearchValue(item.name);
                        }}
                        className="cursor-pointer hover:text-[#D1AE62]"
                      >
                        {item.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Right column: Popular Products */}
            <div className="w-[60%]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-magnificent">
                  {searchValue.length > 0
                    ? `Kết quả tìm thấy: ${filterData.length} trên ${DATA.length}`
                    : "Các sản phẩm phổ biến"}
                </h3>
                <span
                  onClick={() => {
                    navigate("/products");
                  }}
                  className="text-sm text-[#D1AE62] cursor-pointer hover:underline"
                >
                  View all
                </span>
              </div>

              <div className="grid grid-cols-4 gap-6">
                {filterData.slice(0, 4).map((item) => (
                  <SearchProduct
                    id={item.id}
                    key={item.id}
                    productImg={ProductImgs[item.mainImg]}
                    productName={item.title}
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