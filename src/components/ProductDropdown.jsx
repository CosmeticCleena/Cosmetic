import React from "react";
import ProductDropdownImage from "../assets/images/ProductDropdown.svg";
const ProductDropdown = ({ isVisible, setProductDropdownOpen }) => {
  if (!isVisible) return null;

  return (
    <>
      {/* Overlay that darkens only the content below the navbar */}
      <div className="hidden md:flex fixed inset-0 top-[64px] md:top-[350px] bg-black bg-opacity-70 z-40" />

      {/* Dropdown menu - positioned to be visible above the darkened overlay */}
      <div
        onMouseLeave={() => {
          console.log("leave");
          setProductDropdownOpen(false);
        }}
        className="hidden md:flex absolute left-0 right-0  bg-white z-50 shadow-lg"
      >
        <div className="container mx-auto px-4 md:px-[60px] xl:px-[120px] py-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Now section */}
            <div className="text-[14px] font-magnificent">
              <h3 className="font-magnificent text-[16px] mb-4">Now</h3>
              <ul className="space-y-2">
                <li className="cursor-pointer">Best Sellers</li>
                <li className="cursor-pointer">Travel Size</li>
                <li className="cursor-pointer">Professional Treatments</li>
                <li className="cursor-pointer">Daily Defense</li>
                <li className="cursor-pointer">Virtual Skincare Analysis</li>
              </ul>
            </div>

            {/* By Category section */}
            <div className="text-[14px]">
              <h3 className="font-magnificent text-[16px] mb-4 ">
                By Category
              </h3>
              <ul className="space-y-2">
                <li className=" cursor-pointer">Cleansers</li>
                <li className=" cursor-pointer">Exfoliators</li>
                <li className=" cursor-pointer">Toners</li>
                <li className=" cursor-pointer">Retinols</li>
                <li className="cursor-pointer">Peels And Masques</li>
                <li className=" cursor-pointer">Moisturizer</li>
                <li className=" cursor-pointer">Night Cream</li>
                <li className=" cursor-pointer">Facial Oil</li>
                <li className=" cursor-pointer">Sunscreen</li>
                <li className=" cursor-pointer">Eye Care</li>
              </ul>
            </div>

            {/* By Skin Condition section */}
            <div className="text-[14px]">
              <h3 className="font-magnificent text-[16px] mb-4 ">
                By Skin Condition
              </h3>
              <ul className="space-y-2">
                <li className=" cursor-pointer">Brightening</li>
                <li className=" cursor-pointer">Hydration</li>
                <li className=" cursor-pointer">Acne</li>
                <li className=" cursor-pointer">Anti-Ageing</li>
                <li className=" cursor-pointer">Redness</li>
                <li className=" cursor-pointer">Sensitive Skin</li>
                <li className=" cursor-pointer">Sun Protection</li>
              </ul>
            </div>

            {/* Collection section */}
            <div className="text-[14px]">
              <h3 className="font-magnificent text-[16px] mb-4">Collection</h3>
              <ul className="space-y-2">
                <li className=" cursor-pointer">Beautya Cleansing</li>
                <li className=" cursor-pointer">Beautya Prestige</li>
                <li className=" cursor-pointer">Beautya Light -In -White</li>
                <li className=" cursor-pointer">Capture Totale</li>
                <li className=" cursor-pointer">Capture Youth</li>
                <li className=" cursor-pointer">Capture Dreamskin</li>
                <li className=" cursor-pointer">One Essential</li>
                <li className=" cursor-pointer">Professional Solution</li>
                <li className=" cursor-pointer">Beautya Hydra Life</li>
              </ul>
            </div>
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
