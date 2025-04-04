import { useState } from "react";
import React from "react";
import LumiaLogo from "../../assets/images/LumiaLogo.svg";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import hamburgerMenu from "../../assets/icons/hamburgerMenu.svg";
import User from "../../assets/icons/User.svg";
import Cart from "../../assets/icons/Cart.svg";
import SideBarMobile from "../layout/SidebarMobile";
import ProductDropdown from "../products/ProductDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Giới thiệu");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setProductDropdownOpen(false);
    }
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    if (item === "Sản phẩm") {
      setProductDropdownOpen(!productDropdownOpen);
    } else {
      setProductDropdownOpen(false);
    }
  };

  return (
    <>
      <nav className="w-full fixed top-0 z-50 bg-white">
        <div className="px-4 md:px-[60px] xl:px-[120px] pt-2 pb-2 flex items-center justify-between">
          <img className="w-[150px] md:w-[200px]" src={LumiaLogo} alt="logo" />

          {/* Full Menu with Navigation + Icons - On Tablet & Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <ul className="flex items-center gap-4 relative right-[5rem] font-magnificent">
              <li
                className={`cursor-pointer whitespace-nowrap ${
                  activeItem === "Giới thiệu"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#B08B3B] to-[#EAC980]"
                    : ""
                }`}
                onClick={() => handleItemClick("Giới thiệu")}
              >
                Giới thiệu
              </li>
              <li
                className={`cursor-pointer whitespace-nowrap ${
                  activeItem === "Về chúng tôi"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#B08B3B] to-[#EAC980]"
                    : ""
                }`}
                onClick={() => handleItemClick("Về chúng tôi")}
              >
                Về chúng tôi
              </li>
              <li
                className={`cursor-pointer whitespace-nowrap relative ${
                  activeItem === "Sản phẩm"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#B08B3B] to-[#EAC980]"
                    : ""
                }`}
                onClick={() => handleItemClick("Sản phẩm")}
                onMouseEnter={() => {
                  setProductDropdownOpen(true);
                }}
              >
                Sản phẩm
              </li>
              <li
                className={`cursor-pointer whitespace-nowrap ${
                  activeItem === "Liên hệ"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#B08B3B] to-[#EAC980]"
                    : ""
                }`}
                onClick={() => handleItemClick("Liên hệ")}
              >
                Liên hệ
              </li>
            </ul>
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
          </div>

          {/* Mobile Icons with Search and Hamburger Menu */}
          <div className="flex md:hidden items-center gap-3">
            {/* Search Icon for Mobile */}
            <div className="w-5 h-5 flex items-center justify-center cursor-pointer">
              <img
                src={SearchIcon}
                alt="search-icon"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Hamburger Menu */}
            <div className="w-6 h-6 flex items-center justify-center cursor-pointer">
              <img
                src={hamburgerMenu}
                alt="menu"
                className="w-full h-full object-contain"
                onClick={toggleMenu}
              />
            </div>
          </div>
        </div>

        {/* Position the dropdown immediately after the navbar */}
        <div className="relative">
          <ProductDropdown
            isVisible={productDropdownOpen && !isOpen}
            setProductDropdownOpen={setProductDropdownOpen}
          />
        </div>
      </nav>
      <SideBarMobile isOpen={isOpen} />
    </>
  );
};

export default Navbar;
