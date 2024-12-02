import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Loader = () => {
  const [percentage, setPercentage] = useState(0);
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);
  const maskRef = useRef(null);
  const percentageRef = useRef(null);

  useEffect(() => {
    // GSAP animation
    const tl = gsap.timeline();

    // Initial setup
    gsap.set(textContainerRef.current, {
      y: '300', // Start completely below the screen
      opacity: 1,
    });

    // Animation sequence
    tl.to(textContainerRef.current, {
      duration: 1.5,
      y: '0', // Move to center
      opacity: 1,
      ease: 'power2.inOut',
    }).to(
      {},
      {
        duration: 1.5,
        onUpdate: function () {
          // Update percentage based on timeline progress
          setPercentage(Math.round(this.progress() * 100));
        },
      },
      0 // Start at the same time as text animation
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-white flex items-center justify-center overflow-hidden"
    >
      {/* Percentage counter */}
      <div
        ref={percentageRef}
        className="absolute bottom-5 left-5 text-black text-5xl font-bold z-50"
      >
        {percentage}%
      </div>

      {/* Static mask at bottom */}
      <div
        ref={maskRef}
        className="absolute bottom-0 left-0 right-0 h-[200px] bg-white z-20"
      />

      {/* Text container */}
      <div
        ref={textContainerRef}
        className="absolute text-center text-black z-10"
      >
        {/* Large Screen Text */}
        <div className="hidden sm:block">
          <div className="text-9xl font-bold">ALITA MOMENTS</div>
          <h1 className="text-2xl mt-2">CAPTURE MOMENTS, TELL STORIES</h1>
        </div>

        {/* Small Screen Text */}
        <div className="block sm:hidden">
          <div className="text-3xl font-bold flex flex-col leading-6">
            {/** Render each character vertically */}
            {"ALITA MOMENTS".split("").map((char, idx) => (
              <span key={idx}>{char === " " ? "\u00A0" : char}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
