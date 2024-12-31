import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { companyLogo, companyLogoBlack, companyLogoGold, companyLogoStraightLineBlack, companyLogoStraightLineGold, loaderImg } from '../utils/Constants';

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
    if (window.innerWidth <= 768) {
      gsap.set(textContainerRef.current, {
        y: '100%', // Start completely below the screen
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
    } else {
      gsap.set(textContainerRef.current, {
        y: '120%', // Start completely below the screen
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
    }
  }, []);

  return (
    <div>
    <div
      ref={containerRef}
      className="flex items-center justify-center h-[95vh] md:h-screen w-full overflow-hidden"
    >
      {/* Percentage counter */}
      <div
        ref={percentageRef}
        className="absolute  bottom-3 md:bottom-5 left-2 md:left-5 text-black text-xl md:text-3xl font-medium z-50 font-sans"
      >
        {percentage}%
      </div>

      {/* Text container */}
      <div
        className="text-center text-black z-10"
      >
        {/* Large Screen Text */}
        <div className='overflow-hidden'>
          <div className=""
            ref={textContainerRef}
          >
            <img
              src={loaderImg ?? companyLogoBlack}
              alt="Company Logo"
              className="w-64 h-auto lg:w-[40rem] lg:max-h-96"
            />
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Loader;
