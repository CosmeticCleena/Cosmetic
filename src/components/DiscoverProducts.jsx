import DiscoverProduct from "../assets/images/DiscoverProduct.svg";
import FeaturedProductCard from "./FeaturedProductCard";

const DiscoverProducts = () => {
  return (
    <div className="w-full md:py-[60px] md:px-[120px] py-8 px-4 font-magnificent mb-6 flex flex-col justify-center">
      <div className="text-center mb-10">
        <p className="text-[22px]">Khám phá</p>
        <p className="text-[40px] leading-tight">
          BỘ SƯU TẬP MỸ PHẨM{" "}
          <span className="inline-block bg-gradient-to-r from-[#B08B3B] to-[#EAC980] text-transparent bg-clip-text font-medium">
            BÁN CHẠY NHẤT
          </span>{" "}
          <br className="md:hidden" />
          NĂM 2025
        </p>
      </div>
      {/* Sử dụng breakpoint lớn hơn xl để chuyển sang cột sớm hơn */}
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <img
          src={DiscoverProduct}
          alt="DiscoverProduct"
          className="block w-full xl:w-auto mb-6 xl:mb-0"
        />
        <div className="flex flex-col items-center w-full">
          <div className="w-full flex justify-center">
            <div className="xl:transform-none xl:w-auto w-full flex justify-center xl:scale-100 scale-110 transform-gpu">
              <FeaturedProductCard isAddToCart={false} />
            </div>
          </div>

          <div className="flex gap-[14px] mt-8 xl:mt-6 relative z-10">
            <div className="w-[7px] h-[8px] bg-[#D1AE62] rounded-3xl cursor-pointer"></div>
            <div className="w-[7px] h-[8px] bg-[#0A0A0A] rounded-3xl cursor-pointer"></div>
            <div className="w-[7px] h-[8px] bg-[#0A0A0A] rounded-3xl cursor-pointer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverProducts;
