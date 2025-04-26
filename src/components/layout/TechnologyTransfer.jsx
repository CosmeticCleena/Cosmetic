import React from "react";
import transferTechIcon1 from "../../assets/icons/transferTechIcon1.svg";
import transferTechIcon2 from "../../assets/icons/transferTechIcon2.svg";
import transferTechIcon3 from "../../assets/icons/transferTechIcon3.svg";
import transferTechIcon4 from "../../assets/icons/transferTechIcon4.svg";
import transferTechIcon5 from "../../assets/icons/transferTechIcon5.svg";
import transferTechIcon6 from "../../assets/icons/transferTechIcon6.svg";

import data from "../../configs/TechnologyTransfer.json";

const TechnologyTransfer = () => {
  const features = data.features;

  const technologyTransferImages = {
    transferTechIcon1,
    transferTechIcon2,
    transferTechIcon3,
    transferTechIcon4,
    transferTechIcon5,
    transferTechIcon6,
  };

  return (
    <div className="md:px-[120px] md:py-[60px]">
      <div className="md:max-w-[1200px] px-4 md:px-0 md:mx-auto md:flex md:flex-col md:gap-[66px]">
        {/*Introduction - Desktop only */}
        <div className="hidden md:block md:text-center">
          <h1 className="font-magnificent md:text-[32px] lg:text-[44px] mx-auto">
            Quyền Lợi Khi Nhận Chuyển Giao Công Nghệ Của LUMIA
          </h1>
          <p className="font-lato md:text-[22px] text-[#6A6A6A]">
            Khi hợp tác với LUMIA, các chủ spa không chỉ đơn thuần là phân phối
            sản phẩm mà còn được tiếp cận với công nghệ làm đẹp tiên tiến, đặc
            biệt là công nghệ điều trị nám hàng đầu. LUMIA cam kết mang lại giải
            pháp hiệu quả vượt trội trong điều trị nám, tàn nhang và các vấn đề
            về sắc tố da. Dưới đây là những quyền lợi đặc biệt khi bạn nhận
            chuyển giao công nghệ từ LUMIA:
          </p>
        </div>

        {/* Mobile Title */}
        <div className="md:hidden pt-6 pb-4">
          <h1 className="font-magnificent text-[24px] text-center leading-tight px-6">
            Quyền Lợi Khi Nhận
            <br />
            Chuyển Giao Công
            <br />
            Nghệ Của LUMIA
          </h1>
        </div>

        {/* Mobile Description */}
        <div className="md:hidden px-6 pb-6">
          <p className="text-[12px] md:text-[16px] text-[#6A6A6A] leading-relaxed text-center">
            Khi hợp tác với LUMIA, các chủ spa không chỉ đơn thuần là phân phối
            sản phẩm mà còn được tiếp cận với công nghệ làm đẹp tiên tiến, đặc
            biệt là công nghệ điều trị nám hàng đầu. LUMIA cam kết mang lại giải
            pháp hiệu quả vượt trội trong điều trị nám, tàn nhang và các vấn đề
            về sắc tố da. Dưới đây là những quyền lợi đặc biệt khi bạn nhận
            chuyển giao công nghệ từ LUMIA:
          </p>
        </div>

        {/* Mobile Features */}
        <div className="md:hidden py-6">
          {features.map((feat, index) => (
            <div
              key={index}
              className="flex justify-start gap-[12px] bg-[#F9F6ED] mb-5 rounded-md items-center px-4 py-10"
            >
              <img
                src={technologyTransferImages[feat.iconRef]}
                alt={`technology icon ${index + 1}`}
              />
              <h2 className="text-[22px] font-bold">{feat.title}</h2>
            </div>
          ))}
        </div>

        {/* Desktop Features */}
        <div className="hidden md:flex md:flex-col md:items-center lg:items-stretch lg:grid lg:grid-cols-3 md:gap-x-[36px] md:gap-y-[65px]">
          {features.map((feat, index) => {
            return (
              <div
                key={index}
                className="flex items-start gap-[25px] max-w-[376px]"
              >
                <img
                  src={technologyTransferImages[feat.iconRef]}
                  alt={`technology icon ${index + 1}`}
                />
                <div className="flex flex-col gap-[10px]">
                  <h1 className="font-bold md:text-[22px] lg:text-[24px]">
                    {feat.title}
                  </h1>
                  <p className="text-[#6A6A6A]">{feat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechnologyTransfer;
