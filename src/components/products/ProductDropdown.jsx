import React, { useState, useRef } from "react";
import RightArrowNav from "../../assets/icons/RightArrowNav.svg";
import PRODUCT_DROPDOWN_DATA from "../../configs/ProductDropdown.json";
import ProductDropdownImage from "../../assets/images/ProductDropdown.svg";

const ProductDropdown = ({ isVisible, setProductDropdownOpen }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const submenuRefs = useRef({});
  const timeoutRef = useRef(null);

  // Handle mouse enter on submenu item with nested menu
  const handleItemMouseEnter = (uniqueId) => {
    // Clear any existing timeout to prevent early closing
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHoveredItem(uniqueId);
  };

  // Handle mouse leave from main item
  const handleItemMouseLeave = (e, uniqueId) => {
    // Check if the mouse is moving to the nested submenu
    const submenuRef = submenuRefs.current[uniqueId];

    // Don't close immediately, use a small delay
    timeoutRef.current = setTimeout(() => {
      // Only close if we're not moving to the submenu
      if (
        !submenuRef ||
        (!submenuRef.contains(document.activeElement) && !e.relatedTarget) ||
        (submenuRef && !submenuRef.contains(e.relatedTarget))
      ) {
        setHoveredItem(null);
      }
    }, 100); // Small delay gives user time to move to submenu
  };

  // Handle mouse enter on submenu
  const handleSubmenuMouseEnter = (uniqueId) => {
    // Clear any closing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHoveredItem(uniqueId);
  };

  // Handle mouse leave from submenu
  const handleSubmenuMouseLeave = () => {
    // Use timeout to give user time to move between elements
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 100);
  };

  // Clean up timeouts when component unmounts
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay that darkens only the content below the navbar */}
      <div className="hidden md:flex fixed inset-0 top-[64px] md:top-[350px] bg-black bg-opacity-70 z-40" />

      {/* Dropdown menu - positioned to be visible above the darkened overlay */}
      <div
        onMouseLeave={() => {
          // Use timeout to prevent immediate closing
          timeoutRef.current = setTimeout(() => {
            setProductDropdownOpen(false);
            setHoveredItem(null);
          }, 100);
        }}
        onMouseEnter={() => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
        }}
        className="hidden md:flex absolute left-0 right-0 bg-white z-50 shadow-lg"
      >
        <div className="container mx-auto px-4 md:px-[60px] xl:px-[120px] py-6">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {/* Map through main menu items */}
            {PRODUCT_DROPDOWN_DATA.map((item, index) => {
              const hasSubMenu = item.submenu && item.submenu.length > 0;

              return (
                <div key={index} className="text-[14px] font-magnificent">
                  <h3 className="font-magnificent text-[16px] mb-4">
                    {item.name}
                  </h3>

                  {/* Always show first-level submenu items */}
                  {hasSubMenu && (
                    <ul className="space-y-2">
                      {item.submenu.map((subItem, subIndex) => {
                        const subItemUniqueId = `main-${item.name}-sub-${subIndex}`;
                        const hasNestedSubmenu =
                          subItem.hasNestedMenu &&
                          subItem.submenu &&
                          subItem.submenu.length > 0;

                        return (
                          <li key={subIndex} className="relative">
                            <div
                              className="cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#B08B3B] hover:to-[#EAC980] flex items-center"
                              onMouseEnter={() =>
                                handleItemMouseEnter(subItemUniqueId)
                              }
                              onMouseLeave={(e) =>
                                handleItemMouseLeave(e, subItemUniqueId)
                              }
                            >
                              {subItem.name}
                              {hasNestedSubmenu && (
                                <img
                                  src={RightArrowNav}
                                  alt=">"
                                  className="ml-1 w-5 h-5 inline-block transform rotate-90" // Pointing down
                                />
                              )}
                            </div>

                            {/* Show nested submenu BELOW instead of to the right */}
                            {hoveredItem === subItemUniqueId &&
                              hasNestedSubmenu && (
                                <div
                                  ref={(el) =>
                                    (submenuRefs.current[subItemUniqueId] = el)
                                  }
                                  className="absolute left-0 top-full bg-white shadow-md p-2 z-50 min-w-[200px]"
                                  style={{ marginTop: "5px" }}
                                  onMouseEnter={() =>
                                    handleSubmenuMouseEnter(subItemUniqueId)
                                  }
                                  onMouseLeave={handleSubmenuMouseLeave}
                                >
                                  {subItem.submenu.map(
                                    (nestedItem, nestedIndex) => (
                                      <div
                                        key={nestedIndex}
                                        className="p-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                                      >
                                        {nestedItem.name}
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}

            {/* Product image and description */}
            <div className="max-w-[288px] text-[14px] space-y-2">
              <img className="w-full" src={ProductDropdownImage} alt="" />
              <p className="font-semibold">
                capture totale super potent rich cream
              </p>
              <p className="text-[12px]">
                Global Age-Defying Rich Cream - Intense Nourishment &
                Revitalization
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDropdown;
