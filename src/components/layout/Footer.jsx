import React from "react";
import bunnyVector from "../../assets/icons/bunnyVector.svg";
import Leaf from "../../assets/icons/Leaf.svg";
import Wheat from "../../assets/icons/Wheat.svg";
import LightBall from "../../assets/icons/LightBall.svg";
import Location from "../../assets/icons/Location.svg";
import Telephone from "../../assets/icons/Telephone.svg";
import indicator from "../../assets/icons/indicator.svg";
import copyright from "../../assets/icons/copyright.svg";

import BGLogo from "../../assets/icons/BGLogo.svg";
import Facebook from "../../assets/icons/_Facebook.svg";
import Instagram from "../../assets/icons/_Instagram.svg";
import Pinterest from "../../assets/icons/_Pinterest.svg";
import Reddit from "../../assets/icons/_Reddit.svg";
import Tiktok from "../../assets/icons/_Tiktok.svg";
import Twitter from "../../assets/icons/_Twitter.svg";

const Footer = () => {
  return (
    <div id="footer" className="w-full mx-auto relative">
      {/* Top section - features */}
      <div className="grid grid-cols-2 p-5 footer-top gap-16 bg-[#F9F6ED] text-[#9E6A30] h-max-[104px] md:flex items-center justify-between md:px-[108px] text-[16px]">
        <div className="flex gap-[8px] items-center">
          <img src={bunnyVector} alt="" />
          <span>No Tests On Animals</span>
        </div>
        <div className="flex gap-[8px] items-center">
          <img src={Leaf} alt="" />
          <span>No animal-derived ingredients</span>
        </div>
        <div className="flex gap-[8px] items-center">
          <img src={Wheat} alt="" />
          <span>No gluten, or gluten byproducts</span>
        </div>
        <div className="flex gap-[8px] items-center">
          <img src={LightBall} alt="" />
          <span>Recyclable packaging</span>
        </div>
      </div>

      {/* Middle section - main footer content */}
      <div className="footer-middle pb-4 md:pb-0 bg-[#6B4128] max-h-[963px] md:h-[415px] text-[#FFFFFF] relative">
        {/* Background Logo Positioned Absolutely */}
        <div className="absolute bottom-0 top-0 right-0 opacity-100 z-0">
          <img
            src={BGLogo}
            alt="Background Logo"
            className="w-[325px] h-auto"
          />
        </div>

        <div className="flex flex-col md:flex-row px-4 md:px-[108px] justify-between pt-16 relative z-10">
          <div className="flex flex-col gap-3 md:gap-4 font-lato md:mx-0 mx-[3em]">
            <h1 className="text-[24px] font-magnificent">How Can We Help?</h1>
            <span>Beautya Branches</span>
            <span>Contact Us</span>
            <span>FAQ</span>
            <span>Our Brand</span>
            <span>Blog</span>
          </div>
          <div className="flex flex-col gap-3 md:gap-4 font-lato md:mx-0 mx-[3em] md:mt-0 mt-5">
            <h1 className="text-[24px] font-magnificent">Products</h1>
            <span>Women Make up</span>
            <span>Women Skincare</span>
            <span>Gifts & Sets</span>
          </div>
          <div className="flex flex-col gap-4 md:w-1/2 w-full font-lato px-3 sm:px-[3em] mt-10 md:mt-0 relative z-10">
            {/* Changed mx-[3em] to px-3 sm:px-[3em] and added w-full for better tablet support */}
            <span className="text-[24px] font-magnificent">
              Keep in touch with Lumia
            </span>
            <span className="text-[16px] w-full sm:w-[90%]">
              {/* Changed w-[90%] to w-full sm:w-[90%] for better mobile/tablet support */}
              Join the Beautya newsletter and be first to hear about news,
              offers and skincare Advice
            </span>
            <div className="flex flex-col md:flex-row gap-2 w-full text-[#CBCBCB] items-center">
              <input
                className="bg-transparent border-b w-full p-3 focus:outline-none text-[24px] block"
                /* Added block to ensure visibility */
                placeholder="Email Address"
                type="text"
              />
              <button className="w-full relative top-2 text-[16px] bg-transparent border-solid border-[2px] md:w-[104px] h-12 border-[#CBCBCB] py-2 px-4">
                Subscribe
              </button>
            </div>

            <div className="flex items-start gap-2 mt-2">
              <input
                className="mt-1 w-4 min-w-4 h-4"
                id="email-check"
                name="email-check"
                type="checkbox"
              />
              <label className="hidden md:block text-sm" htmlFor="email-check">
                By submitting your email, you agree to receive advertising
                emails from Beautya. Please review our Privacy Policy, which
                includes our Financial Incentive Notice for CA residents.
              </label>
              <label className="md:hidden text-sm" htmlFor="email-check">
                I agree to Beautya's Terms and Conditions and Privacy and
                Policy.
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Location and social media section */}
      <div className="bg-[#5C3827] text-white px-4 md:px-[108px] relative z-20">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Location and telephone info */}
          <div className="py-[8px] flex flex-col items-start md:flex-row gap-4 pr-4 md:items-center text-[16px]">
            <div className="flex gap-3 pl-[12px] md:pl-0">
              <img src={Location} alt="Location" />
              <span className="flex-shrink">
                150 Nguyễn Sơn, Long Biên, Hà Nội, Việt Nam
              </span>
            </div>
            <img className="hidden md:flex" src={indicator} alt="indicator" />
            <div className="flex gap-3 pl-[12px] md:pl-0">
              <img src={Telephone} alt="Telephone" />
              <span>Hotline: +84 988 602 888</span>
            </div>
          </div>

          {/* Social media icons - single row on mobile, centered */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-2 gap-y-3 py-3 md:py-2">
            <div className="flex items-center justify-center w-10 h-10">
              <img className="p-2" src={Instagram} alt="Instagram" />
            </div>
            <div className="flex items-center justify-center w-10 h-10">
              <img className="p-2" src={Facebook} alt="Facebook" />
            </div>
            <div className="flex items-center justify-center w-10 h-10">
              <img className="p-2" src={Twitter} alt="Twitter" />
            </div>
            <div className="flex items-center justify-center w-10 h-10">
              <img className="p-2" src={Pinterest} alt="Pinterest" />
            </div>
            <div className="flex items-center justify-center w-10 h-10">
              <img className="p-2" src={Reddit} alt="Reddit" />
            </div>
            <div className="flex items-center justify-center w-10 h-10">
              <img className="p-2" src={Tiktok} alt="Tiktok" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-[#351D13] flex flex-col md:flex-row justify-between text-[#CBCBCB] text-[12px] px-4 md:px-[108px] relative z-20">
        <div className="py-[8px] flex gap-1 items-center justify-center md:justify-start">
          <img className="relative right-1" src={copyright} alt="copyright" />
          <span>2025 Beautya. All Rights Reserved.</span>
        </div>
        <div className="py-[8px] flex gap-4 justify-center md:justify-start flex-wrap">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
