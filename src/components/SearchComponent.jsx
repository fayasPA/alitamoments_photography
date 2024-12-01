import React, { useState, useEffect } from 'react';
import { collections } from '../assets/js/data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  // Filter collections based on the search term
  const filteredCollections = collections.filter((collection) =>
    collection.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    // Animate collection items when they are in the viewport
    gsap.utils.toArray('.collection-item').forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: .4, y: 50 },
        {
          opacity: 1.2,
          y: 0,
          duration: 1,
          delay: 0.2 * index, // Stagger the animation for each item
          scrollTrigger: {
            trigger: item,
            start: 'top 80%', // Animation starts when 80% of the element is in view
            end: 'top 20%',
            scrub: true, // Smooth animation on scroll
          },
        }
      );
    });
  }, [filteredCollections]);

  return (
    <div className="w-full min-h-screen bg-white px-6 py-10 pt-32">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="SEARCH FOR"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="text-gray-300 text-5xl md:text-8xl font-bold tracking-wide text-left mb-10 w-full bg-transparent focus:outline-none placeholder-gray-200 transition-all"
        style={{ borderBottom: 'none' }} // Remove underline
      />

      {/* Masonry Grid Layout */}
      <div className="flex flex-wrap -mx-2">
        {filteredCollections.map((collection, index) => (
          <div
            key={index}
            className="w-1/2 lg:w-1/4 xl:w-1/6 px-2 mb-4 collection-item"
          >
            {/* Image Container */}
            <div className="relative w-full h-0 overflow-hidden" style={{ paddingBottom: '150%' }}>
              <img
                src={collection.image_url[0]}
                alt={collection.name}
                className="absolute inset-0 w-full h-full object-cover rounded-md shadow-lg hover:scale-125 duration-[2000ms] transition-all"
              />
            </div>

            {/* Name Below Image */}
            <div className="mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-gray-400 text-sm font-medium uppercase">
                {collection.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
