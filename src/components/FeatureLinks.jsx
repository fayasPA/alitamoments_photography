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
      className="bg-cover bg-center relative text-white  feature-links h-[100vh] md:min-h-screen flex justify-center items-center bg-green-200"
      style={{ backgroundImage: `url(${homePageBgImg})` }}
    >
      <div className="absolute inset-0 backdrop-blur bg-black/70"></div>
      <div className="absolute inset-0  w-full flex flex-col justify-center items-center text-center px-4 gap-7 md:gap-44">
        <h1 className="text-5xl md:text-6xl italic font-quoteFont ">
          "Crafting <span className="">memories</span> that are richer than Gold"
        </h1>
        <div className="-space-y-5 uppercase w-full">
          {homeNavLists.map((item, index) => (
            <div key={index} className="feature-link">
              <div className="feature-item text-center flex flex-col items-center">
                <NavLink
                  to={item.path}
                  className="menu-item text-5xl md:text-9xl font-bold"
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
                  {item.name}
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureLinks;
