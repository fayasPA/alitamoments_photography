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
    if (window.innerWidth <= 768){
      gsap.set(textContainerRef.current, {
        x: '-300', // Start completely below the screen
        opacity: 1,
      });
  
      // Animation sequence
      tl.to(textContainerRef.current, {
        duration: 1.5,
        x: '0', // Move to center
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
    } else {
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
    );}
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center h-[95vh] md:h-screen w-full overflow-hidden"
    >
      {/* Percentage counter */}
      <div
        ref={percentageRef}
        className="absolute bottom-5 left-5 text-black text-xl md:text-5xl font-bold z-50"
      >
        {percentage}%
      </div>

      {/* Text container */}
      <div
        className="text-center text-black z-10"
      >
        {/* Large Screen Text */}
        <div className='overflow-hidden'>
          <div className="writing-mode-vertical-rl md:writing-mode-normal"
        ref={textContainerRef}
        >
            <div className="text-4xl md:text-8xl font-bold">ALITA MOMENTS</div>
            <h1 className="text-sm md:text-2xl mt-2">CAPTURE MOMENTS, TELL STORIES</h1>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Loader;