import React from "react";
import { useState } from "react";
import AvatarFeedbackImg from "../assets/images/AvatarFeedback.svg";
import UserFeedbackImg from "../assets/images/UserFeedbackImg.svg";
import FeedbackData from "../configs/Feedbacks.json";

const imgSrc = [
  {
    reviewImg: UserFeedbackImg,
    userAva: AvatarFeedbackImg,
  },
  {
    reviewImg: UserFeedbackImg,
    userAva: AvatarFeedbackImg,
  },
];

const Feedback = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const stars = Array.from({ length: 5 }, (_, index) =>
    index < FeedbackData.review[activeIndex].rating ? (
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
              src={imgSrc[activeIndex].userAva}
              alt="Feedback avatar"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="basis-[70%] flex flex-col w-full space-y-4">
            <div className="h-[170px] flex flex-col space-y-3">
              <div className="flex items-center space-x-1">{stars}</div>
              <p className="font-lato text-xl line-clamp-3">
                {FeedbackData.review[activeIndex].text}
              </p>
              <p className="text-2xl font-magnificent">
                {FeedbackData.review[activeIndex].author}
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 py-4">
              {Array.from(
                { length: FeedbackData.review.length },
                (_, index) => {
                  const isActive =
                    index === activeIndex
                      ? "bg-[#D1AE62] opacity-70 scale-110"
                      : "bg-[#E8EEDF]";
                  return (
                    <button
                      className={`h-2 w-2 rounded-full  transition-all duration-300 ${isActive}`}
                      onClick={() => handleDotClick(index)}
                    ></button>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="basis-[40%] flex justify-end">
        <div className="w-full h-[250px] md:h-auto max-h-[500px] overflow-hidden">
          <img
            src={imgSrc[activeIndex].reviewImg}
            alt="User Feedback"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
