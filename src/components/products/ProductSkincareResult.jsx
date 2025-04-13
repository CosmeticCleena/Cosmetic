import React, { useState, useRef } from "react";
import { ProductSkinCareResultImages } from "../../configs/product_details/images";

const images = ["SkinCare1", "SkinCare2", "SkinCare3", "SkinCare4"];

const ProductSkincareResult = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef(null);

  // Minimum swipe distance to trigger slide change (in pixels)
  const minSwipeDistance = 50;

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
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
      (activeIndex === images.length - 1 && diff < 0)
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

    if (isLeftSwipe && activeIndex < images.length - 1) {
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
      (activeIndex === images.length - 1 && diff < 0)
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
    <div className="flex flex-col bg-[#7F4F29] w-full py-10 px-4 md:px-6 lg:px-[108px]">
      {/* Desktop view - 4 images in a row */}
      <div className="hidden lg:flex max-w-[1224px] gap-6 mb-5 mx-auto">
        {images.map((image, index) => (
          <div key={index} className="w-1/4 px-1">
            <img
              src={ProductSkinCareResultImages[image]}
              alt={`Skin care result ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      {/* Mobile and Tablet view - Swipeable image carousel */}
      <div className="lg:hidden flex flex-col items-center mb-6">
        <div
          ref={carouselRef}
          className="relative w-full max-w-md overflow-hidden touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main large image with swipe transform */}
          <div
            className="w-full aspect-square transition-transform duration-300 ease-out"
            style={{
              transform: isSwiping
                ? `translateX(${translateX}px)`
                : "translateX(0)",
              touchAction: "pan-y",
            }}
          >
            <img
              src={ProductSkinCareResultImages[images[activeIndex]]}
              alt={`Skin care result ${activeIndex + 1}`}
              className="w-full h-full object-cover"
              draggable="false"
            />
          </div>
        </div>

        {/* Smaller Horizontal indicator bars - responsive but with constrained proportions */}
        <div className="flex justify-center items-center gap-1 mt-4 w-full max-w-xs mx-auto">
          {images.map((_, index) => (
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
      </div>

      {/* Text content - left aligned for mobile/tablet, centered for desktop */}
      <div className="lg:text-center text-left space-y-3 font-lato">
        <p className="text-white text-base md:text-[20px]">
          <span className="font-magnificent text-sm md:text-[18px]">
            In just 1 week: {""}
          </span>
          It Appears Firmer, Stronger And Smoother.
        </p>

        <p className="text-white text-base md:text-[20px]">
          <span className="font-magnificent text-sm md:text-[18px]">
            In 3 weeks: {""}
          </span>
          2x Improvement In The Look Of Feel Of Skin Elasticity
        </p>

        <p className="text-white text-base md:text-[20px]">
          <span className="font-magnificent text-sm md:text-[18px]">
            After 1 month: {""}
          </span>
          The skin looks firmer+60% | The skin looks denser +56%
        </p>
      </div>
    </div>
  );
};

export default ProductSkincareResult;
