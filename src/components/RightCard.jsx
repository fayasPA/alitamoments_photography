import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const RightCard = ({ 
  imageUrl, 
  text = "BROWSE MORE COLLECTION",
  hoverColor = "#000000",
  baseColor = "#6B7280" 
}) => {
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const textEl = textRef.current;
    const lineEl = lineRef.current;

    if (!textEl || !lineEl) return;

    const handleMouseEnter = () => {
      setIsHovered(true);
      
      // Text gradient animation
      gsap.to(textEl, {
        backgroundPosition: '100% 0', 
        ease: 'power3.out',
        duration: 0.7,
      });

      // Underline animation
      gsap.to(lineEl, {
        width: '100%',
        backgroundColor: hoverColor,
        duration: 0.7,
        ease: 'power3.out'
      });

      // Slight text scale and movement
      gsap.to(textEl, {
        scale: 1.05,
        y: -5,
        duration: 0.5,
        ease: 'back.out(1.7)'
      });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      
      // Reset text gradient
      gsap.to(textEl, {
        backgroundPosition: '-100% 0',
        ease: 'power3.out', 
        duration: 0.7,
      });

      // Reset underline
      gsap.to(lineEl, {
        width: '0%',
        backgroundColor: baseColor,
        duration: 0.7,
        ease: 'power3.out'
      });

      // Reset text position and scale
      gsap.to(textEl, {
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: 'back.out(1.7)'
      });
    };

    textEl.addEventListener('mouseenter', handleMouseEnter);
    textEl.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      textEl.removeEventListener('mouseenter', handleMouseEnter);
      textEl.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hoverColor, baseColor]);

  return (
    <div
      className={`relative w-full md:w-1/2 h-screen md:h-full flex justify-center items-center flex-col flex-shrink-0 ${
        imageUrl ? 'bg-cover bg-center' : ''
      }`}
      style={{
        backgroundImage:
          window.innerWidth < 768 && imageUrl ? `url(${imageUrl})` : 'none',
      }}
    >
      {/* Overlay for text */}
      <div
        className="absolute md:hidden inset-0 bg-black bg-opacity-40"
        style={{
          boxShadow: 'inset 1vw 1vw 10rem rgba(0, 0, 0, 1)',
        }}
      />
      <div className="relative z-10 text-center group">
        <div className="inline-block relative ">
          <p
            ref={textRef}
            className="text-xl md:text-4xl uppercase text-transparent bg-gradient-to-r from-black to-gray-400 bg-clip-text transition-all duration-700 ease-in-out"
            style={{
              backgroundSize: '200% 100%',
              backgroundPosition: '-100% 0',
              willChange: 'transform',
            }}
          >
            {text}
          </p>
          <div 
            ref={lineRef}
            className="absolute bottom-0 left-0 h-[3px] bg-gray-500 transition-all duration-700 ease-in-out"
            style={{
              width: '0%',
            }}
          />
        </div>
        
        {/* Hover state indicator */}
        <div 
          className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 
            text-xs text-gray-500 opacity-0 transition-all duration-300 
            ${isHovered ? 'opacity-100' : ''}`}
        >
          Explore Collection
        </div>
      </div>
    </div>
  );
};

export default RightCard;