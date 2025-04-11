import React from "react";
import closeIcon from "../../assets/icons/close.svg";
import Accordion from "../../components/common/Accordion";
import FILTER_DATA from "../../configs/Filters.json";

const ProductFilter = ({ filters, handleUpdateFilters }) => {
  const isFilterEmpty = Object.values(filters).every(
    (filter) => filter.length === 0
  );
  return (
    <div className="hidden md:block col-span-3 bg-white h-fit">
      <div className="flex flex-col space-y-4 border-y border-gray-200 py-5 px-5">
        <p className="text-md font-magnificent">Applied Filters</p>
        {!isFilterEmpty && (
          <div className="space-y-4 font-lato">
            {Object.entries(filters)?.map(([filterType, value], index) => (
              <div className="flex flex-col space-y-2" key={index}>
                {value?.length > 0 && (
                  <p className="font-lato pl-3">
                    {filterType
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (char) => char.toUpperCase())}
                  </p>
                )}
                <div className="flex flex-wrap gap-3">
                  {value?.map((item, index) => (
                    <div
                      className="flex w-fit space-x-3 border px-3 py-2"
                      key={index}
                    >
                      <p>{item}</p>
                      <img
                        src={closeIcon}
                        alt="close"
                        onClick={() =>
                          handleUpdateFilters(filterType, item, "remove")
                        }
                        className="hover:bg-gray-200"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        <p className="text-[#D1AE62] font-lato text-xl">Clear all filters</p>
      </div>
      {FILTER_DATA.map((item, index) => (
        <Accordion
          title={item.title}
          key={index}
          data={item.items}
          handleUpdateFilters={handleUpdateFilters}
        />
      ))}
    </div>
  );
};

export default ProductFilter;
