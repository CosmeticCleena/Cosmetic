import React, { useState, useRef, useEffect } from "react";
import SearchProduct from "./SearchProduct";
import { ProductDetailsBannerImages } from "../../configs/product_details/images";

const ProductDetailBanner = ({ banner, isSecondBanner }) => {
  const title = banner.title;
  const products = banner.products;

  // For carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef(null);

  // Group products for slides - 4 for desktop, 2 for mobile
  const desktopProductGroups = [];
  const mobileProductPairs = [];

  // Create desktop groups (4 products per slide)
  for (let i = 0; i < products.length; i += 4) {
    desktopProductGroups.push(
      products.slice(i, Math.min(i + 4, products.length))
    );
  }

  // Create mobile pairs (2 products per slide)
  for (let i = 0; i < products.length; i += 2) {
    mobileProductPairs.push(
      products.slice(i, Math.min(i + 2, products.length))
    );
  }

  // If the last group/pair has fewer items than needed, pad with null to maintain layout
  const lastDesktopGroup =
    desktopProductGroups[desktopProductGroups.length - 1];
  if (lastDesktopGroup && lastDesktopGroup.length < 4) {
    while (lastDesktopGroup.length < 4) {
      lastDesktopGroup.push(null);
    }
  }

  const lastMobilePair = mobileProductPairs[mobileProductPairs.length - 1];
  if (lastMobilePair && lastMobilePair.length < 2) {
    lastMobilePair.push(null);
  }

  const totalDesktopSlides = desktopProductGroups.length;
  const totalMobileSlides = mobileProductPairs.length;

  // Use a single state for active index but maintain different total counts
  const totalSlides =
    window.innerWidth >= 1024 ? totalDesktopSlides : totalMobileSlides;

  // Update active index when screen size changes
  useEffect(() => {
    const handleResize = () => {
      // Reset to first slide when switching between mobile and desktop
      setActiveIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Minimum swipe distance to trigger slide change (in pixels)
  const minSwipeDistance = 50;

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex ===
      (window.innerWidth >= 1024
        ? totalDesktopSlides - 1
        : totalMobileSlides - 1)
        ? 0
        : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0
        ? window.innerWidth >= 1024
          ? totalDesktopSlides - 1
          : totalMobileSlides - 1
        : prevIndex - 1
    );
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(true);
    setTranslateX(0);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;

    const currentTouch = e.targetTouches[0].clientX;
    const diff = currentTouch - touchStart;
    const currentTotalSlides =
      window.innerWidth >= 1024 ? totalDesktopSlides : totalMobileSlides;

    // Add resistance when swiping beyond first or last slide
    if (
      (activeIndex === 0 && diff > 0) ||
      (activeIndex === currentTotalSlides - 1 && diff < 0)
    ) {
      setTranslateX(diff / 3); // Add resistance
    } else {
      setTranslateX(diff);
    }

    setTouchEnd(currentTouch);
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);

    // Reset transform
    setTranslateX(0);

    if (!touchStart || !touchEnd) return;

    const distance = touchEnd - touchStart;
    const isLeftSwipe = distance < -minSwipeDistance;
    const isRightSwipe = distance > minSwipeDistance;
    const currentTotalSlides =
      window.innerWidth >= 1024 ? totalDesktopSlides : totalMobileSlides;

    if (isLeftSwipe && activeIndex < currentTotalSlides - 1) {
      handleNext();
    } else if (isRightSwipe && activeIndex > 0) {
      handlePrev();
    }

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Handle mouse events for desktop testing
  const handleMouseDown = (e) => {
    setTouchStart(e.clientX);
    setIsSwiping(true);
    setTranslateX(0);

    // Prevent text selection during swipe
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isSwiping) return;
    const diff = e.clientX - touchStart;
    const currentTotalSlides =
      window.innerWidth >= 1024 ? totalDesktopSlides : totalMobileSlides;

    // Add resistance when swiping beyond first or last slide
    if (
      (activeIndex === 0 && diff > 0) ||
      (activeIndex === currentTotalSlides - 1 && diff < 0)
    ) {
      setTranslateX(diff / 3); // Add resistance
    } else {
      setTranslateX(diff);
    }

    setTouchEnd(e.clientX);
  };

  const handleMouseUp = () => {
    handleTouchEnd();
  };

  const handleMouseLeave = () => {
    if (isSwiping) {
      handleTouchEnd();
    }
  };

  return (
    <div className={isSecondBanner ? "bg-[#F9F6ED]" : ""}>
      <div
        className={`mx-auto flex flex-col gap-8 max-w-[1224px] mt-24 mb-10 py-10 text-[24px] px-4 md:px-6 lg:px-0 ${
          isSecondBanner ? "bg-[#F9F6ED]" : ""
        }`}
      >
        <h1 className="text-center font-magnificent text-2xl md:text-[24px]">
          {title}
        </h1>

        {/* Desktop view - 4 products per slide */}
        <div className="hidden lg:block relative">
          {/* Navigation arrows - now square and closer to edge */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-6 bg-white shadow-md z-10 hover:bg-gray-100 w-10 h-10 flex items-center justify-center"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            className="overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {desktopProductGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="flex gap-6 min-w-full">
                  {group.map((prod, prodIndex) =>
                    prod ? (
                      <div
                        key={prodIndex}
                        className="w-1/4 product-card lg:text-base"
                      >
                        <div className="font-magnificent">
                          <SearchProduct
                            productName={prod.productName}
                            productImg={ProductDetailsBannerImages[prod.image]}
                            description={prod.description}
                            price={prod.price}
                          />
                        </div>
                      </div>
                    ) : (
                      <div key={`empty-${prodIndex}`} className="w-1/4"></div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-6 bg-white shadow-md z-10 hover:bg-gray-100 w-10 h-10 flex items-center justify-center"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Desktop indicators */}
          {totalDesktopSlides > 1 && (
            <div className="flex justify-center items-center gap-1 mt-6">
              {Array.from({ length: totalDesktopSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`h-1 w-6 rounded-full ${
                    index === activeIndex ? "bg-[#D1AE62]" : "bg-gray-300"
                  }`}
                  style={{ height: "4px" }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Mobile and Tablet view - 2 products per slide */}
        <div className="lg:hidden relative">
          {/* Navigation arrows - now square and closer to edge */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-2 bg-white shadow-md z-10 hover:bg-gray-100 w-8 h-8 flex items-center justify-center"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            ref={sliderRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: isSwiping
                  ? `translateX(${translateX}px)`
                  : `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {mobileProductPairs.map((pair, pairIndex) => (
                <div key={pairIndex} className="flex gap-4 min-w-full">
                  {pair.map((prod, prodIndex) =>
                    prod ? (
                      <div key={prodIndex} className="w-1/2 product-card">
                        <div className="font-magnificent md:text-sm text-sm">
                          <SearchProduct
                            productName={prod.productName}
                            productImg={ProductDetailsBannerImages[prod.image]}
                            description={prod.description}
                            price={prod.price}
                          />
                        </div>
                      </div>
                    ) : (
                      <div
                        key={`empty-mobile-${prodIndex}`}
                        className="w-1/2"
                      ></div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-2 bg-white shadow-md z-10 hover:bg-gray-100 w-8 h-8 flex items-center justify-center"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Mobile indicators */}
          {totalMobileSlides > 1 && (
            <div className="flex justify-center items-center gap-1 mt-6">
              {Array.from({ length: totalMobileSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`h-1 w-6 rounded-full ${
                    index === activeIndex ? "bg-[#D1AE62]" : "bg-gray-300"
                  }`}
                  style={{ height: "4px" }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailBanner;
