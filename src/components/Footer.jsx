import React from "react";
import bunnyVector from "../assets/icons/bunnyVector.svg";
import Leaf from "../assets/icons/Leaf.svg";
import Wheat from "../assets/icons/Wheat.svg";
import LightBall from "../assets/icons/LightBall.svg";
import Location from "../assets/icons/Location.svg";
import Telephone from "../assets/icons/Telephone.svg";
import indicator from "../assets/icons/indicator.svg";
import copyright from "../assets/icons/copyright.svg";

import BGLogo from "../assets/icons/BGLogo.svg";
import socialMediaIcons from "../assets/icons/socialMediaIcons.svg";

const Footer = () => {
  return (
    <div className="w-full mx-auto">
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
      <div className="footer-middle pb-4 md:pb-0 bg-[#6B4128] max-h-[963px] md:h-[415px] text-[#FFFFFF] relative overflow-hidden">
        {/* Changed to overflow-hidden to ensure the background stays contained */}
        <div className="flex flex-col md:flex-row px md:px-[108px] justify-between pt-16 relative z-10">
          {/* Added z-10 to ensure content stays above background */}
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
          <div className="flex flex-col gap-4 md:w-1/2 font-lato mx-[3em] mt-10 md:mt-0 relative z-10">
            {/* Added z-10 to ensure form elements are interactive */}
            <span className="text-[24px] font-magnificent">
              Keep in touch with Lumia
            </span>
            <span className="text-[16px] w-[90%]">
              Join the Beautya newsletter and be first to hear about news,
              offers and skincare Advice
            </span>
            <div className="flex flex-col md:flex-row gap-2 w-full text-[#CBCBCB] items-center">
              <input
                className="bg-transparent border-b w-full p-3 focus:outline-none text-[24px]"
                placeholder="Email Address"
                type="text"
              />
              <button className="w-full relative top-2 text-[16px] bg-transparent border-solid border-[2px] md:w-[104px] h-12 border-[#CBCBCB] py-2 px-4">
                Subscribe
              </button>
            </div>
            <div className="flex gap-2">
              <input
                className="relative bottom-3 w-4"
                id="email-check"
                name="email-check"
                type="checkbox"
              />
              <label className="hidden md:flex" htmlFor="email-check">
                By submitting your email, you agree to receive advertising
                emails from Beautya. Please review our Privacy Policy, which
                includes our Financial Incentive Notice for CA residents.
              </label>
              <label className="md:hidden relative" htmlFor="email-check">
                I agree to Beautya's Terms and Conditions and Privacy and
                Policy.
              </label>
            </div>
          </div>
        </div>

        {/* Background Logo Positioned Absolutely */}
        <div className="absolute bottom-0 top-0 right-0 opacity-100 z-0 pointer-events-none">
          {/* Changed z-index to 0 and added pointer-events-none */}
          <img
            src={BGLogo}
            alt="Background Logo"
            className="w-[325px] h-auto"
          />
        </div>
      </div>
      <div className="flex-col md:flex-row bg-[#5C3827] max-h-[160px] text-white px-[30px] md:px-[108px] flex justify-between">
        <div className="py-[8px] flex flex-col items-start md:flex-row gap-4 pr-4 md:items-center text-[16px] mx-[1em]">
          <div className="flex gap-3">
            <img src={Location} alt="Location" />
            Dr. Richardson, California
          </div>
          <img className="hidden md:flex" src={indicator} alt="indicator" />
          <div className="flex gap-3">
            <img src={Telephone} alt="Telephone" />
            1-802-526-2463
          </div>
        </div>
        <img
          className="icons py-[8px] w-[60%] md:w-[20%] mx-[0.5em]"
          src={socialMediaIcons}
          alt="socialMediaIcons"
        />
      </div>
      <div className="bg-[#351D13] max-h-[85px] px-[108px] flex md:flex-row flex-col justify-between text-[#CBCBCB] text-[12px]">
        <div className="py-[8px] flex gap-1 items-center">
          <img className="relative right-1" src={copyright} alt="copyright" />
          <span>2025 Beautya. All Rights Reserved.</span>
        </div>
        <div className="py-[8px] flex gap-4">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
