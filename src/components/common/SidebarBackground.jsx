import React from "react";

const SidebarBackground = ({ isOpen, children }) => {
  return (
    <aside
      className={`fixed w-screen h-full bg-[#FAF9F5] z-40 pt-20 md:pt-40 overflow-auto transition-all duration-300 ease-in-out ${
        isOpen
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      {children}
    </aside>
  );
};

export default SidebarBackground;
