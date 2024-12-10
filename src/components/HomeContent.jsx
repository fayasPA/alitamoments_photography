import React, { useEffect, useState } from 'react';
import { collections } from '../assets/js/data';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const HomeContent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeImage, setActiveImage] = useState({});
  const [isIdle, setIsIdle] = useState(false); // Track idle state
  const [scrollIntervalId, setScrollIntervalId] = useState(null); // Store the interval ID for scrolling
  const navigate = useNavigate(); // Initialize navigate

  // useEffect(() => {
  //   let idleTimeout;
  //   let lastScrollPosition = window.scrollY; // Track the last scroll position

  //   const handleMouseMove = () => {
  //     stopScrolling();
  //     resetIdleTimer();
  //   };

  //   const handleScroll = () => {
  //     const currentScrollPosition = window.scrollY;
  //     if (currentScrollPosition < lastScrollPosition) {
  //       // User scrolled up
  //       stopScrolling();
  //     }
  //     lastScrollPosition = currentScrollPosition; // Update the last scroll position
  //     resetIdleTimer();
  //   };

  //   const resetIdleTimer = () => {
  //     setIsIdle(false); // Reset idle state
  //     clearTimeout(idleTimeout); // Clear the existing timer

  //     // Start a new idle timer
  //     idleTimeout = setTimeout(() => {
  //       setIsIdle(true); // Set to idle after 5 seconds
  //     }, 8000); // 8 seconds idle time
  //   };

  //   const stopScrolling = () => {
  //     if (scrollIntervalId) {
  //       clearInterval(scrollIntervalId); // Stop scrolling
  //       setScrollIntervalId(null);
  //     }
  //   };

  //   // Event listeners for mouse movement and scrolling
  //   window.addEventListener('mousemove', handleMouseMove);
  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup
  //   return () => {
  //     clearTimeout(idleTimeout); // Clear timer on component unmount
  //     window.removeEventListener('mousemove', handleMouseMove); // Remove mousemove listener
  //     window.removeEventListener('scroll', handleScroll); // Remove scroll listener
  //   };
  // }, [scrollIntervalId]);

  // useEffect(() => {
  //   if (isIdle) {
  //     const scrollDuration = 25000; // 25 seconds
  //     const intervalTime = 25; // 25ms interval
  //     const totalSteps = scrollDuration / intervalTime;
  //     const targetScroll = document.body.scrollHeight - window.innerHeight; // Total scrollable distance
  //     const stepDistance = targetScroll / totalSteps; // Distance to scroll per step

  //     let currentStep = 0;

  //     const intervalId = setInterval(() => {
  //       if (currentStep < totalSteps) {
  //         window.scrollBy(0, stepDistance);
  //         currentStep++;
  //       } else {
  //         clearInterval(intervalId); // Stop scrolling after reaching the target
  //         setScrollIntervalId(null);
  //       }
  //     }, intervalTime);

  //     // Save the interval ID so we can clear it later
  //     setScrollIntervalId(intervalId);
  //   }
  // }, [isIdle]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = (index) => {
    setActiveImage((prev) => ({
      ...prev,
      [index]: prev[index] === 0 ? 1 : 0,
    }));
    setHoveredIndex(null);
  };

  const handleImageClick = (id) => {
    navigate(`/specific-image/${id}`);
  };


  return (
    <div className="mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-3">
        {collections.map((collection, index) => {
          const isHovered = hoveredIndex === index;
          const currentImage = activeImage[index] ?? 0;

          return (
            <div
              key={index}
              className="relative group overflow-hidden"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleImageClick(collection.id)} // Handle click
            >
              {/* Image */}
              <img
                src={collection.image_url[currentImage]}
                alt={collection.name}
                className={`w-full h-[35vh] sm:h-[50vh] md:h-[80vh] object-cover transition-transform duration-[2000ms] ${
                  isHovered ? 'scale-105' : 'scale-100'
                }`}
              />
              {/* Name */}
              <div className="font-bold text-xs md:text-xl uppercase absolute bottom-0 left-0 right-0 text-transparent transition-all duration-300 group-hover:text-white pl-2 text-start ease-in-out">
                {collection.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeContent;
