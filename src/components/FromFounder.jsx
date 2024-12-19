import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FromFounder = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Set up animations for the left and right columns
    if(window.innerWidth > 768){
      gsap.fromTo(
        section.querySelector(".left-column"),
        {
          opacity: 1,
          y: 250,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: section.querySelector(".left-column"),
            start: "top 80%", // Trigger animation when the element is 80% into the viewport
            end: "bottom 60%",
            scrub: true, // Smoothens the animation
          },
        }
      );
  
      gsap.fromTo(
        section.querySelector(".right-column"),
        {
          opacity: 0,
          x: 250,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: section.querySelector(".right-column"),
            start: "top 80%",
            end: "bottom 60%",
            scrub: true, // Smoothens the animation
          },
        }
      );
  
      // Clean up animations when the component unmounts
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="block-container block-multiple-text page-block py-10 md:py-20 md:px-10"
      id="block-container-KavvPA"
    >
      <div className="block-container__block text-white">
        <div className="container mx-auto max-w-screen-2xl px-4">
          <div className="multiple-text__row flex flex-col md:flex-row">
            {/* Left Column */}
            <div className="multiple-text__text-container left-column w-full md:w-1/2 mb-8 md:mb-0">
              <div
                className="element-container element-text"
                id="element-container-bqD4qv"
              >
                <div className="element-container__element">
                  <div className="text__text  font-poiret text-2xl md:text-5xl">
                    <h1 className="font-bold mb-4">
                      Hi, I am <span className="text-3xl md:text-6xl">EBIN.</span>
                    </h1>
                    <h3 className=" font-medium">
                      A Fine Art & Wedding Photographer
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="multiple-text__text-container right-column w-full md:w-full">
              <div
                className="element-container element-text"
                id="element-container-pqprqM"
              >
                <div className="element-container__element">
                  <div className="text__text font-poiret text-xl md:text-5xl">
                    <p className=" mb-4">
                      As a passionate wedding photographer, my approach
                      transcends merely capturing moments; it's about weaving
                      narratives and immortalizing emotions. I believe that
                      every couple's love story is unique, and I strive to
                      artistically encapsulate those individual tales through my
                      lens.
                    </p>
                    <p className="">
                      From the subtle stolen glances to the grand celebratory
                      gestures, I seek to compose a visual saga that portrays
                      the authenticity and beauty of your love story. Through a
                      blend of storytelling and artistic flair, I aspire to
                      deliver a collection of images that will become cherished
                      keepsakes, capturing not just the events but the very
                      soul of your wedding day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromFounder;
