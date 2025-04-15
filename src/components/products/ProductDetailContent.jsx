import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

export default function ProductDetailContent({ tabContentData }) {
  // Mặc định để tab "product-details" khi mới vào
  const [activeTab, setActiveTab] = useState("product-details");
  const [isMobile, setIsMobile] = useState(false);
  const [contentHeight, setContentHeight] = useState("auto");
  const contentRef = useRef(null);

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

  // Calculate max height of all tab contents on initial render
  useEffect(() => {
    if (!isMobile && tabContentData && tabContentData.length > 0) {
      // Create a hidden div to measure content heights
      const tempDiv = document.createElement("div");
      tempDiv.style.position = "absolute";
      tempDiv.style.visibility = "hidden";
      tempDiv.style.width = contentRef.current
        ? `${contentRef.current.offsetWidth}px`
        : "100%";
      document.body.appendChild(tempDiv);

      // Find the maximum height
      let maxHeight = 0;

      tabContentData.forEach((tab) => {
        tempDiv.innerHTML = tab.content
          .split("\n\n")
          .map((paragraph) => `<p class="mb-4">${paragraph}</p>`)
          .join("");

        const height = tempDiv.offsetHeight;
        maxHeight = Math.max(maxHeight, height);
      });

      // Add some padding to prevent scrollbars
      maxHeight += 20;

      // Set the content height
      setContentHeight(`${maxHeight}px`);

      // Clean up
      document.body.removeChild(tempDiv);
    }
  }, [tabContentData, isMobile]);

  // For mobile: toggle accordion section
  const toggleMobileTab = (tabId) => {
    setActiveTab(activeTab === tabId ? null : tabId);
  };

  // For desktop: set active tab
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // Function to render tab content from plain text
  const renderContent = (content) => {
    return content.split("\n\n").map((paragraph, i) => (
      <p key={i} className="mb-4">
        {paragraph}
      </p>
    ));
  };

  // Get current active tab content
  const getActiveTabContent = () => {
    const activeTabData = tabContentData.find((tab) => tab.id === activeTab);
    return activeTabData ? activeTabData.content : "";
  };

  // If no product or no tab content data
  if (!tabContentData) {
    return <div>Product information not available</div>;
  }

  return (
    <div className="max-w-[1224px] mx-auto bg-white mt-10 pb-10">
      {isMobile ? (
        // Mobile View - Accordion Style
        <div className="px-4">
          {tabContentData.map((tab) => (
            <div
              id={tab.id}
              key={tab.id}
              className="py-4 border-b border-gray-300"
            >
              <button
                onClick={() => toggleMobileTab(tab.id)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3
                  className={`text-lg font-medium font-magnificent ${
                    activeTab === tab.id ? "text-[#D1AE62]" : "text-gray-800"
                  }`}
                >
                  {tab.title}
                </h3>
                {activeTab === tab.id ? (
                  <Minus className="h-5 w-5 text-[#D1AE62]" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-800" />
                )}
              </button>

              {/* Mobile view - Show content when tab is active */}
              {activeTab === tab.id && (
                <div className="mt-4">
                  <div className="text-gray-800 space-y-4">
                    {renderContent(tab.content)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        // Desktop View - Tabs with Single Content Area
        <>
          {/* Tab Navigation */}
          <div className="flex justify-between border-b border-gray-300 font-magnificent">
            {tabContentData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`py-3 px-4 text-sm font-medium text-[20px] transition-colors ${
                  activeTab === tab.id
                    ? "text-[#7F4F29] border-b-2 border-[#D1AE62]"
                    : "text-[#606060] hover:text-[#7F4F29]"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Single Content Area for Desktop with fixed height */}
          <div
            ref={contentRef}
            className="px-4 py-6 overflow-y-auto transition-all duration-300"
            style={{ minHeight: contentHeight }}
          >
            <div className="text-gray-800 space-y-4">
              {renderContent(getActiveTabContent())}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
