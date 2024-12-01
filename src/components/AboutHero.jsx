import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const AboutHero = () => {
  useEffect(() => {
    gsap.fromTo(".sticky-text", 
      {
        y: 0, // Starting position of the text (no movement at the beginning)
      },
      {
        y: -100, // Moves the sticky text up by 100px at the end
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero-section", // Hero section
          start: "top bottom", // Start when the top of the section reaches the bottom of the viewport
          end: "bottom top", // End 200px earlier than when the section reaches the top
          scrub: true, // Smooth transition with the scroll position
        },
      }
    );
  }, []);
  
  
  
  
  

  return (
    <div className="relative md:h-[250vh] h-[100vh]">
      {/* Hero Image Section */}
      <div className="hero-section relative md:h-[250vh]  h-[100vh]">
        <img
          src="https://images.pixieset.com/69137547/00cc3efcd7fb9d14b79c4a01b89df4b1-xxlarge.jpg"
          alt="Hero"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>

      {/* Sticky Text */}
      <div className="sticky-text sticky left-0 bottom-0 z-10 flex flex-col items-start p-6 space-y-4">
        {/* Scroll to Explore */}
        <a
          href="#personal"
          className="scroll-link text-white flex items-center gap-2 text-xl font-medium mix-blend-difference"
        >
          Scroll to explore
          <MdKeyboardDoubleArrowDown />
        </a>

        {/* About Us with Mix-Blend-Difference */}
        <h1 className="relative text-6xl md:text-9xl font-bold tracking-wide leading-tight">
          <span className="relative z-10 text-transparent bg-gradient-to-r from-white via-slate-600 to-black bg-clip-text mix-blend-difference">
            About
          </span>
          <br />
          <span className="relative z-10 text-transparent bg-gradient-to-r  from-white via-slate-600 to-black  bg-clip-text mix-blend-difference">
            us
          </span>

          {/* Outline effect (optional) */}
          <span className="absolute inset-0 text-transparent bg-clip-text border-outline"></span>
        </h1>
      </div>
    </div>
  );
};

export default AboutHero;
