import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, FaPinterest, FaFacebook, FaPlus } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { companyEmail, companyLogo, companyPhoneNo } from "../utils/Constants";

gsap.registerPlugin(ScrollTrigger);


const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const isAboutPage = location.pathname === '/about';

  const [isRotated, setIsRotated] = useState(false);

  const toggleRotation = () => {
    setIsRotated(!isRotated);
  };

  const plusRef = useRef(null);
  const footerRef = useRef(null);
  useEffect(() => {
    // Hide the plus div when footer comes into view
    const hidePlusOnFooterView = () => {
      gsap.to(plusRef.current, {
        autoAlpha: 0, // Hides the element by reducing opacity and visibility
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom", // When the top of the footer hits the bottom of the viewport
          end: "top center", // Optionally define when it should be fully hidden
          toggleActions: "play none none reverse", // Reappear when scrolled back up
        },
      });
    };

    hidePlusOnFooterView();

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <footer ref={footerRef} className="footer-container w-full bg-white text-black px-6 md:px-16 pt-6 flex flex-col justify-between">

      {/* bottom fixed buttons */}
      <div className="fixed inset-0 h-fit w-fit text-white mix-blend-difference fix-btn" style={{ zIndex: 3 }}>
        {!isAboutPage && <div
          ref={plusRef}
          className="fix-btn-wrapper fixed bottom-3 md:bottom-5 left-1 md:left-5 z-30"
          onClick={toggleRotation} // Toggle rotation on click
        >
          <div style={{ color: "inherit", textDecoration: "none" }}>
            <div className="text-base md:text-[2rem] font-extrabold cursor-pointer">
              <svg
                className={`w-14 md:w-24 md:h-w-24 filters-btn-svg transition-transform duration-500 ${isRotated ? "rotate-[135deg]" : "rotate-0"
                  }`} // Add rotation classes
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34 26L54 26L54 34L34 34L34 54L26 54L26 34L6 34L6 26L26 26L26 6L34 6L34 26Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>}

        {!isContactPage && <div className="text-xl md:text-3xl fix-btn-wrapper fixed bottom-3 md:bottom-5 right-2 md:right-5 font-bold" style={{ zIndex: 3, transform: "translate(0px, 0px)", scale: 'none', rotate: 'none', translate: 'none' }}>

          <NavLink to='/contact' className="writing-mode-vertical-rl">
            CONTACT
          </NavLink>
        </div>}
      </div>
      {/* bottom fixed buttons */}


      {/* Top Section */}
      <div className="md:flex justify-between items-center">
        {/* Left: Contact Info */}
        <div className="flex md:gap-24 justify-between">
          <div className="uppercase">
            <a
              onClick={() => window.location.href = `mailto:${companyEmail}`}
              className="font-medium underline cursor-pointer">
              {companyEmail}
            </a>
            <p className="font-medium underline">{companyPhoneNo}</p>

          {/* Middle Section: Social Icons */}
            <div className="flex space-x-4 mt-4">
              <FaInstagram className="text-xl cursor-pointer hover:text-gray-600 transition-all duration-300" />
              <FaPinterest className="text-xl cursor-pointer hover:text-gray-600 transition-all duration-300" />
              <FaFacebook className="text-xl cursor-pointer hover:text-gray-600 transition-all duration-300" />
            </div>
          </div>

          {/* Right: Menu */}
          <div className="hidden md:flex font-medium cursor-pointer hover:underline">MENU</div>

          <div className="font-bold flex md:hidden flex-col items-end justify-end text-borderColor text-xs md:text-sm pr-3 md:pr-0">
            <p>WEBSITE BY</p>

            <a
              href="https://cyfletech.com"
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Cyfletech website"
            >
              <strong className="text-black underline text-sm md:text-base uppercase">Cyfletech</strong>
            </a>
          </div>


        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-end mt-10 gap-4 pr-3 md:pr-0">
          {/* Bottom Left: Website By */}
          <div className="hidden md:flex  flex-col items-end justify-end text-borderColor text-xs md:text-sm">
            <p className="font-semibold">WEBSITE BY</p>
            <a
              href="https://cyfletech.com"
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Cyfletech website"
            >
              <strong className="text-black underline text-sm md:text-base uppercase">Cyfletech</strong>
            </a>
          </div>

          <div className="flex md:hidden font-medium cursor-pointer hover:underline">MENU</div>

          {/* Bottom Right: Copyright */}
          <div className="text-right  font-bold text-sm md:text-base">
            <p>©2024 <br /> ALITA MOMENTS</p>
            <p> ALL RIGHTS RESERVED</p>
          </div>
        </div>

      </div>
      {/* alitamoments section*/}
      <div className="">
        {/* <h1 className="font-extrabold text-black"
        style={{
          fontSize: "clamp(2rem, 10vw, 20rem)",
          textAlign: "start",
          whiteSpace: "nowrap",
        }}
        >
          ALITA-MOMENTS
        </h1> */}
        <img
          src={companyLogo}
          alt="Company Logo"
          className="mix-blend-difference w-full h-auto lg:max-w-[80vw] lg:max-h-96"
        />
      </div>


    </footer>
  );
};

export default Footer;