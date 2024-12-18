import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css'; 

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

const Testimonials = () => {

  const testimonials = [
    { id: 1, name: "Anitta Francis.", designation: "Founder of XYZ", text: "Amazing photographer and videographer- love how he’s able to capture people from various cultural backgrounds and myriad events. He also super flexible/willing to work around your schedule. Highly recommend!!", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Aksa Merin Santhosh.", designation: "Founder of XYZ", text: "Loved working with Ebin for my grad shoot. He was super patient and resourceful and we loved the how everything came out. Would def recommend!!", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Swathy Philip", designation: "Founder of XYZ", text: "I had the opportunity to closely work with Alita moments couple of times. First was for my wedding, they were jus awesome and also recently for our Boutique shoot.", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Emil Abraham", designation: "Founder of XYZ", text: "Their ability to capture candid moments with such natural elegance was truly remarkable. The photos and videos turned out absolutely stunning, with every detail beautifully preserved. It’s clear they use top-notch equipment and have a real passion for storytelling through their work./nIf you’re looking for someone who will go above and beyond to make your special moments unforgettable, I highly recommend Alita Moments. They are a joy to work with and deliver exceptional quality every time!", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Melvin Biju", designation: "Founder of XYZ", text: "Ebin took my grad pics in dec ‘23 and those were some of the best pics of me ever taken. He was so considerate of my wishes and also helped me pose and be more comfortable. He tried different shots and different angles, and in the end I had a variety of edited finished pics. I’m so so happy with the result and I’d 100% recommend him!!", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Sophia Abraham", designation: "Founder of XYZ", text: "Extremely talented photographer who also brings joy and laughter to each of the sessions!! Ebin and his team goes above and beyond to make sure you're well taken care of and the moment is captured beautifully and to your liking! He is attentive to your needs and desires for the photo and will spend hours to make sure it's edited and processed to your satisfaction./nThanks for such a fun experience and for the beautiful pictures, they turned out great!!", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Marina Francis", designation: "Founder of XYZ", text: "Ebin is very professional and flexibile to work with! He showed up for my friend’s college graduation photo session that she scheduled pretty last minute. he was very excited to ensure her vision and used his artistic eye for great spots for photos and poses. He is excellent!", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Jimmy Francis", designation: "Founder of XYZ", text: "Alita moments takes great photos for any event. They've been professional and with a good turn around with excellent images and videos", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Jesnie Sajen", designation: "Founder of XYZ", text: "Had the pleasure of working with an amazing and dedicated professional, who made me feel comfortable. Ebin went above and beyond to capture all the moments and memories. Very hardworking and talented photographer, Ebin exceeded my expectations with his top-notch skills and his creative ideas. Would recommend 💯 …", image: "https://via.placeholder.com/150" },
  ];
  return (
    <>
      <div className='flex justify-center items-center'>
        <Swiper
          slidesPerView={4}
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
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper w-full h-full bg-white gap-6"
        >
          {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className='flex content-center border rounded-lg m-10'>
            <div
              className={`flex ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              } items-center h-96 w-full`}
            >
              <div
                className={`${
                  index % 2 === 0 ? 'mt-0 mb-auto' : 'mt-auto mb-0'
                } w-full border p-4 rounded-lg`}
              >
                <p className="text-white">{testimonial.text}</p>
              </div>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Testimonials;
