import { useState } from "react";
import React from "react";
import LumiaLogo from "../assets/images/LumiaLogo.svg";
import SearchIcon from "../assets/icons/SearchIcon.svg";
import hamburgerMenu from "../assets/icons/hamburgerMenu.svg";
import User from "../assets/icons/User.svg";
import Cart from "../assets/icons/Cart.svg";
import SideBarMobile from "./SidebarMobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="h-[96px] w-full">
      <div className="px-4 md:px-[60px] xl:px-[120px] pt-2 pb-2 flex items-center justify-between">
        <img className="w-[150px] md:w-[200px]" src={LumiaLogo} alt="logo" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center gap-4 mr-2 font-magnificent">
            <li className="text-transparent bg-clip-text bg-gradient-to-r cursor-pointer from-[#B08B3B] to-[#EAC980] whitespace-nowrap">
              Giới thiệu
            </li>
            <li className="whitespace-nowrap cursor-pointer">Về chúng tôi</li>
            <li className="whitespace-nowrap cursor-pointer">Sản phẩm</li>
            <li className="whitespace-nowrap cursor-pointer">Liên hệ</li>
          </ul>
        </div>

        {/* Icon Menu - Only on Desktop (not on any tablets) */}
        <div className="hidden xl:flex items-center gap-3">
          <div className="w-5 h-5 flex items-center justify-center cursor-pointer">
            <img
              src={SearchIcon}
              alt="search-icon"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-5 h-5 flex items-center justify-center cursor-pointer">
            <img
              src={User}
              alt="user-icon"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-5 h-5 flex items-center justify-center cursor-pointer">
            <img
              src={Cart}
              alt="cart-icon"
              className="w-full h-full object-contain"
            />
          </div>
        {/* Hamburger Menu - On Mobile and ALL Tablets */}
        <div className="flex xl:hidden cursor-pointer">
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
