import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "@react-hooks-library/core";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const LoveExchangeComponent = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    // GSAP animation with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".love-exchange-container", // Element to trigger animation
        start: "top 80%", // Animation starts when top of the container is 80% into view
        end: "bottom 20%", // Animation ends when bottom of the container is 20% into view
        toggleActions: "play none none none", // Only play animation once
      },
    });

    tl.fromTo(
      ".animated-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: isDesktop ? 1.5 : 1, stagger: 0.3 }
    )
  }, [isDesktop]);

  return (
    <div className="love-exchange-container bg-white text-center py-52 md:py-32 h-screen mb-16">
      <div className="text-black mx-auto flex flex-col justify-center items-center  gap-5 md:gap-16">
        <div className="text-5xl md:text-[9rem] font-bold ">
          <div className="animated-text flex items-baseline justify-center">
            LOVE
            {/* Image after LOVE */}
            <div className=" block mx-1 md:mx-2">
              <img
                src="https://images.pixieset.com/22217127/e0c283f00b5f92d1c23d62b79dd2ce11-xxlarge.jpg"
                alt="Love"
                className="mx-auto  shadow-lg w-8 md:w-24 h-9 md:h-24 object-cover hover:rotate-12 transition-all duration-500"
              />
            </div>
          <div className="animated-text flex items-center justify-center">
            IS A
          </div>
          </div>
          <div className="animated-text flex items-baseline justify-center">
            PURPOSEFUL,
            {/* Image after LOVE */}
            <div className=" block mx-1 md:mx-2">
              <img
                src="https://images.pixieset.com/22217127/e0c283f00b5f92d1c23d62b79dd2ce11-xxlarge.jpg"
                alt="Love"
                className="mx-auto  shadow-lg w-8 md:w-24 h-9 md:h-24 object-cover hover:rotate-12 transition-all duration-500"
              />
            </div>
          </div>
          <div className="animated-text flex items-center justify-center">
            SHARED
          </div>

          <div className="animated-text flex items-baseline justify-center">
            {/* Image after LOVE */}
            <div className=" block mx-1 md:mx-2">
              <img
                src="https://images.pixieset.com/22217127/e0c283f00b5f92d1c23d62b79dd2ce11-xxlarge.jpg"
                alt="Love"
                className="mx-auto  shadow-lg w-8 md:w-24 h-9 md:h-24 object-cover hover:rotate-12 transition-all duration-500"
              />
            </div>
            EXCHANGE
            </div>
        </div>
        <div className="text-sm md:text-xl font-bold animated-text mx-4 md:mx-0 max-w-screen-md text-center leading-[.9rem] md:leading-[1.3rem]">
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
