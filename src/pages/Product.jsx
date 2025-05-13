import React from "react";
import Breadcumbs from "../components/layout/Breadcumbs";
import ProductFilter from "../components/layout/ProductFilter";
import SearchProduct from "../components/products/SearchProduct";
import PRODUCTS from "../configs/product/Products.json";
import SELECT_BOX_DATA from "../configs/product/Sort.json";
import FilterIcon from "../assets/icons/Filter.svg";
import { ProductImgs } from "../configs/product/images";
import { useState } from "react";
import SelectBox from "../components/common/SelectBox";
import FilterMobile from "../components/layout/FilterMobile";
import ProductBanner1 from "../components/products/ProductBanner1";
import ProductBanner2 from "../components/products/ProductBanner2";
import ProductBanner3 from "../components/products/ProductBanner3";

const bannerMap = {
  ProductBanner1: <ProductBanner1 />,
  ProductBanner2: <ProductBanner2 />,
  ProductBanner3: <ProductBanner3 />,
};

const Product = () => {
  const [filters, setFilters] = useState({
    category: [],
    skinCondition: [],
    featured: [],
    price: [],
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const handleFilterToggle = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const handleUpdateFilters = (filterType, filterValue, type) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (type === "add") {
        if (!updatedFilters[filterType].includes(filterValue)) {
          updatedFilters[filterType].push(filterValue);
        }
      } else if (type === "remove") {
        updatedFilters[filterType] = updatedFilters[filterType].filter(
          (value) => value !== filterValue
        );
      }
      return updatedFilters;
    });
  };

  return (
    <>
      <FilterMobile
        isOpen={isFilterOpen}
        handleFilterToggle={handleFilterToggle}
      />
      <div className="bg-[#FAF9F5] w-full pt-12">
        <div className="w-[90%] mx-auto">
          <Breadcumbs />
          <h1 className="text-3xl font-magnificent pl-5 py-5 font-thin">
            Chăm sóc da nữ{" "}
            <span className="text-md">
              ({PRODUCTS.filter((item) => !item.isBanner).length})
            </span>
          </h1>
          <div className="hidden md:flex justify-between">
            <p className="text-2xl font-magnificent">Bộ lọc</p>
            <SelectBox
              title={SELECT_BOX_DATA.title}
              data={SELECT_BOX_DATA.data}
            />
          </div>
          <div className="md:hidden grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <div
                className="border border-gray-300 h-full bg-white flex items-center justify-center space-x-3"
                onClick={handleFilterToggle}
              >
                <img
                  src={FilterIcon}
                  alt="filter icon"
                  className="object-contain w-4 h-4"
                />
                <p className="font-lato text-[#0C0C0C]">Bộ lọc</p>
              </div>
            </div>
            <div className="col-span-6">
              <SelectBox
                title={SELECT_BOX_DATA.title}
                data={SELECT_BOX_DATA.data}
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 py-5">
            <ProductFilter
              handleUpdateFilters={handleUpdateFilters}
              filters={filters}
            />
            <div className="col-span-12 md:col-span-9">
              <div className="grid grid-cols-6 md:grid-cols-9 gap-2 md:gap-8">
                {PRODUCTS.map((item) => {
                  if (item.isBanner) {
                    return (
                      <div className={`${item.width}`} key={item.id}>
                        {bannerMap[item.banner]}
                      </div>
                    );
                  } else {
                    return (
                      <SearchProduct
                        key={item.id}
                        id={item.id}
                        productName={item.title}
                        description={item.description}
                        price={item.price.toString()}
                        productImg={ProductImgs[item.mainImg]}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
