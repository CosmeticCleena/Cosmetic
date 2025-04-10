import React, { useState, useRef, useEffect } from "react";
import deroseadvancedserum12312 from "../../assets/images/deroseadvancedserum12312.svg";
import deroseadvancedserum12313 from "../../assets/images/deroseadvancedserum12313.svg";
import deroseadvancedserum12314 from "../../assets/images/deroseadvancedserum12314.svg";
import deroseadvancedserum12315 from "../../assets/images/deroseadvancedserum12315.svg";
import deroseadvancedserum12316 from "../../assets/images/deroseadvancedserum12316.svg";
import deroseadvancedserum12317 from "../../assets/images/deroseadvancedserum12317.svg";

import slider_arrow_down from "../../assets/icons/slider_arrow_down.svg";
import slider_arrow_up from "../../assets/icons/slider_arrow_up.svg";
import arrow_drop_down from "../../assets/icons/arrow_drop_down.svg";
import location_on from "../../assets/icons/location_on.svg";

// mobile icons
import messages from "../../assets/icons/messages.svg";

import card_giftcard from "../../assets/icons/card_giftcard.svg";
import discount from "../../assets/icons/discount.svg";
import Breadcumbs from "../layout/Breadcumbs";

const ProductDetailSlider = () => {
  // Array of all product images for easy indexing
  const productImages = [
    deroseadvancedserum12312,
    deroseadvancedserum12313,
    deroseadvancedserum12314,
    deroseadvancedserum12316,
    deroseadvancedserum12315,
    deroseadvancedserum12317,
  ];

  // State for the current selected image index (starting with the one that had the gold border - index 4)
  const [currentImageIndex, setCurrentImageIndex] = useState(4);

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
      const thumbnailWidth = 68; // 16px width + 1px border on each side + 2px padding on each side
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
      const thumbnailWidth = 68; // Width + padding + border
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

  return (
    <div className="max-w-[1224px] mx-auto">
      <Breadcumbs />
      {/* Products Images and Details Container */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Vertical slider for desktop */}
        <div className="hidden md:flex md:flex-col md:w-20 md:h-[605px] md:justify-between">
          <button
            className="border hover:bg-gray-300 w-20 h-8 flex justify-center items-center"
            onClick={() => handleNavigateImage("up")}
          >
            <img src={slider_arrow_up} alt="Scroll up" />
          </button>

          <div className="flex flex-col gap-4 overflow-hidden">
            {productImages.map((image, index) => (
              <div
                key={index}
                className={`${
                  index === currentImageIndex
                    ? "border-2 border-[#D1AE62]"
                    : "border hover:border-gray-400"
                } cursor-pointer`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  className="w-20 h-20 object-contain"
                  src={image}
                  alt={`Product thumbnail ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <button
            className="border hover:bg-gray-300 w-20 h-8 flex justify-center items-center"
            onClick={() => handleNavigateImage("down")}
          >
            <img src={slider_arrow_down} alt="Scroll down" />
          </button>
        </div>

        {/* Main content container */}
        <div className="flex flex-col w-full md:w-auto">
          {/* Mobile Product Information - Only visible on mobile */}
          <div className="md:hidden w-full flex flex-col gap-4 my-4">
            <div className="font-magnificent flex flex-col gap-3">
              <h1 className="text-[#7F4F29] text-2xl">
                Beautya Prestige LA Micro-Huile De Rose Advanced Serum
              </h1>
              <p className="text-[16px]">Anti-Aging Face Serum</p>
              <div className="text-[14px] flex gap-2">
                <span>All Types of Skin</span>
                <span>|</span>
                <span>Am or Pm</span>
                <span>|</span>
                <span>Brightening</span>
              </div>
              <p className="text-[#868686] text-[16px]">
                Formulated with 92% Natural-Origin Ingredients
              </p>

              {/* Price moved from here for mobile */}
            </div>
          </div>

          {/* Main image - fixed to exactly 704x605 */}
          <div className="bg-gray-100  md:w-[704px] md:h-[605px] flex items-center justify-center">
            <img
              className="max-w-full max-h-full object-contain"
              src={productImages[currentImageIndex]}
              alt="De Rose Advanced Serum"
            />
          </div>

          {/* Mobile Horizontal Thumbnails with touch swipe support */}
          <div
            ref={mobileThumbnailSliderRef}
            className="flex md:hidden overflow-x-auto space-x-2 py-4 w-full scrollbar-hide"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE and Edge
              WebkitOverflowScrolling: "touch", // Smoother scrolling on iOS
            }}
          >
            {productImages.map((image, index) => (
              <div
                key={index}
                className={`flex-shrink-0 ${
                  index === currentImageIndex
                    ? "border-2 border-[#D1AE62]"
                    : "border"
                } p-1 cursor-pointer`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={image}
                  alt={`Product view ${index + 1}`}
                  className="w-16 h-16 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Price Container - Mobile/Tablet (below slider) */}
          <div className="md:hidden w-full mt-2">
            {/* Price for mobile */}
            <p className="font-magnificent text-[24px] mb-2">$520.00</p>

            {/* Size and price selector */}
            <div className=" text-[#606060] font-lato py-2 px-4 flex justify-between border-b border-b-[#606060]">
              <p>30 ML</p>
              <div className="flex gap-1 items-center">
                <p>$520.00</p>
                <img src={arrow_drop_down} alt="Dropdown arrow" />
              </div>
            </div>
          </div>

          {/* Mobile promotions section - Only visible on mobile */}
          <div className="flex justify-center w-full text-[#9E6A30] text-[12px]">
            <div className="mt-6 space-y-3 md:hidden">
              <div className="flex items-center gap-4">
                <span className="w-6 h-6 flex items-center justify-center bg-amber-100 rounded-full mr-2">
                  <img src={card_giftcard} alt="" />
                </span>
                <p className="text-sm">
                  receive 2 free samples when you spend $100
                </p>
              </div>
              <div className="flex items-center  gap-4">
                <span className="w-6 h-6 flex items-center justify-center bg-amber-100 rounded-full mr-2">
                  <img src={discount} alt="" />
                </span>
                <p className="text-sm">
                  receive $2 when you return 5 empty containers
                </p>
              </div>
              <div className="flex items-center  gap-4">
                <span className="w-6 h-6 flex items-center justify-center bg-amber-100 rounded-full mr-2">
                  <img src={messages} alt="" />
                </span>
                <p className="text-sm">
                  receive free 1-2-1 expert advice in branches
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Product Information - Only visible on desktop */}
        <div className="hidden md:flex md:flex-col w-full md:max-w-[392px] gap-4 my-4 md:my-0">
          <div className="font-magnificent flex flex-col gap-3">
            <h1 className="text-[#7F4F29] text-[24px] md:text-[32px]">
              Beautya Prestige LA Micro-Huile De Rose Advanced Serum
            </h1>
            <p className="text-[14px] md:text-[16px]">Anti-Aging Face Serum</p>
            <div className="text-[12px] md:text-[14px] flex gap-2">
              <span>All Types of Skin</span>
              <span>|</span>
              <span>Am or Pm</span>
              <span>|</span>
              <span>Brightening</span>
            </div>
            <p className="text-[#868686] text-[16px]">
              Formulated with 92% Natural-Origin Ingredients
            </p>
            <p className="text-[20px] md:text-[25px]">$520.00</p>
          </div>

          {/* Price Container - Desktop */}
          <div className="text-[#606060] font-lato py-2 px-4 flex justify-between border-b border-b-[#606060]">
            <p>30 ML</p>
            <div className="flex gap-1 items-center">
              <p>$520.00</p>
              <img src={arrow_drop_down} alt="Dropdown arrow" />
            </div>
          </div>

          {/* Button - Desktop only */}
          <button className="w-full bg-[#D1AE62] gap-2 text-white text-[16px] py-2 px-4 flex justify-center items-center hover:bg-[#c19f52]">
            <img src={location_on} alt="Location icon" />
            Check In Branches Stock
          </button>
        </div>
      </div>

      {/* Fixed Button for Mobile and Tablet - Always visible when scrolling */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden z-50">
        <button className="w-full bg-[#D1AE62] gap-2 text-white text-[16px] py-2 px-4 flex justify-center items-center hover:bg-[#c19f52]">
          <img src={location_on} alt="Location icon" />
          Check In Branches Stock
        </button>
      </div>
    </div>
  );
};

export default ProductDetailSlider;
