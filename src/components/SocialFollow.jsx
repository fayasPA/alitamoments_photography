import React, { useEffect } from "react";
import { FaPinterest, FaInstagram, FaFacebook } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { companyFb, companyInsta } from "../utils/Constants";

const SocialFollow = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation with fromTo
    gsap.fromTo(
      ".social-icon", // Target class
      { scale: 0, opacity: 0 }, // Starting properties
      {
        scale: 1,
        opacity: 1,
        duration: 0.8, // Animation duration
        ease: "power2.out", // Smooth easing
        stagger: 0.2, // Delay between elements
        scrollTrigger: {
          trigger: ".social-icon", // Trigger animation on viewport
          start: "top 80%", // Start when top of element reaches 80% of viewport
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-96 md:h-auto md:min-h-screen bg-white">
      <p className="text-gray-400 text-sm md:text-lg mb-8 md:mb-14">
        FOLLOW US ON SOCIAL
      </p>
      <div className="flex justify-center space-x-10 md:space-x-44">
        {/* Pinterest */}
        {/* <div className="social-icon text-center">
          <FaPinterest className="text-black mx-auto text-3xl md:text-5xl cursor-pointer hover:text-red-500 hover:scale-110  transition-all duration-300" />
          <p className="mt-2 text-black text-sm md:text-base">PINTEREST</p>
        </div> */}

        {/* Instagram */}
        <button onClick={() => window.open(companyInsta, "_blank")} className="social-icon text-center">
          <FaInstagram className="text-black mx-auto text-3xl md:text-5xl cursor-pointer hover:text-pink-500 hover:scale-110 transition-all duration-300" />
          <p className="mt-2 text-black text-sm md:text-base">INSTAGRAM</p>
        </button>

        {/* Facebook */}
        <button className="social-icon text-center" onClick={() => window.open(companyFb, "_blank")}>
          <FaFacebook className="text-black mx-auto text-3xl md:text-5xl cursor-pointer hover:text-blue-500 hover:scale-110  transition-all duration-300" />
          <p className="mt-2 text-black text-sm md:text-base">FACEBOOK</p>
        </button>
      </div>
    </div>
  );
};

export default SocialFollow;
