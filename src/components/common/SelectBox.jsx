import React from "react";

const SelectBox = ({ title, data }) => {
  return (
    <div className="flex text-sm md:text-md items-center border border-gray-300 shadow-sm pl-1 md:pl-5 py-2 bg-white group">
      <span className="mr-2 text-gray-700">{title}:</span>
      <div className="relative inline-block">
        <select
          className="appearance-none bg-transparent border-none font-semibold text-gray-800 focus:outline-none cursor-pointer pr-3 w-auto transition duration-150 ease-in-out hover:font-bold"
          defaultValue={data[0]?.value}
        >
          {data.map((item, index) => (
            <option key={index} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-6 md:right-1 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 fill-current text-gray-700 transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectBox;
