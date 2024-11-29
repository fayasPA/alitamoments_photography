import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaInstagram, FaPinterest, FaFacebook } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    // GSAP animation: scale in when the footer comes into view
    gsap.fromTo(
      ".footer-container",
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-container",
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <footer className="footer-container w-full bg-white text-black px-6 md:px-16 py-10 md:py-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        {/* Contact Section */}
        <div className="text-center md:text-left space-y-2">
          <p className="font-medium">NANCY@BOTTEGA53.COM</p>
          <p className="font-medium">+41 (0) 764 530 053</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <FaInstagram className="text-xl cursor-pointer hover:text-pink-500 transition-all duration-300" />
          <FaPinterest className="text-xl cursor-pointer hover:text-red-500 transition-all duration-300" />
          <FaFacebook className="text-xl cursor-pointer hover:text-blue-500 transition-all duration-300" />
        </div>

        {/* Menu */}
        <div className="text-center md:text-left font-medium cursor-pointer hover:underline">
          MENU
        </div>
      </div>

      {/* Middle Section */}
      <div className="text-center mt-10 md:mt-16 text-6xl md:text-8xl font-bold tracking-wide">
        ALITA MOMENTS
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 mt-10">
        {/* Website By */}
        <div className="text-center md:text-left text-gray-500">
          <p>WEBSITE BY</p>
          <p className="font-medium underline">CYFLETECH</p>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-gray-500">
          <p>©2024 CYFLETECH</p>
          <p>- ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
