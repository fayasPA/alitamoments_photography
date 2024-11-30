import React from 'react';
import Masonry from 'react-masonry-css';
import { collections } from '../assets/js/data';

const SearchComponent2 = () => {
  const breakpointColumnsObj = {
    default: 6,
    1100: 4,
    700: 2,
    500: 1,
  };

  return (
    <div className="w-full min-h-screen bg-white px-6 py-10 pt-32">
      {/* Heading */}
      <h1 className="text-gray-800 text-7xl font-bold tracking-wide text-left mb-10">
        SEARCH FOR
      </h1>

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {collections.map((collection, index) => (
          <div key={index} className="mb-4">
            <img
              src={collection.image_url}
              alt={collection.name}
              className="w-full h-auto object-cover rounded-md shadow-lg"
            />
            {/* <div className="text-center text-gray-700 font-medium uppercase mt-2">
              {collection.name}
            </div> */}
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default SearchComponent2;
