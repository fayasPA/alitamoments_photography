import React, { useState } from 'react';
import { collections } from '../assets/js/data';

const HomeContent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which collection is hovered
  const [imageChanged, setImageChanged] = useState(false); // Track if the image has been changed

  const handleMouseEnter = (index) => {
    if (!imageChanged) {
      setHoveredIndex(index);
      setTimeout(() => {
        setImageChanged(true); // Change the image after 1 second
      }, 1000); // 1 second delay before changing the image
    }
  };

  const handleMouseLeave = (index) => {
    // Do nothing on mouse leave, keep the image changed
  };

  const handleReset = () => {
    setImageChanged(false); // Reset the image when hovered again
  };

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-3">
        {collections.map((collection, index) => (
          <div
            key={index}
            className="relative group overflow-hidden"
            onMouseEnter={() => handleMouseEnter(index)} // Change image on hover
            onMouseLeave={() => handleMouseLeave(index)} // Don't reset image on leave
            onClick={handleReset} // Reset image when clicked
          >
            {/* Image with gradient on hover */}
            <img
              src={collection.image_url[0]}
              alt={collection.name}
              className={`w-full h-[35vh] sm:h-[50vh] md:h-[80vh] object-cover transition-all duration-1000 ${imageChanged && hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}
            />
            <img
              src={collection.image_url[1]}
              alt={collection.name}
              className={`w-full h-[35vh] sm:h-[50vh] md:h-[80vh] object-cover absolute inset-0 transition-all ${imageChanged && hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
            />
            {/* Name */}
            <div className="absolute bottom-0 left-0 right-0 text-transparent transition-all duration-100000 group-hover:bg-gradient-to-t from-black to-transparent group-hover:text-white p-4 text-center ease-in-out">
              {collection.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
