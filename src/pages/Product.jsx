import React from "react";
import Breadcumbs from "../components/layout/Breadcumbs";
import ProductFilter from "../components/layout/ProductFilter";
import SearchProduct from "../components/products/SearchProduct";
import PRODUCTS from "../configs/product/Products.json";
import { BannerImgs, ProductImgs } from "../configs/product/images";
import { useState } from "react";

const Product = () => {
  const [filters, setFilters] = useState({
    category: [],
    skinCondition: [],
    featured: [],
    price: [],
  });

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
    <div className="bg-[#FAF9F5] w-full pt-8">
      <div className="w-[90%] mx-auto">
        <Breadcumbs />
        <h1 className="text-3xl font-magnificent pl-5 py-5 font-thin">
          Women Skincare <span className="text-md">(17)</span>
        </h1>
        <div className="flex justify-between">
          <p className="text-2xl font-magnificent">Filter</p>
          <div className="flex items-center border border-gray-300 shadow-sm pl-5 py-2 bg-white">
            <span className="mr-2 text-gray-700">Sort:</span>
            <select className="appearance-none bg-transparent border-none font-semibold text-gray-800 focus:outline-none cursor-pointer">
              <option selected>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
              <option>Rating</option>
            </select>
            <div className="ml-1 pointer-events-none">
              <svg
                className="w-4 h-4 fill-current text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 py-5">
          <ProductFilter
            handleUpdateFilters={handleUpdateFilters}
            filters={filters}
          />
          <div className="col-start-4 col-span-8">
            <div className="grid grid-cols-9 gap-8">
              {PRODUCTS.map((item, index) => {
                if (item.isBanner) {
                  return (
                    <div className={`${item.width} justify-center`} key={index}>
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
  );
};

export default Product;
