import React, { useEffect, useState, useRef } from 'react';
import { collections } from '../assets/js/data';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import gsap from 'gsap';

const HomeContent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeImage, setActiveImage] = useState({});
  const [isIdle, setIsIdle] = useState(false); // Track idle state
  const [scrollIntervalId, setScrollIntervalId] = useState(null); // Store the interval ID for scrolling
  const navigate = useNavigate(); // Initialize navigate
  const containerRef = useRef(null); // Ref for the grid container

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

  useEffect(() => {
    const gridItems = Array.from(containerRef.current.querySelectorAll(".grid-item")); // Select all grid items

    // Animate grid items
    gsap.fromTo(
      gridItems,
      {
        opacity: 0,
        y: () => Math.random() * 200 + 100, // Random starting position below the view
      },
      {
        opacity: 1,
        y: () => Math.random() * -50 - 30, // Random intermediate position below the top
        duration: 1.5,
        ease: "power3.out",
        stagger: 0, // No staggering; all items animate together
        onComplete: () => {
          // After reaching intermediate position
          gsap.to(gridItems, {
            y: 0, // Move to the final position
            delay: 1, // Wait 1 second before continuing
            duration: 1,
            ease: "power3.out",
          });
        },
      }
    );
  }, []);

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-3" ref={containerRef}>
        {collections.map((collection, index) => {
          const isHovered = hoveredIndex === index;
          const currentImage = activeImage[index] ?? 0;

          return (
            <div
              key={index}
              className="relative group overflow-hidden grid-item" // Add class for GSAP animation
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
