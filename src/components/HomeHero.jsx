import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { companyCEO } from "../utils/Constants";

gsap.registerPlugin(ScrollTrigger);

const HomeHero = () => {
  const [isSticky, setIsSticky] = useState(true);
  const imageRef = useRef(null);

  // Handle scroll event to check if the bottom of the image is in view
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const imageBottom = imageRef.current.getBoundingClientRect().bottom;
        // console.log('haha', imageBottom, window.innerHeight)
        // Check if the bottom of the image has reached the bottom of the viewport
        if (imageBottom <= window.innerHeight) {
          setIsSticky(false); // Change to absolute when the image bottom is in view
        } else {
          setIsSticky(true); // Keep it sticky when the image bottom is not in view
        }
      }
    };

    gsap.fromTo('.header-text', {
      y: "0", // Moves upward
    },
      {
        y: "-120%", // Moves upward
        scrollTrigger: {
          trigger: imageRef?.current, // Use the image as the trigger
          start: "bottom 70%", // When the image's bottom reaches the center of the viewport
          end: "bottom 40%", // When the image's bottom leaves the viewport
          scrub: true, // Smoothly sync with the scroll
        },
      });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full uppercase ">
      {/* Background Image */}
      <div className="relative w-full h-[90vh] md:h-[160vh]" ref={imageRef}>
        <img
          src={companyCEO}
          alt="About Hero"
          className="w-full h-full object-cover"
        />

        <div
          className={`${isSticky ? "absolute md:fixed bottom-0 left-0" : "absolute bottom-0 left-0"
            } mix-blend-difference text-white text-4xl md:text-5xl font-bold pl-4 md:pl-8 py-2 w-fit flex flex-col gap-6`}
        >
          <div className="hidden md:block text-xl">
            <span className="">Scroll to</span>
            <h1 className="">Explore</h1>
            <MdKeyboardDoubleArrowDown className="text-lg md:text-xl" />
          </div>
          <div className="overflow-hidden -mb-8 md:-mb-14">
            <div
              className="header-text text-white text-6xl md:text-[10rem] font-bold"
            >
              Ebin
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className="header-text text-white text-6xl md:text-[10rem] font-bold"
            >
              Abraham
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeHero;
