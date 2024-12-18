import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useParams } from 'react-router-dom';
import { collections } from '../assets/js/data';
import RightCard from '../components/RightCard';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const SpecificImage = () => {
  const { collectionId } = useParams();
  const [cards, setCards] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Fetch or get your data from location or any dynamic source
    if (collectionId) {
      const selectedCollection = collections.find(collection => collection.id === Number(collectionId));
      if (selectedCollection) {
        setCards(selectedCollection);
      } else {
        console.error(`Collection with id ${collectionId} not found`);
      }
    }
  }, []);


  useEffect(() => {
    const container = scrollContainerRef.current;

    // GSAP horizontal scroll animation for below md
    if (window.innerWidth > 768 && cards.length != 0) {
      gsap.to(container, {
        x: () => -(container.scrollWidth - document.documentElement.clientWidth) + 'px',
        xPercent: -5,  // Scroll horizontally
        ease: 'none',
        scrollTrigger: {
          trigger: '.work-container',
          start: 'top top',
          end: 'bottom top', // Set the end of the scroll animation
          scrub: 1, // Sync the animation with the scroll
          pin: '.work-container', // Pin the container while scrolling
          markers: false, // Disable markers for debugging
        },
      });
    }
    // Cleanup ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, [cards]);

  return (
    <section className=''>
      <div className="flex w-full md:h-screen work-container mb-20 overflow-x-hidden">
        <div
          className="flex flex-col md:flex-row h-full min-w-full"
          ref={scrollContainerRef}
        >
          {/* Left side with centered text */}
          <div className={`relative w-full md:w-1/2 h-screen md:h-full flex justify-center items-center flex-col flex-shrink-0 ${cards.image_url?.[0] ? 'bg-cover bg-center' : ''}`}
            style={{
              backgroundImage: window.innerWidth < 768 && cards.image_url?.[0]
                ? `url(${cards.image_url[0]})`
                : 'none',
            }}
          >
            {/* Overlay for text */}
            <div
              className="absolute md:hidden inset-0 bg-black bg-opacity-40"
              style={{
                boxShadow: 'inset 1vw 1vw 10rem rgba(0, 0, 0, 1)',
              }}
            />

            {/* <div className="relative z-10 text-center">
              <p className="text-xl md:text-4xl uppercase text-white md:text-black">
                {cards.name}
              </p>
            </div> */}

            <div className="block text-xl relative z-10 text-white md:text-black">
              <div>
              <p className="text-xl md:text-4xl uppercase">
                {cards.name}
              </p>
              </div>
              <div className='text-center flex flex-col items-center md:hidden uppercase font-extralight mt-5'>
              <span className="text-[.6rem] font-extralight font-sans">Scroll for more</span>
              <MdKeyboardDoubleArrowDown className="text-xs md:text-xl animate-ping" />
              </div>
            </div>


          </div>

          {/* Right side with images */}
          {cards.image_url?.map((image, index) => (
            <div
              key={index}
              className={`${index === 0 ? 'w-full md:w-[50vw]' : 'w-full md:w-[40vw]'
                } ${index > 0 && 'md:pl-[6rem] md:py-[4rem]'} h-screen md:h-full flex justify-center items-center flex-shrink-0`}
            >
              <img
                src={image}
                alt={`Card ${index}`}
                className="w-full h-full object-cover shadow-lg"
              />


            </div>


          ))}
          <RightCard link={cards.collection_link}/>
        </div>
      </div>
    </section>
  );
};

export default SpecificImage;
