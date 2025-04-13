import React, { useState, useRef } from "react";
import SearchProduct from "./SearchProduct";
import { ProductDetailsBannerImages } from "../../configs/product_details/images";

const ProductDetailBanner = ({ banner }) => {
  const title = banner.title;
  const products = banner.products;

  // For mobile/tablet slider
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef(null);

  // Group products into pairs for slides
  const productPairs = [];
  for (let i = 0; i < products.length; i += 2) {
    productPairs.push(products.slice(i, Math.min(i + 2, products.length)));
  }

  // If the last pair has only one product, add a placeholder to keep layout consistent
  if (products.length % 2 !== 0) {
    productPairs[productPairs.length - 1].push(null);
  }

  const totalSlides = productPairs.length;

  // Minimum swipe distance to trigger slide change (in pixels)
  const minSwipeDistance = 50;

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
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

    // Add resistance when swiping beyond first or last slide
    if (
      (activeIndex === 0 && diff > 0) ||
      (activeIndex === totalSlides - 1 && diff < 0)
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

    if (isLeftSwipe && activeIndex < totalSlides - 1) {
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

    // Add resistance when swiping beyond first or last slide
    if (
      (activeIndex === 0 && diff > 0) ||
      (activeIndex === totalSlides - 1 && diff < 0)
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
    <div className="mx-auto flex flex-col gap-8 max-w-[1224px] mt-10 mb-10 text-[24px] px-4 md:px-6 lg:px-0">
      <h1 className="text-center font-magnificent text-2xl md:text-[24px]">
        {title}
      </h1>

      {/* Desktop view - all products in a row */}
      <div className="hidden lg:flex gap-6">
        {products.map((prod, index) => (
          <div key={index} className="product-card lg:text-base">
            {/* Custom Tailwind classes to modify child elements */}
            <div className="font-magnificent">
              <SearchProduct
                productName={prod.productName}
                productImg={ProductDetailsBannerImages[prod.image]}
                description={prod.description}
                price={prod.price}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile and Tablet view - exactly 2 products per slide */}
      <div className="lg:hidden">
        <div
          ref={sliderRef}
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {/* Container with only the current slide visible */}
          <div className="w-full relative">
            {/* Active slide with 2 products */}
            <div
              className="flex gap-4 w-full transition-transform duration-300 ease-out"
              style={{
                transform: isSwiping
                  ? `translateX(${translateX}px)`
                  : "translateX(0)",
              }}
            >
              {productPairs[activeIndex].map((prod, prodIndex) =>
                prod ? (
                  <div key={prodIndex} className="w-1/2 product-card">
                    {/* Custom Tailwind classes to modify child elements */}
                    <div className="font-magnificent md:text-sm  text-sm">
                      <SearchProduct
                        productName={prod.productName}
                        productImg={ProductDetailsBannerImages[prod.image]}
                        description={prod.description}
                        price={prod.price}
                      />
                    </div>
                  </div>
                ) : (
                  // Empty placeholder to maintain layout when odd number of products
                  <div key="placeholder" className="w-1/2"></div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Indicator dots */}
        {totalSlides > 1 && (
          <div className="flex justify-center items-center gap-4 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
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
  );
};

export default ProductDetailBanner;
