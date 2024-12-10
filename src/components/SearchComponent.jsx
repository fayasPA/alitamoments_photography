import React, { useState, useEffect } from 'react';
import { collections } from '../assets/js/data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const SearchComponent = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [searchTerm, setSearchTerm] = useState('');
  const [placeholder, setPlaceholder] = useState('Search');
  const [step, setStep] = useState(0); // Track animation step

  useEffect(() => {
    const typingAnimation = setInterval(() => {
      if (step === 0) setPlaceholder('Search');
      else if (step === 1) setPlaceholder('Search.');
      else if (step === 2) setPlaceholder('Search..');
      else if (step === 3) setPlaceholder('Search...');
      else if (step === 4) setPlaceholder('Search..');
      else if (step === 5) setPlaceholder('Search.');
      else if (step === 6) setPlaceholder('Search'); // Reset and start removing dots
      setStep((prevStep) => (prevStep + 1) % 7); // Cycle steps
    }, 300); // Adjust interval as needed for typing speed

    return () => clearInterval(typingAnimation); // Cleanup on unmount
  }, [step]);

  // Filter collections based on the search term
  const filteredCollections = collections.filter((collection) =>
    collection.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleImageClick = (id) => {
    navigate(`/specific-image/${id}`);
  };

  return (
    <div className="w-full">
      {/* Search Bar */}
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="uppercase text-gray-300 text-6xl md:text-9xl font-bold tracking-wide text-left mb-1 md:mb-4 w-full bg-transparent focus:outline-none placeholder-gray-200 transition-all ml-4 md:ml-5"
        style={{ borderBottom: 'none' }} // Remove underline
      />

      {/* Masonry Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-10 mx-4 md:mx-5">
        {filteredCollections.map((collection, index) => (
          <div key={index} className="relative group">
            {/* Image */}
            <img
              src={collection.image_url[0]}
              alt={collection.name}
              className="w-full h-64 md:h-96 object-cover cursor-pointer"
              onClick={()=>(handleImageClick(collection.id))}
            />
            {/* Overlayed Name on Hover */}
            <div className="absolute bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pl-1 md:pl-2">
              <p className="text-white text-xs md:text-lg font-semibold">{collection.name}</p>
            </div>
          </div>
        ))}
      </div>



    </div>
  );
};

export default SearchComponent;
