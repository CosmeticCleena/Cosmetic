import { useEffect, useState } from "react";
import React from "react";
import LumiaLogo from "../../assets/images/LumiaLogo.svg";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import hamburgerMenu from "../../assets/icons/hamburgerMenu.svg";
import SideBarMobile from "../layout/SidebarMobile";
import ProductDropdown from "../products/ProductDropdown";
import SearchMobile from "./SearchMobile";
import SearchDesktop from "./SearchDesktop";
import { Link } from "react-scroll";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

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

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/products")) {
      setActiveItem("Sản phẩm");
    }
  }, [location]);

  return (
    <>
      <nav className="w-full sticky top-0 z-50 bg-white shadow-sm">
        <div className="px-4 sm:px-6 md:px-[60px] xl:px-[120px]  flex items-center justify-between">
          {/* Logo Container - Optimized for better display */}
          <div 
            onClick={() => {
              handleItemClick("Trang Chủ");
              navigate("/home");
            }}
            className="flex-shrink-0 cursor-pointer transition-transform hover:scale-105 duration-200"
          >
            <img
              className="h-10 sm:h-20 md:h-22 lg:h-24 w-auto max-w-[120px] sm:max-w-[140px] md:max-w-[180px] lg:max-w-[200px] object-contain"
              src={LumiaLogo}
              alt="Lumia Logo"
              loading="lazy"
            />
          </div>

          {/* Full Menu with Navigation + Icons - On Tablet & Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <ul className="flex items-center gap-4 lg:gap-6 font-magnificent text-sm lg:text-base">
              <li
                className={`cursor-pointer whitespace-nowrap transition-all duration-200 hover:scale-105 ${
                  activeItem === "Trang Chủ"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#B08B3B] to-[#EAC980] font-semibold"
                    : "hover:text-[#B08B3B]"
                }`}
                onClick={() => handleItemClick("Trang Chủ")}
              >
                Trang Chủ
              </li>
              <NavLink
                className={`cursor-pointer whitespace-nowrap transition-all duration-200 hover:scale-105 ${
                  activeItem === "Tổng Quan Thương Hiệu"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#B08B3B] to-[#EAC980] font-semibold"
                    : "hover:text-[#B08B3B]"
                }`}
                onClick={() => handleItemClick("Tổng Quan Thương Hiệu")}
                to={"/home#brand-overview"}
              >
                Tổng Quan Thương Hiệu
              </NavLink>
              <li
                className={`cursor-pointer whitespace-nowrap relative transition-all duration-200 hover:scale-105 ${
                  activeItem === "Sản phẩm"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#B08B3B] to-[#EAC980] font-semibold"
                    : "hover:text-[#B08B3B]"
                }`}
                onClick={() => handleItemClick("Sản phẩm")}
                onMouseEnter={() => {
                  setProductDropdownOpen(true);
                }}
              >
                Sản phẩm
              </li>
              <li
                className={`cursor-pointer whitespace-nowrap transition-all duration-200 hover:scale-105 ${
                  activeItem === "Đại Lý"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#B08B3B] to-[#EAC980] font-semibold"
                    : "hover:text-[#B08B3B]"
                }`}
                onClick={() => handleItemClick("Đại Lý")}
              >
                Đại Lý
              </li>
              <NavLink
                className={`cursor-pointer whitespace-nowrap transition-all duration-200 hover:scale-105 ${
                  activeItem === "Liên hệ"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#B08B3B] to-[#EAC980] font-semibold"
                    : "hover:text-[#B08B3B]"
                }`}
                onClick={() => handleItemClick("Liên hệ")}
                to={"/home#footer"}
              >
                Liên hệ
              </NavLink>
            </ul>
            
            {/* Toggle Search Desktop */}
            <div
              className="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center cursor-pointer transition-transform hover:scale-110 duration-200 p-1"
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
          <div className="flex md:hidden items-center gap-4">
            {/* Search Icon for Mobile */}
            <div
              className="w-5 h-5 flex items-center justify-center cursor-pointer transition-transform hover:scale-110 duration-200 p-1"
              onClick={toggleSearch}
            >
              <img
                src={SearchIcon}
                alt="search-icon"
                className="w-full h-full object-contain"
              />
            </div>

            
            <div className="w-6 h-6 flex items-center justify-center cursor-pointer transition-transform hover:scale-110 duration-200">
              <img
                src={hamburgerMenu}
                alt="menu"
                className="w-full h-full object-contain"
                onClick={toggleMenu}
              />
            </div>
          </div>
        </div>

        
        <div className="relative">
          <ProductDropdown
            isVisible={productDropdownOpen && !isOpen}
            setProductDropdownOpen={setProductDropdownOpen}
          />
        </div>

        <div className="relative">
          <SearchDesktop
            isDesktopSearchOpen={isDesktopSearchOpen}
            setIsDesktopSearchOpen={setIsDesktopSearchOpen}
          />
        </div>
      </nav>
      
      
      <SideBarMobile isOpen={isOpen} toggleMenu={toggleMenu} />
      
      <SearchMobile isOpen={isSearchOpen} />
    </>
  );
};

export default Navbar;