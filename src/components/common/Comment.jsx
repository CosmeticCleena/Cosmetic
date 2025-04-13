import Star from "../../assets/images/products_detail/products_detail_reviews/Star.svg";
import CheckMarkRound from "../../assets/images/products_detail/products_detail_reviews/CheckMarkRound.svg";

import MoreOptionMenu from "../../assets/images/products_detail/products_detail_reviews/MoreOptionMenu.svg";
import { CommentImages } from "../../configs/product_details/images";

const Comment = ({ starsNumber, name, text, postedOn, images }) => {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex justify-between">
        <div className="flex">
          {Array.from({ length: starsNumber }).map((s, index) => {
            return <img className="" key={index} src={Star} alt="star" />;
          })}
        </div>
        <img className="cursor-pointer" src={MoreOptionMenu} alt="" />
      </div>
      <div className="flex gap-2">
        <h1>{name}</h1>
        <img src={CheckMarkRound} alt="" />
      </div>
      <p>{text}</p>
      <p className="text-[#00000099] font-lato">Posted on {postedOn}</p>
      {/* images comment sections */}
      <div className="flex gap-[10px]">
        {images.map((image, index) => {
          return <img key={index} src={CommentImages[image]} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Comment;
