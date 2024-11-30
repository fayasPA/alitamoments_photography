import React from 'react';
import { collections } from '../assets/js/data';

const SearchComponent = () => {
  return (
    <div className="w-full min-h-screen bg-white px-6 py-10 pt-32">
      {/* Heading */}
      <h1 className="text-gray-300 text-8xl font-bold tracking-wide text-left mb-10">
        SEARCH FOR
      </h1>

      {/* Masonry Grid Layout */}
      <div className="flex flex-wrap -mx-2 ">
        {collections.map((collection, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 px-2 mb-4 "
          >
            {/* Image Container */}
            <div className="relative w-full h-0" style={{ paddingBottom: '150%' }}>
              <img
                src={collection.image_url}
                alt={collection.name}
                className="absolute inset-0 w-full h-full object-cover rounded-md shadow-lg"
              />
              {/* Name Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-medium uppercase">
                  {collection.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
