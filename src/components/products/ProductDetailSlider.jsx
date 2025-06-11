import React, { useState, useRef, useEffect } from "react";

import slider_arrow_down from "../../assets/icons/slider_arrow_down.svg";
import slider_arrow_up from "../../assets/icons/slider_arrow_up.svg";
import arrow_drop_down from "../../assets/icons/arrow_drop_down.svg";
import location_on from "../../assets/icons/location_on.svg";
import messages from "../../assets/icons/messages.svg";
import card_giftcard from "../../assets/icons/card_giftcard.svg";
import discount from "../../assets/icons/discount.svg";
import Breadcumbs from "../layout/Breadcumbs";

//images
import { ProductDetailSliderImgs } from "../../configs/product_details/images";

const ProductDetailSlider = ({ productData }) => {
  const productImages = productData.images;
  console.log(productImages);
  const productName = productData.title;
  // State for the current selected image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reference to mobile thumbnail slider
  const mobileThumbnailSliderRef = useRef(null);

  // Touch related states for mobile swipe
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  // Handle thumbnail click to change main image
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);

    // For mobile, scroll to the selected thumbnail to ensure it's visible
    if (mobileThumbnailSliderRef.current) {
      // Use thumbnail width that covers fully
      const thumbnailWidth = 80;
      const scrollOffset =
        index * thumbnailWidth -
        mobileThumbnailSliderRef.current.offsetWidth / 2 +
        thumbnailWidth / 2;
      mobileThumbnailSliderRef.current.scrollTo({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  // Handle scrolling through images with the up/down buttons
  const handleNavigateImage = (direction) => {
    if (direction === "up") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : productImages.length - 1
      );
    } else {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < productImages.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  // Touch Event Handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setStartScrollLeft(mobileThumbnailSliderRef.current.scrollLeft);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.targetTouches[0].clientX);

    // Calculate how far to scroll based on touch movement
    const touchDelta = touchStart - e.targetTouches[0].clientX;
    mobileThumbnailSliderRef.current.scrollLeft = startScrollLeft + touchDelta;

    // Prevent default to avoid page scrolling while swiping the carousel
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Reset touch states
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Make sure the selected thumbnail is in view when component mounts or selection changes
  useEffect(() => {
    if (mobileThumbnailSliderRef.current) {
      const thumbnailWidth = 80;
      const thumbnailElement =
        mobileThumbnailSliderRef.current.children[currentImageIndex];

      if (thumbnailElement) {
        const scrollOffset =
          thumbnailElement.offsetLeft -
          mobileThumbnailSliderRef.current.offsetWidth / 2 +
          thumbnailWidth / 2;

        mobileThumbnailSliderRef.current.scrollTo({
          left: scrollOffset,
          behavior: "smooth",
        });
      }
    }
  }, [currentImageIndex]);

  // Determine whether to show multiple thumbnails for mobile
  const shouldShowMobileThumbnails = productImages.length > 1;

  return (
    <div className="w-full max-w-full mx-auto px-4">
      <div className="max-w-[1224px] mx-auto">
        <Breadcumbs productName={productName} />
        {/* Products Images and Details Container */}
        <div className="flex flex-col lg:flex-row gap-6 mt-3">
          {/* Vertical slider for desktop - ALWAYS shown but with correct number of images */}
          <div className="hidden lg:flex lg:flex-col lg:w-20 lg:h-[605px]">
            <button
              className="border hover:bg-gray-300 w-20 h-8 flex justify-center items-center mb-1"
              onClick={() => handleNavigateImage("up")}
            >
              <img src={slider_arrow_up} alt="Scroll up" loading="lazy" />
            </button>

            <div className="flex-1 flex flex-col justify-between py-1">
              {/* Display only the exact thumbnails from productImages array */}
              {productImages.length === 1 ? (
                // When there's only one image
                <div
                  className="ring-2 ring-[#D1AE62] cursor-pointer overflow-hidden"
                  onClick={() => handleThumbnailClick(0)}
                >
                  <div className="w-20 h-20 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={ProductDetailSliderImgs[productImages[0]]}
                      alt="Product thumbnail"
                      loading="lazy"
                    />
                  </div>
                </div>
              ) : (
                // When there are multiple images
                productImages.map((image, index) => (
                  <div
                    key={index}
                    className={`${
                      index === currentImageIndex
                        ? "ring-2 ring-[#D1AE62]"
                        : "ring-1 ring-gray-200 hover:ring-gray-400"
                    } cursor-pointer overflow-hidden`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <div className="w-20 h-20 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={ProductDetailSliderImgs[image]}
                        alt={`Product thumbnail ${index + 1}`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))
              )}
            </div>

            <button
              className="border hover:bg-gray-300 w-20 h-8 flex justify-center items-center mt-1"
              onClick={() => handleNavigateImage("down")}
            >
              <img src={slider_arrow_down} alt="Scroll down" />
            </button>
          </div>

          {/* Main content container */}
          <div className="flex flex-col w-full lg:w-auto">
            {/* Mobile/Tablet Product Information - Only visible on mobile and tablet */}
            <div className="lg:hidden w-full flex flex-col gap-4 my-4">
              <div className="font-magnificent flex flex-col gap-3">
                <h1 className="text-[#7F4F29] text-2xl">{productData.title}</h1>
                <p className="text-[16px]">{productData.description}</p>
                <div className="text-[14px] flex gap-2">
                  {productData.categories.map((cate, index) => {
                    if (index === productData.categories.length - 1)
                      return <span key={index}>{cate} </span>;
                    return <span key={index}>{cate} |</span>;
                  })}
                </div>
                <p className="text-[#868686] text-[16px]">
                  {productData.description2}
                </p>
              </div>
            </div>

            {/* Main image - responsive at all screen sizes */}
            <div className="bg-gray-100 w-full h-[300px] sm:h-[400px] md:h-[450px] lg:w-[704px] lg:h-[605px] flex items-center justify-center overflow-hidden">
              <img
                className="w-full h-full object-contain"
                src={ProductDetailSliderImgs[productImages[currentImageIndex]]}
                alt="Product Image"
                loading="lazy"
              />
            </div>

            {/* Mobile/Tablet Horizontal Thumbnails - Only shown when multiple images */}
            {shouldShowMobileThumbnails && (
              <div
                ref={mobileThumbnailSliderRef}
                className="flex lg:hidden overflow-x-auto py-4 w-full scrollbar-hide"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                  scrollbarWidth: "none", // Firefox
                  msOverflowStyle: "none", // IE and Edge
                  WebkitOverflowScrolling: "touch", // Smoother scrolling on iOS
                  scrollSnapType: "x mandatory", // Enable snap scrolling
                }}
              >
                {productImages.map((image, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 cursor-pointer scroll-snap-align-start mx-2 first:ml-0 last:mr-0 overflow-hidden ${
                      index === currentImageIndex
                        ? "ring-2 ring-[#D1AE62]"
                        : "ring-1 ring-gray-200"
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="w-20 h-20 overflow-hidden">
                      <img
                        src={ProductDetailSliderImgs[image]}
                        alt={`Product view ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Price Container - Mobile/Tablet (below slider) */}
            <div className="lg:hidden w-full mt-4 px-2">
              {/* Size and price selector */}
              <div className="text-[#606060] font-lato py-3 px-4 flex justify-between border-b border-b-[#606060]">
                <p>{productData.amount} ML</p>
                <div className="flex gap-1 items-center">
                  <img src={arrow_drop_down} alt="Dropdown arrow" loading="lazy" />
                </div>
              </div>
            </div>

            {/* Mobile/Tablet promotions section */}
            <div className="flex justify-center w-full text-[#9E6A30] text-[14px] px-2">
              <div className="mt-6 space-y-4 lg:hidden w-full">
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full mr-2">
                    <img src={card_giftcard} alt="" loading="lazy" />
                  </span>
                  <p>Nhận 2 mẫu thử miễn phí khi bạn chi tiêu $100</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full mr-2">
                    <img src={discount} alt="" loading="lazy"/>
                  </span>
                  <p>Nhận $2 khi bạn trả lại 5 hộp rỗng</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full mr-2">
                    <img src={messages} alt="" loading="lazy" />
                  </span>
                  <p>
                    Nhận tư vấn miễn phí 1-1 với chuyên gia tại các chi nhánh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Product Information - Only visible on desktop */}
          <div className="hidden lg:flex lg:flex-col w-full lg:max-w-[392px] gap-4 my-4 lg:my-0">
            <div className="font-magnificent flex flex-col gap-3">
              <h1 className="text-[#7F4F29] text-[24px] lg:text-[32px]">
                {productData.title}
              </h1>
              <p className="text-[14px] lg:text-[16px]">
                {productData.description}
              </p>
              <div className="text-[12px] lg:text-[14px] flex gap-2">
                {productData.categories.map((cate, index) => {
                  if (index === productData.categories.length - 1)
                    return <span key={index}>{cate}</span>;
                  return <span key={index}>{cate} |</span>;
                })}
              </div>
              <p className="text-[#868686] text-[16px]">
                {productData.description2}
              </p>
            </div>

            {/* Price Container - Desktop */}
            <div className="text-[#606060] font-lato py-2 px-4 flex justify-between border-b border-b-[#606060]">
              <p>{productData.amount} ML</p>
            </div>

            {/* Button - Desktop only */}
            <button className="w-full bg-[#D1AE62] gap-2 text-white text-[16px] py-2 px-4 flex justify-center items-center hover:bg-[#c19f52]">
              <img src={location_on} alt="Location icon" />
              Kiểm tra hàng tồn ở các chi nhánh
            </button>
          </div>
        </div>
      </div>

      {/* Fixed Button for Mobile and Tablet - Always visible when scrolling */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg lg:hidden z-50">
        <button className="w-full bg-[#D1AE62] gap-2 text-white text-[16px] py-3 flex justify-center items-center hover:bg-[#c19f52]">
          <img src={location_on} alt="Location icon" className="mr-2" />
          Kiểm tra hàng tồn ở các chi nhánh
        </button>
      </div>
    </div>
  );
};

export default ProductDetailSlider;
