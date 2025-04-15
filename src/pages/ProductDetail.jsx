import { useParams } from "react-router-dom";

import ProductDetailSlider from "../components/products/ProductDetailSlider";
import ProductDetailContent from "../components/products/ProductDetailContent";
import ProductSkincareResult from "../components/products/ProductSkincareResult";
import ProductFAQ from "../components/products/ProductDetailFAQ";
import Video from "../assets/images/Video.svg";
import ProductDetailReviews from "../components/products/ProductDetailReviews";
import ProductDetailBanner from "../components/products/ProductDetailBanner";

// main data
import DATA_PRODUCT from "../configs/product/Products.json";
import { BannerObj } from "../configs/product_details/banner";
import NotFoundPage from "../components/common/NotFoundPage";

const ProductDetail = () => {
  const { id } = useParams();
  const productDetailsData = DATA_PRODUCT.find((prod) => prod.id == id);

  return productDetailsData.title ? (
    <div className="pb-16 md:pb-0 pt-8  bg-[#FAF9F6]">
      <ProductDetailSlider productData={productDetailsData} />
      <ProductDetailContent
        tabContentData={productDetailsData.tabContentData}
      />

      <ProductSkincareResult />

      <ProductFAQ faqItems={productDetailsData.faqItems} />

      <ProductDetailBanner banner={BannerObj.RecommendedSkincareBanner} />
      {/* Video */}
      <div className="mx-auto  max-w-[1223px] max-h-[688px]">
        <iframe
          className="w-full md:h-[688px]"
          src="https://www.youtube.com/embed/YjDKzPo51V0?si=Ro8G64bco7dTVlZe"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <ProductDetailReviews commentArray={productDetailsData.comments} />

      <ProductDetailBanner banner={BannerObj.YouMayAlsoLike} />
    </div>
  ) : (
    <NotFoundPage />
  );
};

export default ProductDetail;
