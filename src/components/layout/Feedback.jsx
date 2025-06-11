import React, { useState } from "react";
import FeedbackData from "../../configs/Feedbacks.json";
import avatar1 from "../../assets/images/MaiLanSpa.jpeg";
import avatar2 from "../../assets/images/NhungBeauty.jpeg";
import avatar3 from "../../assets/images/TuanAnhSpa.jpeg";
import avatar4 from "../../assets/images/KimLan.jpeg";
import avatar5 from "../../assets/images/SpaThanhTu.jpeg";
import { CommentImages } from "../../configs/product_details/images";
import { ChevronLeft, ChevronRight } from "lucide-react";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

const Feedback = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveReviewIndex(index);
    setActiveImageIndex(0);
  };

  const handleImagePrevClick = () => {
    const currentReview = FeedbackData.review[activeReviewIndex];
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? currentReview.images.length - 1 : prevIndex - 1
    );
  };

  const handleImageNextClick = () => {
    const currentReview = FeedbackData.review[activeReviewIndex];
    setActiveImageIndex((prevIndex) =>
      prevIndex === currentReview.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const stars = Array.from({ length: 5 }, (_, index) =>
    index < FeedbackData.review[activeReviewIndex].rating ? (
      <svg
        key={index}
        className="w-8 h-8 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ) : (
      <svg
        key={index}
        className="w-8 h-8 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    )
  );

  return (
    <div className="w-[75%] mx-auto flex flex-col md:flex-row mt-20 gap-4">
      <div className="flex flex-col basis-[60%]">
        <h1 className="font-magnificent text-3xl">{FeedbackData.title}</h1>
        <div className="flex mt-8 space-x-12">
          <div className="basis-[20%] rounded-md w-auto h-fit flex-shrink-0">
            <img
              src={avatars[activeReviewIndex]}
              alt="Feedback avatar"
              loading="lazy"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="basis-[70%] flex flex-col w-full space-y-4">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-1">{stars}</div>
              <p className="font-lato text-xl line-clamp-3">
                {FeedbackData.review[activeReviewIndex].text}
              </p>
              <p className="text-2xl font-magnificent">
                {FeedbackData.review[activeReviewIndex].author}
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 py-4">
              {Array.from(
                { length: FeedbackData.review.length },
                (_, index) => {
                  const isActive =
                    index === activeReviewIndex
                      ? "bg-[#D1AE62] opacity-70 scale-110"
                      : "bg-[#E8EEDF]";
                  return (
                    <button
                      key={index}
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${isActive}`}
                      onClick={() => handleDotClick(index)}
                    ></button>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="basis-[40%] flex justify-end relative">
        <div className="w-full h-[250px] md:h-auto max-h-[500px] overflow-hidden relative group">
          {/* Navigation buttons */}
          {FeedbackData.review[activeReviewIndex].images.length > 1 && (
            <>
              <button
                onClick={handleImagePrevClick}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 
                  bg-white/50 hover:bg-white/70 rounded-full p-1 
                  transition-all duration-300 ease-in-out 
                  shadow-md hover:shadow-lg"
              >
                <ChevronLeft className="w-8 h-8 text-gray-700" />
              </button>
              <button
                onClick={handleImageNextClick}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 
                  bg-white/50 hover:bg-white/70 rounded-full p-1 
                  transition-all duration-300 ease-in-out 
                  shadow-md hover:shadow-lg"
              >
                <ChevronRight className="w-8 h-8 text-gray-700" />
              </button>
            </>
          )}

          {/* Image Slider */}
          <div
            className="w-full h-full flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeImageIndex * 100}%)` }}
          >
            {FeedbackData.review[activeReviewIndex].images.map((img, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={CommentImages[img]}
                  alt={`User Feedback ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
