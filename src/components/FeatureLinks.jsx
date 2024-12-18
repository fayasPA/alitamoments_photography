import React, { useEffect } from "react";
import { homeNavLists, homePageBgImg } from "../utils/Constants";
import { LuMoveRight } from "react-icons/lu";
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
    <div className="bg-cover bg-center relative text-white feature-links min-h-screen flex justify-center items-center bg-green-200 "
      style={{ backgroundImage: `url(${homePageBgImg})` }}>
      <div className="py-1 md:py-28 px-2 md:px-4 bg-black/60 w-full">

        <div className="space-y-4 uppercase">
          {homeNavLists.map((item, index) => (
            <div
               key={index}
             className="feature-link">
              <div
                className="feature-item text-center flex flex-col items-center"
              >
                <NavLink to={item.path} className="menu-item text-3xl md:text-7xl font-bold"
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
                >{item.name}</NavLink>

              </div>
              <div className=" border border-dotted relative flex items-center justify-center mt-4 md:mt-7">
                <div className="flex space-x-4 absolute">
                  <button className="px-2 py-1 text-sm rounded-full bg-borderColor hover:bg-gray-600 transition uppercase">
                    <LuMoveRight />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureLinks;
