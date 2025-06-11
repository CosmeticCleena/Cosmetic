import React from "react";
import { useState } from "react";
import LeftArrowNav from "../../assets/icons/LeftArrowNav.svg";
import RightArrowNav from "../../assets/icons/RightArrowNav.svg";
import SIDEBAR_DATA from "../../configs/Sidebar.json";
import SidebarBackground from "../common/SidebarBackground";
import { useNavigate } from "react-router-dom";

const SidebarMobile = ({ isOpen, toggleMenu }) => {
  const [currentMenu, setCurrentMenu] = useState([]);
  const navigate = useNavigate();

  const navigateTo = (link) => {
    navigate(link);
    toggleMenu();
    setCurrentMenu([]);
  };

  const handleMenuClick = (menuItem) => {
    setCurrentMenu((prev) => [...prev, menuItem]);
  };

  const handleBackClick = () => {
    setCurrentMenu((prev) => prev.slice(1));
  };

  function getMenuData() {
    return currentMenu.reduce((acc, item) => {
      const subMenu = acc.find((sub) => sub.name === item.name)?.submenu;
      return subMenu ? subMenu : acc;
    }, SIDEBAR_DATA);
  }

  const menuData = currentMenu.length > 0 ? getMenuData() : SIDEBAR_DATA;

  return (
    <SidebarBackground isOpen={isOpen}>
      <div className="w-[90%] mx-auto">
        <div className="flex items-center space-x-3 my-5 px-4">
          {currentMenu.length > 0 && (
            <>
              <img
                src={LeftArrowNav}
                alt="LeftArrow"
                className="cursor-pointer"
                onClick={handleBackClick}
                loading="lazy"
              />
              <h1 className="font-magnificent text-xl text-[#0C0C0C]">
                {currentMenu.map((item) => item.name).join(" › ")}
              </h1>
            </>
          )}
        </div>
        <div className="w-full flex flex-col transition-all duration-300 ease-in-out">
          {menuData.map((item, index) => (
            <div
              className="bg-white border-t-2 flex py-4 px-4 justify-between border-[#DFDFDF] border-solid hover:bg-gray-100"
              key={index}
            >
              <h1
                className={`font-magnificent text-xl ${
                  item.link ? "cursor-pointer" : ""
                }`}
                onClick={item.link ? () => navigateTo(item.link) : undefined}
              >
                {item.name}
              </h1>
              {item.submenu.length > 0 && (
                <img
                  src={RightArrowNav}
                  alt="RightArrow"
                  className="w-6 h-7 object-cover cursor-pointer"
                  onClick={() => handleMenuClick(item)}
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </SidebarBackground>
  );
};

export default SidebarMobile;
