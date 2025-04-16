import { useState } from "react";

const Accordion = ({ title, data, handleUpdateFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemTitle = title
    .split(" ")
    .map((word, index) =>
      index === 0
        ? word.charAt(0).toLowerCase() + word.slice(1)
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");

  function handleCheckboxChange(event, name) {
    const { checked } = event.target;
    if (checked) {
      handleUpdateFilters(itemTitle, name, "add");
    } else {
      handleUpdateFilters(itemTitle, name, "remove");
    }
  }
  return (
    <div
      className={`flex flex-col border-y border-gray-200 py-5 px-5 ${
        isOpen ? "space-y-4" : ""
      }`}
    >
      <div
        className="flex justify-between items-center text-[#D1AE62] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-xl font-magnificent">{title}</p>
        <svg
          className={`w-3 h-3 transition-transform duration-300 rotate-180 ${
            isOpen ? "rotate-0" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden
                    ${
                      isOpen
                        ? "max-h-fit opacity-100 pt-1"
                        : "max-h-0 opacity-0 pt-0"
                    }`}
      >
        {data.map((item, index) => (
          <div className="flex items-center mb-4" key={index}>
            <input
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-100 border-gray-300"
              onChange={(e) => handleCheckboxChange(e, item.name)}
            />
            <label className="ms-2 text-md font-medium font-lato text-[#0C0C0C]">
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
