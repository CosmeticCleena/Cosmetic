import deliveryIcon from "../assets/icons/Icon.svg";
import leftArrow from "../assets/icons/Backword-Arrow.svg";
import rightArrow from "../assets/icons/Farword-Arrow.svg";

const Topbar = () => {
  return (
    <div className="w-full fixed  z-[60] top-0 px-[20px] py-[4px] sm:px-[30px] md:px-[40px] lg:px-[60px] xl:px-[465px] md:py-[14px] bg-black text-white flex items-center justify-center h-[16px] md:h-[55px]">
      <div className="flex items-center justify-between w-full">
        <img
          className="w-3 md:w-5 flex-shrink-0"
          src={leftArrow}
          alt="backward-arrow"
        />
        <div className="flex items-center space-x-1 md:space-x-4 mx-2 sm:mx-4 overflow-visible">
          <img
            className="w-3 md:w-6 flex-shrink-0"
            src={deliveryIcon}
            alt="fast-delivery"
          />
          <p className="text-xs sm:text-sm md:text-base whitespace-nowrap truncate max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-full">
            Lorem ipsum is simply dummy text
          </p>
        </div>
        <img
          className="w-3 md:w-5 flex-shrink-0"
          src={rightArrow}
          alt="forward-arrow"
        />
      </div>
    </div>
  );
};

export default Topbar;
