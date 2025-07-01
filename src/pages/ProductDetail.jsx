import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductDetailSlider from "../components/products/ProductDetailSlider";
import ProductDetailContent from "../components/products/ProductDetailContent";
import ProductDetailReviews from "../components/products/ProductDetailReviews";
import ProductDetailBanner from "../components/products/ProductDetailBanner";
import DATA_PRODUCT from "../configs/product/Products.json";
import { BannerObj } from "../configs/product_details/banner";
import NotFoundPage from "../components/common/NotFoundPage";
import productController from "../utils/ProductController";
console.log(productController.getSignatureProducts());
const ProductDetail = () => {
  const { id } = useParams();
  const productDetailsData = DATA_PRODUCT.find((prod) => prod.id == id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return productDetailsData?.title ? (
    <div className="pb-16 md:pb-0 pt-8 bg-[#FAF9F6]">
      <ProductDetailSlider productData={productDetailsData} />
      <ProductDetailContent
        tabContentData={productDetailsData.tabContentData}
      />
      {/* Các sản phẩm khuyến nghị */}
      <ProductDetailBanner banner={BannerObj.RecommendedSkincareBanner} />
      <ProductDetailReviews commentArray={productDetailsData.comments} />
    </div>
  ) : (
    <NotFoundPage />
  );
};

export default ProductDetail;
