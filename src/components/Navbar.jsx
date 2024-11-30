import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { companyLogo, navLists } from "../utils/Constants";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // GSAP animation for Y-axis when menu opens
  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        ".menu-item",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      {/* Navbar Logo and Menu Button */}
      <div className="fixed inset-0 h-fit w-fit text-white mix-blend-difference fix-btn" style={{ zIndex: 3 }}>
        <div className="fix-btn-wrapper fixed top-3 md:top-5 left-1 md:left-5" style={{ zIndex: 3, transform: "translate(0px, 0px)", scale: 'none', rotate: 'none', translate: 'none' }}>
          <NavLink to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <div className="" >
              <img
                src={companyLogo}
                alt="Premier Steels Logo"
                className="w-32 h-12 lg:w-52 lg:h-16 transition-all duration-700 ease-in-out"
                role="img" // Added role for clarity
              />
            </div>
          </NavLink>
        </div>

        <div className="text-base md:text-3xl fix-btn-wrapper fixed top-3 md:top-5 right-2 md:right-5" style={{ zIndex: 3, transform: "translate(0px, 0px)", scale: 'none', rotate: 'none', translate: 'none' }}>

          <button onClick={toggleMenu} className="writing-mode-vertical-rl">
          {menuOpen ? "CLOSE " : "MENU"}
        </button>
        </div>
      </div>
      

      {/* Menu Overlay */}
      {menuOpen && (
        <div className="menu-overlay fixed inset-0 bg-black text-white z-40">
          <div className="flex flex-col justify-between h-full p-8">
            {/* Header */}
            <NavLink to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <div className="" >
              <img
                src={companyLogo}
                alt="Premier Steels Logo"
                className="w-32 h-12 lg:w-52 lg:h-16 transition-all duration-700 ease-in-out"
                role="img" // Added role for clarity
              />
            </div>
          </NavLink>
            <div className="text-base md:text-3xl fixed top-3 md:top-5 right-2 md:right-5">
              <button onClick={toggleMenu} className="writing-mode-vertical-rl">
                CLOSE
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-8 mt-10">
              {navLists.map((data, index) => (
                <NavLink
                  key={index}
                  to={data.path}
                  className="menu-item text-3xl lg:text-6xl transition-opacity duration-500 ease-in-out"
                  onMouseEnter={(e) => {
                    const items = document.querySelectorAll(".menu-item");
                    items.forEach((item) => {
                      if (item !== e.target) {
                        item.style.opacity = "0.4"; // Dull effect for non-hovered items
                      }
                    });
                  }}
                  onMouseLeave={() => {
                    const items = document.querySelectorAll(".menu-item");
                    items.forEach((item) => {
                      item.style.opacity = "1"; // Reset opacity on hover out
                    });
                  }}
                >
                  {data.name}
                </NavLink>
              ))}
            </div>

            {/* Footer Links */}
            <div className="text-sm lg:text-base">
              <p>PRIVACY POLICY</p>
              <p>COMMERCIAL COPYRIGHT</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
