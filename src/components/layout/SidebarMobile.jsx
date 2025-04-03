import React from "react";
import { useState } from "react";
import LeftArrowNav from "../../assets/icons/LeftArrowNav.svg";
import RightArrowNav from "../../assets/icons/RightArrowNav.svg";
import SIDEBAR_DATA from "../../configs/Sidebar.json";
import SidebarBackground from "../common/SidebarBackground";

const SidebarMobile = ({ isOpen }) => {
  const [currentMenu, setCurrentMenu] = useState([]);

  const handleMenuClick = (menu) => {
    setCurrentMenu((prev) => [menu, ...prev]);
  };

  const handleBackClick = () => {
    setCurrentMenu((prev) => prev.slice(1));
  };

  function getMenuData() {
    return currentMenu.reduce((acc, item) => {
      const subMenu = acc.find((sub) => sub.name === item)?.submenu;
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
              />
              <h1 className="font-magnificent text-xl text-[#0C0C0C]">
                {currentMenu.join(" > ")}
              </h1>
            </>
          )}
        </div>
        <div className="w-full flex flex-col transition-all duration-300 ease-in-out">
          {menuData.map((item, index) => (
            <div
              className="bg-white border-t-2 flex py-4 px-4 justify-between border-[#DFDFDF] border-solid hover:bg-gray-100"
              key={index}
              onClick={() =>
                item.submenu?.length > 0 && handleMenuClick(item.name)
              }
            >
              <h1 className="font-magnificent text-xl">{item.name}</h1>
              {item.submenu.length > 0 && (
                <img
                  src={RightArrowNav}
                  alt="RightArrow"
                  className="w-6 h-7 object-cover"
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
