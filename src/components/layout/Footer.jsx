import bunnyVector from "../../assets/icons/bunnyVector.svg";
import Leaf from "../../assets/icons/Leaf.svg";
import Wheat from "../../assets/icons/Wheat.svg";
import LightBall from "../../assets/icons/LightBall.svg";
import Location from "../../assets/icons/Location.svg";
import Telephone from "../../assets/icons/Telephone.svg";
import indicator from "../../assets/icons/indicator.svg";
import copyright from "../../assets/icons/copyright.svg";

import BGLogo from "../../assets/icons/BGLogo.svg";
import Facebook from "../../assets/icons/_Facebook.svg";
import Instagram from "../../assets/icons/_Instagram.svg";
import Pinterest from "../../assets/icons/_Pinterest.svg";
import Reddit from "../../assets/icons/_Reddit.svg";
import Tiktok from "../../assets/icons/_Tiktok.svg";
import Twitter from "../../assets/icons/_Twitter.svg";

const Footer = () => {
  return (
    <div id="footer" className="w-full mx-auto relative">
      {/* Top section - features */}
      <div className="grid grid-cols-2 p-5 footer-top gap-16 bg-[#F9F6ED] text-[#9E6A30] h-max-[104px] md:flex items-center justify-between md:px-[108px] text-[16px]">
        <div className="flex gap-[8px] items-center">
          <img src={bunnyVector} alt="" />
          <span>Không thử nghiệm trên động vật</span>
        </div>
        <div className="flex gap-[8px] items-center">
          <img src={Leaf} alt="" />
          <span>Không thành phần từ động vật</span>
        </div>
        <div className="flex gap-[8px] items-center">
          <img src={Wheat} alt="" />
          <span>Không gluten hoặc phụ phẩm gluten</span>
        </div>
        <div className="flex gap-[8px] items-center">
          <img src={LightBall} alt="" />
          <span>Bao bì có thể tái chế</span>
        </div>
      </div>

      {/* Middle section - main footer content */}
      <div className="footer-middle pb-4 md:pb-0 bg-[#6B4128] max-h-[963px] md:h-[415px] text-[#FFFFFF] relative">
        {/* Background Logo Positioned Absolutely */}
        <div className="absolute bottom-0 top-0 right-0 opacity-100 z-0">
          <img
            src={BGLogo}
            alt="Background Logo"
            className="w-[325px] h-auto"
          />
        </div>

        <div className="flex flex-col md:flex-row px-4 md:px-[108px] justify-between pt-16 relative z-10">
          <div className="flex flex-col gap-3 md:gap-4 font-lato md:mx-0 mx-[3em]">
            <h1 className="text-[24px] font-magnificent">
              Chúng tôi có thể giúp gì?
            </h1>
            <span>Chi nhánh Beautya</span>
            <span>Liên hệ với chúng tôi</span>
            <span>Câu hỏi thường gặp</span>
            <span>Thương hiệu của chúng tôi</span>
            <span>Blog</span>
          </div>
          <div className="flex flex-col gap-3 md:gap-4 font-lato md:mx-0 mx-[3em] md:mt-0 mt-5">
            <h1 className="text-[24px] font-magnificent">Sản phẩm</h1>
            <span>Trang điểm cho phụ nữ</span>
            <span>Chăm sóc da cho phụ nữ</span>
            <span>Quà tặng & Bộ sản phẩm</span>
          </div>
          <div className="flex flex-col gap-4 md:w-1/2 w-full font-lato px-3 sm:px-[3em] mt-10 md:mt-0 relative z-10">
            {/* Changed mx-[3em] to px-3 sm:px-[3em] and added w-full for better tablet support */}
            <span className="text-[24px] font-magnificent">
              Giữ liên lạc với Lumia
            </span>
            <span className="text-[16px] w-full sm:w-[90%]">
              {/* Changed w-[90%] to w-full sm:w-[90%] for better mobile/tablet support */}
              Đăng ký nhận bản tin Beautya và là người đầu tiên biết về tin tức,
              ưu đãi và lời khuyên chăm sóc da
            </span>
            <div className="flex flex-col md:flex-row gap-2 w-full text-[#CBCBCB] items-center">
              <input
                className="bg-transparent border-b w-full p-3 focus:outline-none text-[24px] block"
                /* Added block to ensure visibility */
                placeholder="Địa chỉ Email"
                type="text"
              />
              <button className="w-full relative top-2 text-[16px] bg-transparent border-solid border-[2px] md:w-[104px] h-12 border-[#CBCBCB] py-2 px-4">
                Subscribe
              </button>
            </div>

            <div className="flex items-start gap-2 mt-2">
              <input
                className="mt-1 w-4 min-w-4 h-4"
                id="email-check"
                name="email-check"
                type="checkbox"
              />
              <label className="hidden md:block text-sm" htmlFor="email-check">
                Bằng cách gửi email của bạn, bạn đồng ý nhận email quảng cáo từ
                Beautya. Vui lòng xem Chính sách Bảo mật của chúng tôi, bao gồm
                Thông báo Ưu đãi Tài chính dành cho cư dân CA.
              </label>
              <label className="md:hidden text-sm" htmlFor="email-check">
                Tôi đồng ý với Điều khoản và Điều kiện cũng như Chính sách Bảo
                mật của Beautya.
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Location and social media section */}
      <div className="bg-[#5C3827] text-white px-4 md:px-[108px] relative z-20">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Location and telephone info */}
          <div className="py-[8px] flex flex-col items-start md:flex-row gap-4 pr-4 md:items-center text-[16px]">
            <div className="flex gap-3 pl-[12px] md:pl-0">
              <img src={Location} alt="Location" />
              <span className="flex-shrink">
                150 Nguyễn Sơn, Long Biên, Hà Nội, Việt Nam
              </span>
            </div>
            <img className="hidden md:flex" src={indicator} alt="indicator" />
            <div className="flex gap-3 pl-[12px] md:pl-0">
              <img src={Telephone} alt="Telephone" />
              <span>Đường dây nóng: +84 988 602 888</span>
            </div>
          </div>

          {/* Social media icons - single row on mobile, centered */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-2 gap-y-3 py-3 md:py-2">
            <div className="flex items-center justify-center w-10 h-10">
              <img className="p-2" src={Instagram} alt="Instagram" />
            </div>
            <div className="flex items-center justify-center w-10 h-10">
              <img className="p-2" src={Facebook} alt="Facebook" />
            </div>
            <div className="flex items-center justify-center w-10 h-10">
              <img className="p-2" src={Twitter} alt="Twitter" />
            </div>
            <div className="flex items-center justify-center w-10 h-10">
              <img className="p-2" src={Pinterest} alt="Pinterest" />
            </div>
            <div className="flex items-center justify-center w-10 h-10">
              <img className="p-2" src={Reddit} alt="Reddit" />
            </div>
            <div className="flex items-center justify-center w-10 h-10">
              <img className="p-2" src={Tiktok} alt="Tiktok" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-[#351D13] flex flex-col md:flex-row justify-between text-[#CBCBCB] text-[12px] px-4 md:px-[108px] relative z-20">
        <div className="py-[8px] flex gap-1 items-center justify-center md:justify-start">
          <img className="relative right-1" src={copyright} alt="copyright" />
          <span>2025 Beautya. Tất cả các quyền được bảo lưu.</span>
        </div>
        <div className="py-[8px] flex gap-4 justify-center md:justify-start flex-wrap">
          <span>Điều khoản & Điều kiện</span>
          <span>Chính sách Bảo mật</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
