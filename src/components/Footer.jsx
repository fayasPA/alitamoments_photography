import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, FaPinterest, FaFacebook, FaPlus, FaWhatsapp } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { companyEmail, companyInsta, companyLogo, companyLogoGold, companyPhoneNo } from "../utils/Constants";
import { FiMail, FiPhone } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);


const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const isAboutPage = location.pathname === '/about';
  const buttonsRef = useRef(null);

  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    gsap.set(buttonsRef.current, {
      y: "100%",
      opacity: 0,
      pointerEvents: "none",
    });
  }, [])
  
  const toggleRotation = () => {
    setIsRotated((prev) => !prev);

    if (!isRotated) {
      // Slide buttons up
      gsap.to(buttonsRef.current, {
        duration: 0.5,
        y: "0%",
        opacity: 1,
        pointerEvents: "auto",
        ease: "power3.out",
      });
    } else {
      // Slide buttons down
      gsap.to(buttonsRef.current, {
        duration: 0.5,
        y: "100%",
        opacity: 0,
        pointerEvents: "none",
        ease: "power3.in",
      });
    }
  };

  const plusRef = useRef(null);
  return (
    <footer className="footer-container w-full bg-white text-black px-6 md:px-16 pt-6 flex flex-col justify-between lowercase">

      {/* bottom fixed buttons */}
      <div className="fixed bottom-3 md:bottom-5 left-2 md:left-5 h-fit w-fit text-white fix-btn mix-blend-difference" style={{ zIndex: 3 }}>


        {!isContactPage && <div className="text-xl md:text-3xl fix-btn-wrapper font-bold" style={{ zIndex: 3, transform: "translate(0px, 0px)", scale: 'none', rotate: 'none', translate: 'none' }}>

          <NavLink to='/contact' className="writing-mode-vertical-rl uppercase rotate-180">
            CONTACT
          </NavLink>
        </div>}
      </div>


      <div className="fixed bottom-3 md:bottom-5 right-1 md:right-5 h-fit w-fit text-white fix-btn mix-blend-difference" style={{ zIndex: 3 }}>
        <div className="">
          <div className="overflow-hidden">
          <div className="flex flex-col items-center bg-black gap-1" ref={buttonsRef}>
            {/* <button type='button' name='phone-btn' className=" p-2 rounded-full border border-white" onClick={() => window.location.href = `tel:+918590081819`}>
              <FiPhone className="text-xl md:text-2xl" />
            </button> */}
            <button type='button' name='whatsapp-btn' className=" p-2 rounded-full  border border-white" onClick={() => window.open(`https://wa.me/91${companyPhoneNo}`, "_blank")}>
              <FaWhatsapp className=" text-xl md:text-2xl" />
            </button>
            <button type='button' name='instagram-btn' className=" p-3 rounded-full border border-white"       onClick={() => window.open(companyInsta, "_blank")}>
              <FaInstagram className="text-xl md:text-2xl" />
            </button>
            <button type='button' name='mail-btn' className=" p-4 rounded-full border border-white" onClick={() => window.open(`mailto:${companyEmail}`, "_blank")}>
              <FiMail className="text-2xl md:text-3xl" />
            </button>
          </div>
          </div>
          <div
            ref={plusRef}
            className="fix-btn-wrapper z-30"
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
          </div>
        </div>
      </div>


      {/* bottom fixed buttons */}


      {/* Top Section */}
      <div className="md:flex justify-between items-center">
        {/* Left: Contact Info */}
        <div className="flex md:gap-24 justify-between">
          <div className="">
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

          <div className="font-bold flex md:hidden flex-col items-end justify-end text-borderColor text-xs md:text-sm pr-3 md:pr-0">
            <p>WEBSITE BY</p>

            <a
              href="https://cyfletech.com"
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Cyfletech website"
            >
              <strong className="text-black underline text-sm md:text-base ">Cyfletech</strong>
            </a>
          </div>


        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-end mt-10 gap-4 pr-3 md:pr-0 pb-5 md:pb-0">
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
              <strong className="text-black underline text-sm md:text-base ">Cyfletech</strong>
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
      <div className="flex justify-center">
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
          src={companyLogoGold}
          alt="Company Logo"
          className="w-36 h-auto lg:w-full lg:max-w-[25vw] lg:max-h-96"
        />
      </div>


    </footer>
  );
};

export default Footer;