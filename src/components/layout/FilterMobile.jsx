import React from "react";
import SidebarBackground from "../common/SidebarBackground";
import FILTER_DATA from "../../configs/Filters.json";
import CloseIcon from "../../assets/icons/Close.svg";
import Accordion from "../common/Accordion";

const FilterMobile = ({ isOpen, handleFilterToggle }) => {
  return (
    <SidebarBackground isOpen={isOpen}>
      <div className="flex justify-between w-[90%] items-center mx-auto py-5">
        <p className="font-magnificent text-xl">Filter</p>
        <img
          src={CloseIcon}
          alt="Close"
          className="w-6 h-6"
          onClick={handleFilterToggle}
        />
      </div>
      <div className="w-[90%] mx-auto">
        {FILTER_DATA.map((item, index) => (
          <Accordion
            title={item.title}
            key={index}
            data={item.items}
            handleUpdateFilters={() => {}}
          />
        ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 flex justify-around text-md font-lato w-full border-t border-gray-200 py-5">
        <button className="text-[#D1AE62] py-3 px-6">Clear filters</button>
        <button
          className="text-white bg-[#D1AE62] hover:bg-[#cfaa5b] py-3 px-6"
          onClick={handleFilterToggle}
        >
          Apply filters
        </button>
      </div>
    </SidebarBackground>
  );
};

export default FilterMobile;
