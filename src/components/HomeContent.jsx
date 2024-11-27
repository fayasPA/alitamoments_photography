import React from 'react'
import { collections } from '../assets/js/data';

const HomeContent = () => {
    return (
      <div className=" mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection, index) => (
            <div key={index} className="relative">
              {/* Image */}
              <img 
                src={collection.image_url} 
                alt={collection.name} 
                className="w-full h-[50vh] md:h-[80vh] object-cover" 
              />
              {/* Name */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4 text-center">
                {collection.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default HomeContent;