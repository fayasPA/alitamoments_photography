import React, { useEffect, useRef } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const aboutUsRef = useRef(null);

  useEffect(() => {
    const aboutUsEl = aboutUsRef.current;

    gsap.to(aboutUsEl, {
      y: -50,
      opacity: 0,
      scrollTrigger: {
        trigger: aboutUsEl,
        start: "bottom center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="h-screen md:h-[150vh]">
      {/* Hero Image Section */}
      <div className="hero-section h-full">
        <img
          src="https://images.pixieset.com/69137547/00cc3efcd7fb9d14b79c4a01b89df4b1-xxlarge.jpg"
          alt="Hero"
          className="object-cover w-full h-full"
        />
        {/* Scroll to Explore and About Us */}
        <div className="sticky bottom-5 left-5 text-white"
          >
          <div className="flex items-center gap-2">
            <span className="text-lg">Scroll to Explore</span>
            <MdKeyboardDoubleArrowDown className="text-lg md:text-xl" />
          </div>
        <div
          ref={aboutUsRef}
          className="text-white text-6xl md:text-9xl font-bold"
        >
          About Us
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
