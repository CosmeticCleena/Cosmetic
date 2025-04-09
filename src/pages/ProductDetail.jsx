import React from "react";
import ProductDetailSlider from "../components/products/ProductDetailSlider";
import ProductDetailContent from "../components/products/ProductDetailContent";
import Breadcumbs from "../components/layout/Breadcumbs";

const ProductDetail = () => {
  return (
    <div className="md:px-32 px-10 pb-16 md:pb-0 mt-28 mb-28 bg-[#FAF9F6]">
      <Breadcumbs />
      <ProductDetailSlider />
      <ProductDetailContent />
    </div>
  );
};

export default ProductDetail;
