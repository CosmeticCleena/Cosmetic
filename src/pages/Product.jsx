import React from "react";
import Breadcumbs from "../components/layout/Breadcumbs";
import ProductFilter from "../components/layout/ProductFilter";
import SearchProduct from "../components/products/SearchProduct";
import PRODUCTS from "../configs/product/Products.json";
import SELECT_BOX_DATA from "../configs/product/Sort.json";
import FilterIcon from "../assets/icons/Filter.svg";
import { BannerImgs, ProductImgs } from "../configs/product/images";
import { useState } from "react";
import SelectBox from "../components/common/SelectBox";
import FilterMobile from "../components/layout/FilterMobile";

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
      <div className="bg-[#FAF9F5] w-full pt-8">
        <div className="w-[90%] mx-auto">
          <Breadcumbs />
          <h1 className="text-3xl font-magnificent pl-5 py-5 font-thin">
            Women Skincare{" "}
            <span className="text-md">
              ({PRODUCTS.filter((item) => !item.isBanner).length})
            </span>
          </h1>
          <div className="hidden md:flex justify-between">
            <p className="text-2xl font-magnificent">Filter</p>
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
                <p className="font-lato text-[#0C0C0C]">Filter</p>
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
                {PRODUCTS.map((item, index) => {
                  if (item.isBanner) {
                    return (
                      <div
                        className={`${item.width} justify-center`}
                        key={index}
                      >
                        <img
                          src={BannerImgs[item.bannerImg]}
                          alt="banner"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    );
                  } else {
                    return (
                      <SearchProduct
                        key={item.id}
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
