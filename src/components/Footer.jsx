// src/components/Footer.js
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { companyAddress, companyAddressFooter, companyEmail, companyInsta, companyLogo, companyLogoGold, companyPhoneNo, companyPhoneNoInt, navLists } from "../utils/Constants";
import { NavLink, useLocation } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const Footer = () => {

  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const buttonsRef = useRef(null);
  const plusRef = useRef(null);


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


  const footerRef = useRef(null);

  useEffect(() => {
    // Simple GSAP animation on load
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  // disappear contact
  const footerDivRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // The footer is now visible, hide the contact link
          document.querySelector('.contact-fixed-btn').classList.add('hidden');
        } else {
          // The footer is not fully in view, show the contact link
          document.querySelector('.contact-fixed-btn').classList.remove('hidden');
        }
      },
      {
        rootMargin: '-50px', // Adjust the margin to fine-tune when the intersection happens
      }
    );

    if (footerDivRef.current) {
      observer.observe(footerDivRef.current);
    }

    return () => {
      if (footerDivRef.current) {
        observer.unobserve(footerDivRef.current);
      }
    };
  }, []);
  return (
    <footer ref={footerDivRef}>
      <div className="fixed bottom-3 md:bottom-5 left-2 md:left-5 h-fit w-fit text-white fix-btn mix-blend-difference" style={{ zIndex: 3 }}>


        {!isContactPage && <div className="text-xl md:text-3xl fix-btn-wrapper contact-fixed-btn font-bold" style={{ zIndex: 3, transform: "translate(0px, 0px)", scale: 'none', rotate: 'none', translate: 'none' }}>

          <NavLink to='/contact' className="[writing-mode:vertical-lr] uppercase rotate-180">
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
              <button type='button' name='instagram-btn' className=" p-3 rounded-full border border-white" onClick={() => window.open(companyInsta, "_blank")}>
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

      <div
        ref={footerRef}
        className=" text-black px-8 flex flex-col justify-around md:justify-between min-h-screen"
      >
        <div className="flex flex-col md:flex-row w-full justify-between mt-20 md:mt-0">
          <div className="order-2 md:order-1 md:pt-28 font-poiret font-bold text-lg md:text-2xl">
            <div className="flex justify-center md:justify-start items-center gap-1">
              <IoCallOutline className="text-xs md:text-2xl" />
              {companyPhoneNoInt}
            </div>
            <div className="flex justify-center md:justify-start items-center gap-1">
              <CiMail className="text-xs md:text-2xl" />
              {companyEmail}
            </div>
          </div>
          <div className="order-1 md:pt-4 whitespace-break-spaces font-poiret font-bold text-lg md:text-2xl text-center md:text-right md:mr-10">
            {companyAddressFooter}
          </div>
        </div>
        <div className="flex w-full flex-col md:flex-row">
          <div className="">
            <nav className="text-4xl md:text-8xl uppercase font-bold">
              {navLists.map((item) => (
                <a href="#" className="block ">
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="mt-4 md:mt-8">
              <div className="flex justify-start items-center space-x-5">
                <a href="#" className="text-gray-500 hover:text-black ">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-8 md:w-10 md:h-8 h-10">
                    <path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-black ">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-8 md:w-10 md:h-8 h-10">
                    <path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-black ">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-8 md:w-10 md:h-8 h-10">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-black ">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-8 md:w-10 md:h-8 h-10">
                    <path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.831.09-.648.349-1.088.635-1.336-2.218-.252-4.557-1.112-4.557-4.938 0-1.09.388-1.984 1.025-2.684-.102-.252-.448-1.278.1-2.661 0 0 .844-.269 2.765 1.025.8-.223 1.656-.335 2.518-.34.865.005 1.72.12 2.52.34 1.924-1.294 2.764-1.025 2.764-1.025.55 1.384.204 2.409.1 2.66.64.699 1.027 1.594 1.027 2.684 0 3.838-2.344 4.688-4.568 4.939.358.31.68.926.68 1.867 0 1.353-.013 2.443-.013 2.77 0 .272.18.581.687.482C19.134 20.197 22 16.442 22 12.017 22 6.484 17.523 2 12 2z" fill-rule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            <p className="mt-2 md:mt-4 text-xs md:text-sm font-poiret">© ALITA MOMENTS 2024. ALL RIGHTS RESERVED.</p>

          </div>

          <div className="flex-1 flex justify-center md:justify-end items-end mt-5 md:mt-0">
            <div className="relative overflow-hidden">
              <img
                src={companyLogoGold} // Replace with actual image path
                alt="Album Cover"
                className="w-48 md:w-[50rem] h-auto hover:scale-75 transition-all duration-1000"
              />

            </div>
          </div>
        </div>
        <div className=" pb-1 md:pb-2 text-center text-xs md:text-sm font-poiret">powered by <span className="uppercase font-cyfletech font-bold">cyfletech</span></div>

      </div>
    </footer>
  );
};

export default Footer;