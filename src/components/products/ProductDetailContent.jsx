import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

export default function ProductDetailContent({ tabContentData }) {
  // State only needed for mobile accordion functionality
  const [activeTab, setActiveTab] = useState(null);
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

  // For mobile: toggle accordion section
  const toggleMobileTab = (tabId) => {
    setActiveTab(activeTab === tabId ? null : tabId);
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
    <div className="max-w-[1224px] mx-auto bg-white mt-10 pb-10">
      {isMobile ? (
        // Mobile View - Accordion Style (unchanged)
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
        // Desktop View - Show all content sections at once
        <div className="px-4">
          {tabContentData.map((tab) => (
            <div
              id={tab.id}
              key={tab.id}
              className="py-6 border-b border-gray-300 last:border-b-0"
            >
              <h3 className="text-lg font-medium font-magnificent text-[#7F4F29] mb-4">
                {tab.title}
              </h3>
              <div className="text-gray-800 space-y-4">
                {renderContent(tab.content)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
