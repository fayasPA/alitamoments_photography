import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { homePageBgImg, testimonialBgImg } from '../utils/Constants';
import { testimonialsData } from '../assets/js/data';

const Testimonials = () => {

  return (
    <div className='bg-cover flex relative flex-col justify-center items-start px-2 md:px-5 py-10 md:py-20 text-white'
      style={{ backgroundImage: `url(${homePageBgImg})` }}
    >
      <div className='absolute inset-0 backdrop-blur-sm bg-black/60' />
      <div className="h-auto z-10">
        <h1 className="text-5xl md:text-[10rem] font-light pb-10 md:pb-10">
          Testimonials
        </h1>
      </div>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
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
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index} className='flex content-center rounded-lg bg-black/50'>
            <div className="flex flex-col rounded-lg py-4 gap-3 md:gap-4 items-center h-auto w-full">
              <div className="w-full px-4 rounded-lg text-lg md:text-xl">
                <p>{`"${testimonial.text}"`}</p>
              </div>
              <div>
              <span className="text-base md:text-lg">
                {`- ${testimonial.name}`}
              </span>
              <div className="flex justify-center items-center text-gold">
                {Array(5)
                  .fill(0)
                  .map((_, starIndex) => (
                    <span key={starIndex} className="text-gold text-lg text-[#D7BF72]">&#9733;</span>
                  ))}
              </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
