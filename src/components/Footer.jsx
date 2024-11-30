import React from "react";
import { FaInstagram, FaPinterest, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container w-full bg-white text-black px-6 md:px-16 py-6 flex flex-col justify-between">
      {/* Top Section */}
      <div className="md:flex justify-between items-center">
        {/* Left: Contact Info */}
        <div className="flex gap-24">
        <div>
          <p className="font-medium underline">    alitamoments@gmail.com</p>
          <p className="font-medium">813-507-8559</p>

          <div className="flex space-x-4 mt-4">
        <FaInstagram className="text-xl cursor-pointer hover:text-gray-600 transition-all duration-300" />
        <FaPinterest className="text-xl cursor-pointer hover:text-gray-600 transition-all duration-300" />
        <FaFacebook className="text-xl cursor-pointer hover:text-gray-600 transition-all duration-300" />
      </div>
        </div>

        {/* Right: Menu */}
        <div className="font-medium cursor-pointer hover:underline">MENU</div>

              {/* Middle Section: Social Icons */}

      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end mt-10 gap-4">
        {/* Bottom Left: Website By */}
        <div className="text-gray-500 text-sm">
          <p>WEBSITE BY</p>
          <p className="font-medium underline">CYFLETECH</p>
        </div>

        {/* Bottom Right: Copyright */}
        <div className="text-right text-sm">
          <p>©2024 CYFLETECH</p>
          <p> ALL RIGHTS RESERVED</p>
        </div>
      </div>

      </div>
      {/* alitamoments section*/}
      <div className="">
  <h1 className="md:text-[155px]  text-[40px] font-extrabold  text-black">
    ALITA-MOMENTS
  </h1>
</div>


    </footer>
  );
};

export default Footer;