import deliveryIcon from "../assets/icons/Icon.svg";
import leftArrow from "../assets/icons/Backword-Arrow.svg";
import rightArrow from "../assets/icons/Farword-Arrow.svg";

const Topbar = () => {
  return (
    <div className="w-full bg-black h-[55px] text-white flex items-center justify-center">
      <img src={leftArrow} alt="backward-arrow" />
      <div className="flex px-[78px] space-x-4">
        <img className="" src={deliveryIcon} alt="fast-delivery" />
        <p>Lorem ipsum is simply dummy text</p>
      </div>
      <img src={rightArrow} alt="backward-arrow" />
    </div>
  );
};

export default Topbar;
