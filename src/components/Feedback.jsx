import React from "react";
import AvatarFeedbackImg from "../assets/images/AvatarFeedback.svg";
import UserFeedbackImg from "../assets/images/UserFeedbackImg.svg";

const Feedback = () => {
  return (
    <div className="w-[75%] mx-auto flex flex-col md:flex-row mt-20 gap-4">
      <div className="flex flex-col basis-[60%] space-x-4">
        <h1 className="font-magnificent text-3xl">
          Đánh giá của khách hàng về sản phẩm của chúng tôi
        </h1>
        <div className="flex mt-8">
          <div className="rounded-md overflow-hidden w-full h-full">
            <img
              src={AvatarFeedbackImg}
              alt="Feedback avatar"
              className="w-[90%] h-auto object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div class="flex items-center space-x-1">
              <svg
                class="w-8 h-8 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                class="w-8 h-8 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                class="w-8 h-8 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                class="w-8 h-8 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                class="w-8 h-8 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <p className="font-lato text-xl">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500 Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
            <p className="text-2xl font-magnificent">Lorem Ipsum</p>
            <div className="flex items-center justify-center gap-4 py-4">
              <div className="h-2 w-2 rounded-full bg-[#D1AE62] opacity-70"></div>
              <div className="h-2 w-2 rounded-full bg-[#E8EEDF]"></div>
              <div className="h-2 w-2 rounded-full bg-[#E8EEDF]"></div>
              <div className="h-2 w-2 rounded-full bg-[#E8EEDF]"></div>
              <div className="h-2 w-2 rounded-full bg-[#E8EEDF]"></div>
              <div className="h-2 w-2 rounded-full bg-[#E8EEDF]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-[40%] flex justify-end items-center">
        <img
          src={UserFeedbackImg}
          alt="User Feedback"
          className="max-h-[600px] h-auto w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Feedback;
