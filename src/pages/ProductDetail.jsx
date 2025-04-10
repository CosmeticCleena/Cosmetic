import React from "react";
import ProductDetailSlider from "../components/products/ProductDetailSlider";
import ProductDetailContent from "../components/products/ProductDetailContent";
import Breadcumbs from "../components/layout/Breadcumbs";
import ProductSkincareResult from "../components/products/ProductSkincareResult";
import ProductFAQ from "../components/products/ProductDetailFAQ";

const ProductDetail = () => {
  return (
    <div className="pb-16 md:pb-0 mt-28 mb-28 bg-[#FAF9F6]">
      <ProductDetailSlider />
      <ProductDetailContent />
      <ProductSkincareResult />
      <ProductFAQ />
    </div>
  );
};

export default ProductDetail;
