import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useMediaQuery } from "@react-hooks-library/core";

const LoveExchangeComponent = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    // GSAP animation for text fade-in
    const tl = gsap.timeline();
    tl.fromTo(
      ".animated-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: isDesktop ? 1.5 : 1, stagger: 0.3 }
    );
  }, [isDesktop]);

  return (
    <div className="bg-white text-center py-52 md:py-32 h-screen mb-16">
      <div className="text-black max-w-screen-md mx-auto">
        <div className="text-6xl  md:text-9xl font-extrabold leading-[.8]">
          <div className="animated-text">
            LOVE IS A <div><span className="inline-block">PURPOSEFUL,</span></div>
          </div>
          <div className="animated-text">SHARED</div>
          <div className="animated-text">EXCHANGE</div>
        </div>
        <div className="mt-4 text-lg md:text-2xl font-semibold animated-text mx-4 md:mx-0">
          <p>
            THE ALITA MOMENTS STUDIO IS BASED ON SOMETHING ELSE, SOMETHING
            PROFOUND IN WHAT AS WEDDING PHOTOGRAPHERS WE RECEIVE FROM PEOPLE IN
            LOVE, THEIR FAMILIES, THEIR FRIENDS - THEIR ENTIRE WORLDS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoveExchangeComponent;