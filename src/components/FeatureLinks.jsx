import React, { useEffect } from "react";
import { homeNavLists, homePageBgImg } from "../utils/Constants";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureLinks = () => {
  useEffect(() => {
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: ".feature-links",
        start: "top bottom",
        end: "top top",
        scrub: 1,
      },
    });

    animation.fromTo(
      ".feature-link",
      { opacity: 0, scale: 0.8, y: 50 },
      { opacity: 1, scale: 1, y: 0, stagger: 0.05, ease: "power2.out" }
    );

    return () => {
      if (animation) animation.kill();
    };
  }, []);

  useEffect(() => {
    // GSAP Animation for fade-in and slide-up
    gsap.fromTo(
      ".feature-item",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1.2, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      className="bg-cover bg-center relative text-white  feature-links h-[100vh] md:h-[130vh] flex justify-center items-center bg-green-200"
      style={{ backgroundImage: `url(${homePageBgImg})` }}
    >
      <div className="h-full bg-black/60 w-full flex flex-col justify-center items-center text-center px-4 gap-7 md:gap-28">
        {/* New text added here */}
        <h1 className="text-6xl md:text-9xl font-bold font-poiret text-selGold  mb-8">
          "Crafting memories that are richer than Gold"
        </h1>
        <div className="space-y-4 uppercase w-full">
          {homeNavLists.map((item, index) => (
            <div key={index} className="feature-link">
              <div className="feature-item text-center flex flex-col items-center">
                <NavLink
                  to={item.path}
                  className="menu-item text-5xl md:text-8xl font-bold"
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
                >
                  {item.name}
                </NavLink>
              </div>
              <div className="border  border-borderColor relative flex items-center justify-center mt-1 md:mt-3 mx-2 md:mx-4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureLinks;
