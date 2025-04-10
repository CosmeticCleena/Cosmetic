import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function ProductFAQ() {
  const [openItems, setOpenItems] = useState({
    "skin-types": true, // Second item is open by default to match the image
  });

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqItems = [
    {
      id: "best-way",
      question: "What is the best way to use this product?",
      answer:
        "Apply 2-3 pumps of serum onto cleansed skin. Gently pat the serum into your face and neck using upward motions. Allow to fully absorb before applying moisturizer. For best results, use morning and evening as part of your skincare routine.",
    },
    {
      id: "skin-types",
      question: "Can this product be used on all skin types?",
      answer:
        "Our Product Is Suitable For Most Skin Types, Including Normal, Oily, Dry, And Combination Skin. However, If You Have Sensitive Skin Or A Skin Condition, We Recommend Performing A Patch Test Before Using The Product All Over Your Face. Apply A Small Amount Of The Product To The Inside Of Your Elbow And Wait 24 Hours To Make Sure You Do Not Have An Allergic Reaction Or Irritation. If You Experience Any Discomfort, Discontinue Use Of The Product Immediately.",
    },
    {
      id: "how-often",
      question: "How often should I use this product?",
      answer:
        "For optimal results, we recommend using this product twice daily - once in the morning and once in the evening. Apply after cleansing and toning, but before moisturizing. If you have sensitive skin, you may want to start with once daily application and gradually increase as your skin adjusts.",
    },
    {
      id: "pregnancy",
      question: "Can this product be used during pregnancy?",
      answer:
        "While our product contains ingredients that are generally considered safe, we always recommend consulting with your healthcare provider before using any skincare products during pregnancy or while breastfeeding, as individual circumstances may vary.",
    },
    {
      id: "how-often-2",
      question: "How often should I use this product?",
      answer:
        "For optimal results, we recommend using this product twice daily - once in the morning and once in the evening. Apply after cleansing and toning, but before moisturizing. If you have sensitive skin, you may want to start with once daily application and gradually increase as your skin adjusts.",
    },
    {
      id: "storage",
      question: "How should I store this product?",
      answer:
        "Store in a cool, dry place away from direct sunlight. Keep the container tightly closed when not in use. Do not expose to extreme temperatures. For maximum potency, we recommend using the product within 12 months after opening.",
    },
    {
      id: "results",
      question: "How long will it take to see results from using this product?",
      answer:
        "Most users notice initial improvements in skin texture and hydration within 1-2 weeks of consistent use. More significant results, such as reduction in fine lines and improved firmness, typically become visible after 4-6 weeks of regular application. Individual results may vary depending on skin type and condition.",
    },
    {
      id: "conjunction",
      question:
        "Can this product be used in conjunction with other skincare products?",
      answer:
        "Yes, our product is formulated to work well with most skincare routines. It can be layered with other products, but we recommend applying from thinnest to thickest consistency. Allow each product to fully absorb before applying the next. If using with active ingredients like retinol or vitamin C, you may want to alternate usage times to prevent potential irritation.",
    },
  ];

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
