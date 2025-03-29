import deliveryIcon from "../assets/icons/Icon.svg";
import leftArrow from "../assets/icons/Backword-Arrow.svg";
import rightArrow from "../assets/icons/Farword-Arrow.svg";

const Topbar = () => {
  return (
    <div className="w-full px-[40px] py-[4px] md:px-[465px] md:py-[14px] bg-black text-white flex items-center justify-center h-[16px] md:h-[55px]">
      <div className="flex items-center justify-between max-w-[375px] md:max-w-[1440px] w-full px-2 md:px-4">
        <img className="w-3 md:w-5" src={leftArrow} alt="backward-arrow" />
        <div className="flex items-center space-x-1 md:space-x-4">
          <img className="w-3 md:w-6" src={deliveryIcon} alt="fast-delivery" />
          <p className="text-xs md:text-base">
            Lorem ipsum is simply dummy text
          </p>
        </div>
        <img className="w-3 md:w-5" src={rightArrow} alt="forward-arrow" />
      </div>
    </div>
  );
};

export default Topbar;
