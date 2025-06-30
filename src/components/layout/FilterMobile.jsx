import React from "react";
import SidebarBackground from "../common/SidebarBackground";
import FILTER_DATA from "../../configs/Filters.json";
import CloseIcon from "../../assets/icons/close.svg";
import Accordion from "../common/Accordion";

const FilterMobile = ({ isOpen, handleFilterToggle }) => {
  return (
    <SidebarBackground isOpen={isOpen}>
      <div className="flex flex-col h-full bg-white">
        {/* Header */}
        <div className="flex justify-between w-[90%] items-center mx-auto py-5 border-b border-gray-200">
          <p className="font-svn-avo text-xl font-medium">Bộ lọc</p>
          <img
            src={CloseIcon}
            alt="Đóng"
            className="w-6 h-6 cursor-pointer"
            loading="lazy"
            onClick={handleFilterToggle}
          />
        </div>

        {/* Filter Content */}
        <div className="flex-1 overflow-y-auto pb-20">
          <div className="w-[90%] mx-auto py-4">
            {FILTER_DATA.map((item, index) => (
              <div key={index} className="mb-4">
                <Accordion
                  title={item.title}
                  data={item.items}
                  handleUpdateFilters={() => {}}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4">
          <div className="flex gap-4 w-full max-w-md mx-auto">
            <button className="flex-1 text-[#D1AE62] border border-[#D1AE62] py-3 px-4 rounded font-svn-avo font-medium hover:bg-[#D1AE62] hover:text-white transition-colors duration-200">
              Xóa bộ lọc
            </button>
            <button
              className="flex-1 text-white bg-[#D1AE62] hover:bg-[#cfaa5b] py-3 px-4 rounded font-svn-avo font-medium transition-colors duration-200"
              onClick={handleFilterToggle}
            >
              Áp dụng bộ lọc
            </button>
          </div>
        </div>
      </div>
    </SidebarBackground>
  );
};

export default FilterMobile;