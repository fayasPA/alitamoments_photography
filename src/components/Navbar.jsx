import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { companyInsta, companyLogo, companyLogoGold, navLists } from "../utils/Constants";

const Navbar = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  // GSAP animation for Y-axis when menu opens
  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        ".menu-item",
        { y: "200%" },
        { y: 0, stagger: 0.1, duration: 0.5, ease: "power3.out" }
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
            <div className="ml-4 md:ml-0" >
              <img
                src={isHomepage ? companyLogo : companyLogoGold}
                alt="Alita Moments Logo"
                className="w-32 h-14 lg:w-32 lg:h-16 transition-all duration-700 ease-in-out"
                role="img" // Added role for clarity
              />
            </div>
          </NavLink>
        </div>

        <div className="text-xl md:text-3xl fix-btn-wrapper fixed top-3 md:top-5 right-2 md:right-5 font-bold" style={{ zIndex: 3, transform: "translate(0px, 0px)", scale: 'none', rotate: 'none', translate: 'none' }}>

          <button onClick={toggleMenu} className="writing-mode-vertical-rl">
            {menuOpen ? "CLOSE " : "MENU"}
          </button>
        </div>
      </div>


      {/* Menu Overlay */}
      {menuOpen && (
        <div className="menu-overlay fixed inset-0 bg-black text-white z-40 uppercase overflow-hidden">
          <div className="flex flex-col justify-between h-full p-3 md:p-8 font-bold">

            <div>
              <div className="flex justify-between">
                {/* Header */}
                <NavLink to="/" style={{ color: 'inherit', textDecoration: 'none' }}
                  onClick={() => setMenuOpen(false)}>
                  <div className="" >
                    <img
                      src={companyLogoGold}
                      alt="Premier Steels Logo"
                      className="w-32 h-12 lg:w-52 lg:h-28 transition-all duration-700 ease-in-out"
                      role="img" // Added role for clarity
                    />
                  </div>
                </NavLink>
                <div className="text-xl md:text-3xl font-bold">
                  <button onClick={toggleMenu} className="writing-mode-vertical-rl hover:opacity-20 transition-opacity duration-1000">
                    CLOSE
                  </button>
                </div>
              </div>

              {/* social links */}
              <div className="mt-10 md:text-end md:mr-14">
                <div className="overflow-hidden text-right flex md:justify-end">
                  <NavLink
                    to="/contact"
                    className="text-right flex md:justify-end text-5xl lg:text-8xl transition-opacity duration-500 ease-in-out w-fit"
                    onMouseEnter={(e) => {
                      const items = document.querySelectorAll(".menu-item");
                      items.forEach((item) => {
                        if (item !== e.target) {
                          item.classList.add("navitem-opacity-low"); // Add a class for non-hovered items
                        }
                      });
                    }}
                    onMouseLeave={() => {
                      const items = document.querySelectorAll(".menu-item");
                      items.forEach((item) => {
                        item.classList.remove("navitem-opacity-low"); // Remove the class on hover out
                      });
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="menu-item w-fit">CONTACT</div>
                  </NavLink>
                </div>

                {/* Social Media Links */}
                <div className="flex gap-4 mt-2 text-sm md:text-lg md:justify-end overflow-hidden">
                  <NavLink
                    to={companyInsta}
                    className="menu-item transition-opacity duration-500 ease-in-out"
                    target="_blank"
                    onMouseEnter={(e) => {
                      const items = document.querySelectorAll(".menu-item");
                      items.forEach((item) => {
                        if (item !== e.target) {
                          item.classList.add("navitem-opacity-low");
                        }
                      });
                    }}
                    onMouseLeave={() => {
                      const items = document.querySelectorAll(".menu-item");
                      items.forEach((item) => {
                        item.classList.remove("navitem-opacity-low");
                      });
                    }}
                  >
                    INSTAGRAM
                  </NavLink>

                  <NavLink
                    to="https://www.facebook.com/yourCompany"
                    className="menu-item transition-opacity duration-500 ease-in-out"
                    target="_blank"
                    onMouseEnter={(e) => {
                      const items = document.querySelectorAll(".menu-item");
                      items.forEach((item) => {
                        if (item !== e.target) {
                          item.classList.add("navitem-opacity-low");
                        }
                      });
                    }}
                    onMouseLeave={() => {
                      const items = document.querySelectorAll(".menu-item");
                      items.forEach((item) => {
                        item.classList.remove("navitem-opacity-low");
                      });
                    }}
                  >
                    FACEBOOK
                  </NavLink>
                </div>
              </div>


            </div>


            {/* middle navitems */}
            <div className="flex flex-col gap-1 md:hidden">
              {navLists.map((data, index) =>
                data.pos === 'middle' && (
                  <NavLink
                    key={index}
                    to={data.path}
                    className="flex justify-end text-right overflow-hidden text-5xl lg:text-6xl transition-opacity duration-500 ease-in-out"
                    onMouseEnter={(e) => {
                      const items = document.querySelectorAll(".menu-item");
                      items.forEach((item) => {
                        if (item !== e.target) {
                          item.classList.add("navitem-opacity-low"); // Add class for non-hovered items
                        }
                      });
                    }}
                    onMouseLeave={() => {
                      const items = document.querySelectorAll(".menu-item");
                      items.forEach((item) => {
                        item.classList.remove("navitem-opacity-low"); // Remove class on hover out
                      });
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="menu-item w-fit">
                      {data.name}
                    </div>
                  </NavLink>
                )
              )}
            </div>



            {/* Footer Links */}
            <div>
              {/* desktop bottom alignment */}
              <div className="flex md:justify-between items-end">
                <div className="hidden md:flex flex-col">
                  {navLists.map((data, index) =>
                    data.pos === 'middle' && (
                      <NavLink
                        key={index}
                        to={data.path}
                        className="overflow-hidden text-5xl md:text-8xl transition-opacity duration-500 ease-in-out w-fit"
                        onMouseEnter={(e) => {
                          const items = document.querySelectorAll(".menu-item");
                          items.forEach((item) => {
                            if (item !== e.target) {
                              item.classList.add("navitem-opacity-low"); // Add class for non-hovered items
                            }
                          });
                        }}
                        onMouseLeave={() => {
                          const items = document.querySelectorAll(".menu-item");
                          items.forEach((item) => {
                            item.classList.remove("navitem-opacity-low"); // Remove class on hover out
                          });
                        }}
                        onClick={() => setMenuOpen(false)}
                      >
                        <div className="menu-item w-fit">
                          {data.name}
                        </div>
                      </NavLink>
                    )
                  )}
                </div>
                <div className="flex flex-col md:mr-14 md:text-right">
                  {navLists.map((data, index) =>
                    data.pos === 'last' && (
                      <NavLink
                        key={index}
                        to={data.path}
                        className="overflow-hidden text-sm md:text-4xl font-medium transition-opacity duration-500 ease-in-out w-fit"
                        onMouseEnter={(e) => {
                          const items = document.querySelectorAll(".menu-item");
                          items.forEach((item) => {
                            if (item !== e.target) {
                              item.classList.add("navitem-opacity-low"); // Add class for non-hovered items
                            }
                          });
                        }}
                        onMouseLeave={() => {
                          const items = document.querySelectorAll(".menu-item");
                          items.forEach((item) => {
                            item.classList.remove("navitem-opacity-low"); // Remove class on hover out
                          });
                        }}
                        onClick={() => setMenuOpen(false)}
                      >
                        <div className="menu-item w-fit">
                          {data.name}
                        </div>
                      </NavLink>
                    )
                  )}
                </div>
              </div>

              <div className="flex gap-3 text-[.6rem] md:text-xs font-normal text-selGray justify-between md:justify-normal mt-4 md:mt-7">
                <p>PRIVACY POLICY</p>
                <p>COMMERCIAL COPYRIGHT</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
