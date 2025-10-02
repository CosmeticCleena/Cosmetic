import { useParams } from "react-router-dom";
import { useEffect, useMemo, memo } from "react";
import ProductDetailSlider from "../components/products/ProductDetailSlider";
import ProductDetailContent from "../components/products/ProductDetailContent";
import ProductDetailReviews from "../components/products/ProductDetailReviews";
import ProductDetailBanner from "../components/products/ProductDetailBanner";
import NotFoundPage from "../components/common/NotFoundPage";
import productController from "../utils/ProductController";

const ProductDetail = () => {
  const { id } = useParams();

  // Memoize product details data
  const productDetailsData = useMemo(() => 
    productController.findProductById(id), [id]
  );

  // Memoize banner data
  const productDetailsBannerData = useMemo(() => ({
    title: "Các Sản Phẩm Khuyến Nghị",
    products: productController.getSignatureProducts(),
  }), []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return productDetailsData?.title ? (
    <div className="pb-16 md:pb-0 pt-8 bg-[#FAF9F6]">
      <ProductDetailSlider productData={productDetailsData} />
      <ProductDetailContent
        tabContentData={productDetailsData.tabContentData}
      />
      <ProductDetailBanner banner={productDetailsBannerData} />
      <ProductDetailReviews commentArray={productDetailsData.comments} />
    </div>
  ) : (
    <NotFoundPage />
  );
};

ProductDetail.displayName = 'ProductDetail';

export default memo(ProductDetail);
