import { useState, useEffect } from "react";
import { Plus, Minus, ChevronRight, ChevronDown } from "lucide-react";

export default function ProductDetailContent({ tabContentData }) {
  // Find the product by ID
  const [activeTab, setActiveTab] = useState("how-to-apply");
  const [expandedSections, setExpandedSections] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Initialize expandedSections based on the tabs in the product
  useEffect(() => {
    if (tabContentData) {
      const initialExpandedState = {};
      tabContentData.forEach((tab) => {
        initialExpandedState[tab.id] = false;
      });
      setExpandedSections(initialExpandedState);
    }
  }, [tabContentData]);

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

    // Đã loại bỏ đoạn code auto-scroll tại đây
  };

  // Function to render tab content from plain text
  const renderContent = (content) => {
    return content.split("\n\n").map((paragraph, i) => (
      <p key={i} className="mb-4">
        {paragraph}
      </p>
    ));
  };

  // If no product or no tab content data
  if (!tabContentData) {
    return <div>Product information not available</div>;
  }

  return (
    <div className="max-w-[1224px] mx-auto bg-white mt-10">
      {/* Top Navigation Bar - Only visible on desktop */}
      {!isMobile && (
        <div className="flex justify-between border-b border-gray-300 font-magnificent">
          {tabContentData.map((tab) => (
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
        {tabContentData.map((tab) => (
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
                  className={`text-lg font-medium font-magnificent ${
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
              <h3 className="text-lg font-medium text-gray-800 mb-1 font-magnificent">
                {tab.title}
              </h3>
            )}

            {/* Content area - Different for mobile and desktop */}
            {isMobile ? (
              // Mobile view - Just show content when expanded, no read more/less
              expandedSections[tab.id] && (
                <div className="mt-2">
                  <div className="text-gray-800 space-y-4">
                    {renderContent(tab.content)}
                  </div>
                </div>
              )
            ) : // Desktop view - Show preview with read more/less
            expandedSections[tab.id] ? (
              <div className="transition-all duration-300 ease-in-out">
                <div className="text-gray-800 space-y-4">
                  {renderContent(tab.content)}
                </div>
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
