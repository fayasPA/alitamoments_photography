import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const AboutHero = () => {
  useEffect(() => {
    // GSAP Animation: Fade out the sticky text
    gsap.to(".sticky-text", {
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".hero-section", // Hero section
        start: "bottom bottom", // Start fading out when the section ends
        end: "bottom+=250 bottom", // Completely fade out after a slight delay
        scrub: true, // Smooth transition
      },
    });
  }, []);

  return (
    <div className="relative md:h-[250vh] h-[100vh]">
      {/* Hero Image Section */}
      <div className="hero-section relative md:h-[250vh]  h-[100vh]">
        <img
          src="https://images.pixieset.com/69137547/3758e982f7e3659d513bcf1c516daadf-xxlarge.jpg"
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
