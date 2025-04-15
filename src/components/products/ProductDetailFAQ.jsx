import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function ProductFAQ({ faqItems }) {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="max-w-[1224px] mx-auto">
      <h1 className="font-magnificent text-center text-[24px] mt-24">
        Prestige lA micro-huile serum frequently asked questions
      </h1>
      {faqItems.map((item) => (
        <div key={item.id} className="border-b  border-gray-200">
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full py-4 px-4 flex justify-between items-center text-left focus:outline-none"
          >
            <span
              className={`text-base font-magnificent ${
                openItems[item.id] ? "text-[#9E6A30]" : "text-gray-800"
              }`}
            >
              {item.question}
            </span>
            <span>
              {openItems[item.id] ? (
                <Minus className="h-5 w-5 text-[#D1AE62]" />
              ) : (
                <Plus className="h-5 w-5 text-gray-800" />
              )}
            </span>
          </button>

          {openItems[item.id] && (
            <div className="px-4 pb-4">
              <p className="text-gray-700 font-lato">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default ProductFAQ;
