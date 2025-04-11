import React, { useState } from "react";
import Star from "../../assets/images/products_detail/products_detail_reviews/Star.svg";
import Line from "../../assets/images/products_detail/products_detail_reviews/Line.svg";
import ButtonArrowRight from "../../assets/images/products_detail/products_detail_reviews/ButtonArrowRight.svg";
import SortByArrow from "../../assets/images/products_detail/products_detail_reviews/SortByArrow.svg";

import ProductReviewProgressBar from "./ProductReviewProgressBar";
import Comment from "../common/Comment";
const stars = [Star, Star, Star, Star, Star];

const ProductDetailReviews = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="mx-auto max-w-[1180px] mt-10">
      <div>
        {/* First Line of Stars */}
        <div className="flex  gap-[10px]  items-center">
          <p className="text-[28px]">Reviews</p>
          <img src={Line} alt="" />
          <div className="flex">
            {stars.map((s, index) => {
              return <img className="" key={index} src={s} alt="star" />;
            })}
          </div>
          <p className="text-[24px] text-[#D1AE62] font-manrope">4,8</p>
          <p className="text-[#4D4D4D] font-manrope">(136)</p>
        </div>
        {/* Rating Snapshot and  Review this product */}
        <div className="px-10 mt-2 flex justify-between">
          {/* Rating Snapshot  */}
          <div className="w-2/3">
            <h1 className="text-[20px]">Rating snapshot</h1>
            <ProductReviewProgressBar
              totalReviews={136}
              currentReviews={100}
              stars={5}
            />
            <ProductReviewProgressBar
              totalReviews={136}
              currentReviews={20}
              stars={4}
            />
            <ProductReviewProgressBar
              totalReviews={136}
              currentReviews={20}
              stars={3}
            />
            <ProductReviewProgressBar
              totalReviews={136}
              currentReviews={1}
              stars={2}
            />
            <ProductReviewProgressBar
              totalReviews={136}
              currentReviews={0}
              stars={1}
            />
          </div>
          {/* Review this Product */}
          <div className="space-y-3">
            <h1 className="text-[20px]">Review this Product</h1>
            <div className="flex">
              {stars.map((image, index) => {
                return (
                  <img
                    className="w-[60px]"
                    key={index}
                    src={image}
                    alt="star"
                  />
                );
              })}
            </div>
            <button className="px-4 py-2 border border-[#F1DDA4] text-[#967031] flex items-center gap-2">
              Write your comment
              <img src={ButtonArrowRight} alt="" />
            </button>
          </div>
        </div>
      </div>
      {/* Comment Section */}
      <div className="">
        <div className="mt-10 flex justify-between font-lato border-b border-[#F1DDA4]">
          <p>1 -- 8 of 136 reviews</p>
          <div className="flex items-center gap-2">
            <p className="text-[14px]">Sort by:</p>
            <p className="text-[16px]">Name (A-Z) </p>
            <img src={SortByArrow} alt="SortByArrow" />
          </div>
        </div>
        <div className="mt-10">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
        <div className="flex gap-3 justify-center items-center mt-10">
          <p>Page</p>
          <input
            onChange={(e) => {
              setPage(e.target.value);
            }}
            value={page}
            className="w-[80px] rounded-md px-4 py-2 border border-[#808080]"
            type="number"
          />
          of 100
        </div>
      </div>
    </div>
  );
};

export default ProductDetailReviews;
