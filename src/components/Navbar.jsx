import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { companyEmail, companyLogo, companyName, navLists } from "../utils/Constants";
import { gsap } from "gsap";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const scrollThreshold = 50;

  const menuRef = useRef(null); // Ref for the menu container
  const menuAnimation = useRef(null); // Ref for the GSAP animation instance

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
      setIsNavbarVisible(currentScrollY < lastScrollY); // Show on scroll up
    }
    setLastScrollY(currentScrollY);
    setIsScrolled(currentScrollY > 50); // Change navbar background on scroll
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  useEffect(() => {
    const handleScrollDebounced = debounce(handleScroll, 100);
    window.addEventListener("scroll", handleScrollDebounced);

    return () => {
      window.removeEventListener("scroll", handleScrollDebounced);
    };
  }, [lastScrollY]);

  // GSAP Animation for menu open/close
  useEffect(() => {
    if (menuRef.current) {
      if (isMobileMenuOpen) {
        menuAnimation.current = gsap.to(menuRef.current, {
          height: "100vh",
          duration: 0.5,
          ease: "power3.inOut",
        });
      } else {
        menuAnimation.current = gsap.to(menuRef.current, {
          height: "0",
          duration: 0.5,
          ease: "power3.inOut",
        });
      }
    }
  }, [isMobileMenuOpen]);

  // Close menu when a NavLink is clicked
  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (

    <div className="bg-white page-wrapper ">
      {/* <div class="h-screen w-full fixed top-0 left-0 bg-white page-alpfa white-cover" style={{zIndex: 98}} ></div> */}
      {/* <div class="backdrop-blur" data-v-b065d66b=""></div> */}
      <div className="fixed inset-0 h-fit w-fit text-white mix-blend-difference fix-btn" style={{zIndex: 3}}>
        <div className="text-4xl fix-btn-wrapper" style={{ fontSize: 100, zIndex:3, transform: "translate(0px, 0px)", scale: 'none', rotate:'none', translate:'none' }}>
          <a style={{ color: 'inherit', textDecoration: 'none' }} href="">
            <span>company Logo</span>
          </a>
        </div>
      </div>
      {/* <div className="fixed inset-0 z-50 flex flex-col opacity-50 overflow-hidden  w-fit h-fit  bg-selRedDark">
        <div className="fixed top-10 left-[30px] z-30 text-white cursor-pointer text-[35px] uppercase leading-none mix-blend-difference overflow-hidden transition ease-linear">
          <div className="fix-btn__wrapper" style={{ translate: 'none', scale: '0', rotate: 'none', transform: "none" }}>
            <span>Company Logo</span>
          </div>
        </div>
      </div> */}
    </div>


  );
};

export default Navbar;
