import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { homePageSwiperData } from '../assets/js/data';
import { useNavigate } from 'react-router-dom';

const HomeHero = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeImage, setActiveImage] = useState({});
  const navigate = useNavigate(); // Initialize navigate

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

    return (
        <div className='bg-cover flex relative flex-col justify-center items-start text-white h-screen'
        >
            <Swiper
                spaceBetween={0}
                freeMode={true}
                loop={true}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                speed={5000}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1, // For small screens
                    },
                    768: {
                        slidesPerView: 4, // For medium and larger screens
                    },
                }}
                modules={[Autoplay, FreeMode, Pagination]}
                className="mySwiper w-full h-full flex justify-center items-center"
            >
                {homePageSwiperData.map((collection, index) => {
                    const isHovered = hoveredIndex === index;
                    const currentImage = activeImage[index] ?? 0;

                    return (
                        <SwiperSlide key={index} className='flex content-center h-full bg-selRedDark'>
                            <div
                                key={index}
                                className="group relative h-full" // Add class for GSAP animation
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                                onClick={() => handleImageClick(collection.id)} // Handle click
                            >
                                {/* Image */}
                                <img
                                    src={collection.image_url[currentImage]}
                                    alt={collection.name}
                                    className={`w-full h-full object-cover transition-transform duration-[2000ms] ${isHovered ? 'scale-105' : 'scale-100'
                                        }`}
                                />
                                {/* Name */}
                                <div className="font-bold text-xs md:text-xl uppercase absolute bottom-0 left-0 right-0 text-transparent transition-all duration-300 group-hover:text-white pl-2 text-start ease-in-out">
                                    {collection.name}
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default HomeHero;
