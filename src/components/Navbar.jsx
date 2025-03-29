import React from "react";
import LumiaLogo from "../assets/images/LumiaLogo.svg";
import SearchIcon from "../assets/icons/SearchIcon.svg";
import User from "../assets/icons/User.svg";
import Cart from "../assets/icons/Cart.svg";

const Navbar = () => {
  return (
    <nav className="h-[96px] w-full">
      <div className="px-[120px] pt-2 pb-2 flex items-center justify-between">
        <img className="w-[200px] " src={LumiaLogo} alt="logo" />
        <div className=" flex justify-between w-full ml-[24.1rem] text-[18px]">
          <ul className="flex items-center gap-4 pr-[120px] font-magnificent">
            <li class="text-transparent bg-clip-text bg-gradient-to-r from-[#B08B3B] to-[#EAC980] ">
              Giới thiệu
            </li>
            <li>Về chúng tôi</li>
            <li>Sản phẩm</li>
            <li>Liên hệ</li>
          </ul>
          <div className="flex gap-3 ">
            <img src={SearchIcon} alt="search-icon" />
            <img src={User} alt="" />
            <img src={Cart} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
