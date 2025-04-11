import Star from "../../assets/images/products_detail/products_detail_reviews/Star.svg";
import CheckMarkRound from "../../assets/images/products_detail/products_detail_reviews/CheckMarkRound.svg";

import MoreOptionMenu from "../../assets/images/products_detail/products_detail_reviews/MoreOptionMenu.svg";
import product8 from "../../assets/images/products/product8.svg";
const stars = [Star, Star, Star, Star, Star];

const images = [product8, product8, product8];

const Comment = () => {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex justify-between">
        <div className="flex">
          {stars.map((s, index) => {
            return <img className="" key={index} src={s} alt="star" />;
          })}
        </div>
        <img className="cursor-pointer" src={MoreOptionMenu} alt="" />
      </div>
      <div className="flex gap-2">
        <h1>Samantha D.</h1>
        <img src={CheckMarkRound} alt="" />
      </div>
      <p>
        I have to say this is by far the best Espresso Machine I have come
        across. The features on this machine is remarkable. Most importantly is
        the beverage that comes out of this machine. What strength are you
        looking for...you choose your bean setting. So many cup choices to
        choose from. I for one am very impressed with this machine and so is my
        family. We use this practically everyday. You can choose from Macchiato,
        Latte, Cappuccino and more. The choice is yours. I for one recommend
        this product for anyone who love the taste of a lite, medium, strong
        Espresso. See for yourself...
      </p>
      <p className="text-[#00000099] font-lato">Posted on August 14, 2023</p>
      {/* images comment sections */}
      <div className="flex gap-[10px]">
        {images.map((image, index) => {
          return <img key={index} src={image} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Comment;
