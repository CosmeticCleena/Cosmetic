import React from "react";
import BannerImg from "../assets/images/Banner_1.svg";

const Banner = () => {
  return (
    <div className="w-full relative py-16">
      <div className="w-full absolute inset-0 z-0">
        <img src={BannerImg} alt="Banner" className="w-full h-full" />
      </div>
      <div className={`absolute inset-0 z-10 bg-black opacity-60`}></div>
      <div className="relative w-[90%] mx-auto flex flex-col gap-5 z-20">
        <p className="text-[#D1AE62] text-3xl font-magnificent text-start">
          Lumia không chỉ đơn thuần là một thương hiệu mỹ phẩm
        </p>
        <p className="text-center mb-4 text-[#FFFFFF]">
          Lumia không chỉ đơn thuần là một thương hiệu mỹ phẩm, mà còn là người
          bạn đồng hành trên hành trình chăm sóc và yêu thương làn da của bạn.
          Chúng tôi hiểu rằng mỗi loại da đều có nhu cầu riêng, vì vậy Lumia
          mang đến những sản phẩm được nghiên cứu kỹ lưỡng, giúp cung cấp độ ẩm,
          phục hồi và bảo vệ làn da khỏi tác động của môi trường. Với sự kết hợp
          giữa khoa học hiện đại và nguồn nguyên liệu thiên nhiên, Lumia giúp
          bạn tự tin hơn mỗi ngày với làn da khỏe mạnh, căng tràn sức sống. Hãy
          để Lumia trở thành bí quyết làm đẹp không thể thiếu của bạn!
        </p>
        <button className="w-[200px] h-[56px] bg-[#D1AE62] text-white mx-auto">
          Khám phá ngay
        </button>
      </div>
    </div>
  );
};

export default Banner;
