import React from "react";
import LumiaLogo from "../assets/images/LumiaLogo.svg";
import SearchIcon from "../assets/icons/SearchIcon.svg";
import hamburgerMenu from "../assets/icons/hamburgerMenu.svg";
import User from "../assets/icons/User.svg";
import Cart from "../assets/icons/Cart.svg";

const Navbar = () => {
  return (
    <nav className="h-[96px] w-full">
      <div className="px-4 md:px-[120px] pt-2 pb-2 flex items-center justify-between">
        <img className="w-[150px] md:w-[200px]" src={LumiaLogo} alt="logo" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          <ul className="flex items-center gap-4 mr-8 font-magnificent">
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-[#B08B3B] to-[#EAC980] whitespace-nowrap">
              Giới thiệu
            </li>
            <li className="whitespace-nowrap">Về chúng tôi</li>
            <li className="whitespace-nowrap">Sản phẩm</li>
            <li className="whitespace-nowrap">Liên hệ</li>
          </ul>

          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <img
                src={SearchIcon}
                alt="search-icon"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-5 h-5 flex items-center justify-center">
              <img
                src={User}
                alt="user-icon"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-5 h-5 flex items-center justify-center">
              <img
                src={Cart}
                alt="cart-icon"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation - only hamburger menu */}
        <div className="md:hidden">
          <div className="w-6 h-6 flex items-center justify-center">
            <img
              src={hamburgerMenu}
              alt="menu"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
