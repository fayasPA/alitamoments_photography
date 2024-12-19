import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

const RightCard = ({
  link = "#" // Default to "#" if no link is provided
}) => {

  return (
    <div
      className={`relative w-full md:w-[30vw] h-[50vh] md:h-full flex justify-center items-center flex-col flex-shrink-0 `}
    >

      <a href={link} target='blank' className='group uppercase flex flex-col justify-center items-center md:text-black/20 hover:text-black text-xl md:text-6xl font-bold border p-6 border-black/20 hover:border-black hover:scale-110 transition-all duration-500 relative'>
        <span>Browse</span>
        <div className='relative flex justify-center items-center'>
          <span className='text-2xl md:text-7xl'>More</span>
          <MdOutlineArrowRightAlt className='hidden md:flex absolute text-3xl md:text-7xl text-black group-hover:text-black/0 transition-all duration-500' />
        </div>
        <span>Photos</span>
      </a>

    </div>
  );
};

export default RightCard;
