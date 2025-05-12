import { useState } from "react";
import React from "react";
import LumiaLogo from "../../assets/images/LumiaLogo.svg";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import hamburgerMenu from "../../assets/icons/hamburgerMenu.svg";
import SideBarMobile from "../layout/SidebarMobile";
import ProductDropdown from "../products/ProductDropdown";
import SearchMobile from "./SearchMobile";
import SearchDesktop from "./SearchDesktop";
import { Link } from "react-scroll";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  // Không thay đổi phần này
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Trang Chủ");
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setProductDropdownOpen(false);
    }
    if (isSearchOpen) {
      setIsSearchOpen(false);
    }
  };
  // Không thay đổi phần này
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleItemClick = (item) => {
    console.log(item);
    setActiveItem(item);
    if (item === "Sản phẩm") {
      navigate("/products");
    } else if (item === "Trang Chủ") {
      navigate("/");
    } else if (item === "Đại Lý") {
      navigate("/agency");
    } else {
      setProductDropdownOpen(false);
    }
  };

  const toggleDesktopSearch = () => {
    setIsSearchOpen(false);

    if (setIsDesktopSearchOpen) setProductDropdownOpen(false);
    setIsDesktopSearchOpen(!isDesktopSearchOpen);
  };

  return (
    <>
      <nav className="w-full sticky top-0 z-50 bg-white">
        <div className="px-4 md:px-[60px] xl:px-[120px] pt-2 pb-2 flex items-center justify-between">
          <img
            onClick={() => {
              handleItemClick("Trang Chủ");
              navigate("/home");
            }}
            className="w-[150px] md:w-[200px] cursor-pointer"
            src={LumiaLogo}
            alt="logo"
          />

          {/* Full Menu with Navigation + Icons - On Tablet & Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <ul className="flex items-center gap-4 relative right-[5rem] font-magnificent">
              <li
                className={`cursor-pointer whitespace-nowrap ${
                  activeItem === "Trang Chủ"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#B08B3B] to-[#EAC980]"
                    : ""
                }`}
                onClick={() => handleItemClick("Trang Chủ")}
              >
                Trang Chủ
              </li>
              <NavLink
                className={`cursor-pointer whitespace-nowrap ${
                  activeItem === "Tổng Quan Thương Hiệu"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#B08B3B] to-[#EAC980]"
                    : ""
                }`}
                onClick={() => handleItemClick("Tổng Quan Thương Hiệu")}
                to={"/home#brand-overview"}
              >
                Tổng Quan Thương Hiệu
              </NavLink>
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
                  activeItem === "Đại Lý"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#B08B3B] to-[#EAC980]"
                    : ""
                }`}
                onClick={() => handleItemClick("Đại Lý")}
              >
                Đại Lý
              </li>
              <NavLink
                className={`cursor-pointer whitespace-nowrap ${
                  activeItem === "Liên hệ"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#B08B3B] to-[#EAC980]"
                    : ""
                }`}
                onClick={() => handleItemClick("Liên hệ")}
                to={"/home#footer"}
              >
                Liên hệ
              </NavLink>
            </ul>
            {/* Toogle Search Desktop */}
            <div
              className="w-5 h-5 flex items-center justify-center cursor-pointer"
              onClick={toggleDesktopSearch}
            >
              <img
                src={SearchIcon}
                alt="search-icon"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Mobile Icons with Search and Hamburger Menu */}
          <div className="flex md:hidden items-center gap-3">
            {/* Search Icon for Mobile */}
            <div
              className="w-5 h-5 flex items-center justify-center cursor-pointer"
              onClick={toggleSearch}
            >
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

        {/* Position the search dropdown similar to product dropdown */}
        <div className="relative">
          <SearchDesktop
            isDesktopSearchOpen={isDesktopSearchOpen}
            setIsDesktopSearchOpen={setIsDesktopSearchOpen}
          />
        </div>
      </nav>
      {/*Không thay đổi phần này*/}
      <SideBarMobile isOpen={isOpen} toggleMenu={toggleMenu} />
      {/*Không thay đổi phần này*/}
      <SearchMobile isOpen={isSearchOpen} />
    </>
  );
};

export default Navbar;
