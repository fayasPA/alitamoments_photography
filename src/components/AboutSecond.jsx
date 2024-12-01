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
    ).fromTo(
      ".animated-image",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5 },
      "-=1" // Overlap animation slightly with previous timeline
    );
  }, [isDesktop]);

  return (
    <div className="love-exchange-container bg-white text-center py-52 md:py-32 h-screen mb-16">
      <div className="text-black max-w-screen-md mx-auto">
        <div className="text-6xl md:text-9xl font-extrabold leading-[.8]">
          <div className="animated-text">
            LOVE IS A <div><span className="inline-block">PURPOSEFUL,</span></div>
          </div>
          <div className="animated-text flex ml-20 sm:ml-48 md:ml-10  ">
            SHARED
            {/* Image Section */}
            <div className="animated-image mt-1 ml-5">
              <img
                src="https://images.pixieset.com/22217127/e0c283f00b5f92d1c23d62b79dd2ce11-xxlarge.jpg"
                alt="Love Exchange"
                className="mx-auto rounded-md shadow-lg w-0 md:w-44 md:h-36 object-cover hover:rotate-12 transition-all duration-500"
              />
            </div>
          </div>
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
