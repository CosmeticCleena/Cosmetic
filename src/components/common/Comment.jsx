import { useState } from "react";
import Star from "../../assets/images/products_detail/products_detail_reviews/Star.svg";
import CheckMarkRound from "../../assets/images/products_detail/products_detail_reviews/CheckMarkRound.svg";
import MoreOptionMenu from "../../assets/images/products_detail/products_detail_reviews/MoreOptionMenu.svg";
import {
  CommentImages,
  AvatarImages,
} from "../../configs/product_details/images";

const ImageSlider = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative w-full max-w-4xl">
        <button
          className=" cursor-pointer top-4 right-4 text-white text-2xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <div className="relative">
          <img
            src={CommentImages[images[currentIndex]]}
            alt={`Slide ${currentIndex + 1}`}
            className="max-h-[80vh] max-w-full mx-auto"
          />
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            onClick={goToPrevious}
          >
            ←
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            onClick={goToNext}
          >
            →
          </button>
        </div>
        <div className="text-white text-center mt-4">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

const Comment = ({ starsNumber, name, avatar, text, postedOn, images }) => {
  const [showSlider, setShowSlider] = useState(false);

  const maxVisibleImages = 3;
  const remainingImagesCount = images.length - maxVisibleImages;

  const handleMoreImagesClick = () => {
    setShowSlider(true);
  };

  return (
    <div className="flex flex-col gap-[15px] mt-10 pb-5 border-b border-[#F1DDA4]">
      <div className="flex justify-between">
        <div className="flex">
          {Array.from({ length: starsNumber }).map((s, index) => {
            return <img className="" key={index} src={Star} alt="star" />;
          })}
        </div>
        <img className="cursor-pointer" src={MoreOptionMenu} alt="" />
      </div>
      <div className="flex gap-2 items-center">
        <img
          className="w-[4%] rounded-3xl"
          src={AvatarImages[avatar]}
          alt="avatar"
        />
        <h1>{name}</h1>
        <img src={CheckMarkRound} alt="" />
      </div>
      <p>{text}</p>
      <p className="text-[#00000099] font-lato">Đăng vào ngày {postedOn}</p>

      {/* Images comment section */}
      <div className="flex gap-[10px]">
        {images.slice(0, maxVisibleImages).map((image, index) => (
          <img
            key={index}
            src={CommentImages[image]}
            alt=""
            className="h-24 object-cover rounded"
            onClick={() => setShowSlider(true)}
          />
        ))}

        {remainingImagesCount > 0 && (
          <div
            className="h-24 w-24 bg-black bg-opacity-50 flex items-center justify-center text-white font-bold rounded cursor-pointer"
            onClick={handleMoreImagesClick}
          >
            +{remainingImagesCount}
          </div>
        )}
      </div>

      {/* Image slider modal */}
      {showSlider && (
        <ImageSlider images={images} onClose={() => setShowSlider(false)} />
      )}
    </div>
  );
};

export default Comment;
