import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: "Anitta Francis.", designation: "Founder of XYZ", text: "Amazing photographer and videographer- love how he’s able to capture people from various cultural backgrounds and myriad events. He also super flexible/willing to work around your schedule. Highly recommend!!", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Aksa Merin Santhosh.", designation: "Founder of XYZ", text: "Loved working with Ebin for my grad shoot. He was super patient and resourceful and we loved the how everything came out. Would def recommend!!", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Swathy Philip", designation: "Founder of XYZ", text: "I had the opportunity to closely work with Alita moments couple of times. First was for my wedding, they were jus awesome and also recently for our Boutique shoot.", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Emil Abraham", designation: "Founder of XYZ", text: "Their ability to capture candid moments with such natural elegance was truly remarkable. The photos and videos turned out absolutely stunning, with every detail beautifully preserved. It’s clear they use top-notch equipment and have a real passion for storytelling through their work. If you’re looking for someone who will go above and beyond to make your special moments unforgettable, I highly recommend Alita Moments. They are a joy to work with and deliver exceptional quality every time!", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Melvin Biju", designation: "Founder of XYZ", text: "Ebin took my grad pics in dec ‘23 and those were some of the best pics of me ever taken. He was so considerate of my wishes and also helped me pose and be more comfortable. He tried different shots and different angles, and in the end I had a variety of edited finished pics. I’m so so happy with the result and I’d 100% recommend him!!", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className='flex flex-col justify-center items-start px-2 md:px-5 py-10 md:py-20 bg-white'>
      <div className="h-auto">
        <h1 className="text-6xl md:text-[10rem] font-light pb-10 md:pb-10">
          Testimonials
        </h1>
      </div>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 2000,
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
        className="mySwiper w-full h-full bg-white flex justify-center items-center"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className='flex content-center text-black rounded-lg'>
            <div className="border flex flex-col rounded-lg py-4 gap-3 md:gap-4 items-center h-auto w-full">
            <div className="w-full px-4 rounded-lg">
                <p>{`"${testimonial.text}"`}</p>
              </div>
              <div className="flex justify-center items-center text-gold">
                {Array(5)
                  .fill(0)
                  .map((_, starIndex) => (
                    <span key={starIndex} className="text-gold text-lg text-[#D7BF72]">&#9733;</span>
                  ))}
              </div>
              <span className="font-poiret font-bold">
                {`- ${testimonial.name}`}
              </span>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
