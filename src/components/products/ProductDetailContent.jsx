import { useState, useEffect } from "react";
import { Plus, Minus, ChevronRight, ChevronDown } from "lucide-react";

export default function ProductDetailContent() {
  const [activeTab, setActiveTab] = useState("how-to-apply");
  const [expandedSections, setExpandedSections] = useState({
    "product-details": false,
    "how-to-apply": false,
    ingredient: false,
    "what-makes-it-advance": false,
    "product-specification": false,
  });
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleExpand = (tabId) => {
    // If closing a section, remove active tab state
    if (expandedSections[tabId]) {
      setActiveTab(null);
    } else {
      // If opening a section, set it as active tab
      setActiveTab(tabId);
    }

    // Toggle the expanded state
    setExpandedSections({
      ...expandedSections,
      [tabId]: !expandedSections[tabId],
    });
  };

  const handleTabClick = (tabId) => {
    // If clicking on the active tab, do nothing
    if (activeTab === tabId && expandedSections[tabId]) {
      return;
    }

    // First collapse all sections
    const allCollapsed = Object.keys(expandedSections).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});

    // Then expand only the clicked one
    setExpandedSections({
      ...allCollapsed,
      [tabId]: true,
    });

    // Update active tab
    setActiveTab(tabId);

    // Auto-scroll to the section
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const tabData = [
    {
      id: "product-details",
      title: "Product Details",
      preview:
        "Beautya's 1st Revitalizing Serum That Concentrates The Double Power Of The Rose De Granville...",
      content: (
        <div className="text-gray-800 space-y-4">
          <p>
            Beautya's 1st Revitalizing Serum That Concentrates The Double Power
            Of The Rose De Granville From The Stem To The Flower To Revitalize
            The Skin Twice As Fast (1) And Visibly Rejuvenate.
          </p>
          <p>
            Created After 20 Years Of Research, The 10,000 (2) Micro-Pearls Rich
            In Revitalizing Rose Micro-Nutrients Are Now Completed By The Power
            Of The Rose Sap. The Next-Generation, 92% Natural-Origin (3) Formula
            Of La Micro-Huile De Rose Advanced Serum Is Twice As
            Concentrated,(4) Combining The Nourishing Richness Of An Oil With
            The Deep Penetration Of A Serum.
          </p>
          <p>
            From The First Application Of The Serum, The Skin Appears Plumped.
            In 3 Weeks, 2x Improvement In The Look Or Feel Of Skin
            Elasticity.(5) With Regular Use, Skin Looks And Feels Transformed.
          </p>
          <p>
            As If Replenished From Within, The Skin Seems Denser And Firmer, And
            Wrinkles Appear Noticeably Reduced. As If Lifted, Facial Contours
            Appear Enhanced.
          </p>
          <p>Reveal Your Extraordinary Beauty With Beautya Prestige.</p>
          <div className="mt-6 space-y-2">
            <p>(1) Instrumental Test, 32 Panelists, After 30 Min.</p>
            <p>(2) In A 30 Ml Bottle.</p>
            <p>
              (3) Amount Calculated Based On The ISO 16128-1 And ISO 16128-2
              Standard. Water Percentage Included. The Remaining 8% Of
              Ingredients Contribute To The Formula's Performance, Sensory
              Appeal And Stability.
            </p>
            <p>
              (4) In Rose De Granville Micro-Nutrients Compared To The Previous
              Formula.
            </p>
            <p>
              (5) Clinical Assessment By A Dermatologist On The Evolution Of The
              Product's Performance On The Skin Elasticity, Comparison Between
              The Effect After 7 Days And 28 Days On 34 Women.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "how-to-apply",
      title: "How To Apply",
      preview:
        "Step 1: Dispense Two To Three Pumps Into The Palm Of Your Hand...",
      content: (
        <div className="text-gray-800 space-y-4">
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Step 1:</span> Dispense Two To
              Three Pumps Into The Palm Of Your Hand. Then, Using The Pads Of
              The Fingers, Apply The Serum To The Entire Face From The Centre
              Outwards.
            </p>
            <p>
              <span className="font-semibold">Step 2:</span> Use Gentle Pressure
              To Make The Serum Penetrate Deeply....
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "ingredient",
      title: "Ingredient",
      preview: "AQUA/WATER/EAU, C12-15 ALKYL BENZOATE, GLYCERYL STEARATE SE...",
      content: (
        <div className="text-gray-800">
          <p>
            AQUA/WATER/EAU, C12-15 ALKYL BENZOATE, GLYCERYL STEARATE SE,
            BUTYLENE GLYCOL, GLYCERIN, OLUS OIL/VEGETABLE OIL/HUILE VÉGÉTALE,
            ISONONYL ISONONANOATE, CETYL ALCOHOL, ETHYLHEXYL PALMITATE,
            CYCLOPENTASILOXANE, DIMETHICONE, POLYESTER-7, PHENOXYETHANOL,
            NEOPENTYL GLYCOL DIHEPTANOATE, BUTYROSPERMUM PARKII (SHEA) BUTTER,
            STEARETH-21, AVENA SATIVA (OAT)...
          </p>
        </div>
      ),
    },
    {
      id: "what-makes-it-advance",
      title: "What Makes It Advance",
      preview: "OVER 11 AWARDS WON!",
      content: (
        <div className="text-gray-800 space-y-4">
          <p className="font-semibold">OVER 11 AWARDS WON!</p>
          <p>
            BIONYMPH PEPTIDE: Peptide Blend That Helps To Condition For
            Smoother, Plumper Looking Skin
          </p>
          <p>
            VITAMINS C & E: Work In Harmony To BRIGHTEN The Look Of Your
            Complexion And EVEN The Appearance Of The Skin Tone...
          </p>
        </div>
      ),
    },
    {
      id: "product-specification",
      title: "Product Specification",
      preview: "Product Code-46000701",
      content: (
        <div className="text-gray-800 space-y-2">
          <p>Product Code-46000701</p>
          <p>Key Ingredients-Hyaluronic Acid, Vitamin C</p>
          <p>Beauty Effect-Brightening...</p>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-[1224px] mx-auto bg-white">
      {/* Top Navigation Bar - Only visible on desktop */}
      {!isMobile && (
        <div className="flex justify-between border-b border-gray-300">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`py-3 px-4 text-sm font-medium text-[20px] transition-colors ${
                activeTab === tab.id && expandedSections[tab.id]
                  ? "text-[#7F4F29] border-b-2 border-[#D1AE62]"
                  : "text-[#606060] hover:text-[#7F4F29]"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      )}

      {/* Content sections stacked vertically */}
      <div className="px-4 py-6">
        {tabData.map((tab) => (
          <div
            id={tab.id}
            key={tab.id}
            className="py-4 border-b border-gray-300"
          >
            {/* Mobile view - Accordion style header with plus/minus icons */}
            {isMobile ? (
              <button
                onClick={() => toggleExpand(tab.id)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3
                  className={`text-lg font-medium ${
                    expandedSections[tab.id]
                      ? "text-[#D1AE62]"
                      : "text-gray-800"
                  }`}
                >
                  {tab.title}
                </h3>
                {expandedSections[tab.id] ? (
                  <Minus className="h-5 w-5 text-[#D1AE62]" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-800" />
                )}
              </button>
            ) : (
              // Desktop view - Regular header
              <h3 className="text-lg font-medium text-gray-800 mb-1">
                {tab.title}
              </h3>
            )}

            {/* Content area - Different for mobile and desktop */}
            {isMobile ? (
              // Mobile view - Just show content when expanded, no read more/less
              expandedSections[tab.id] && (
                <div className="mt-2">{tab.content}</div>
              )
            ) : // Desktop view - Show preview with read more/less
            expandedSections[tab.id] ? (
              <div className="transition-all duration-300 ease-in-out">
                {tab.content}
                <button
                  onClick={() => toggleExpand(tab.id)}
                  className="mt-4 flex items-center text-[#D1AE62] gap-2 text-sm font-medium transition-colors"
                >
                  Read Less <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="transition-all duration-300 ease-in-out">
                <p className="text-gray-600 text-sm">{tab.preview}</p>
                <button
                  onClick={() => toggleExpand(tab.id)}
                  className="mt-4 flex items-center text-[#D1AE62] gap-2 text-sm font-medium transition-colors"
                >
                  Read More <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
