import React, { useEffect, useRef } from "react";
import gsap from "gsap";

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

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = container.querySelectorAll(".testimonial-card");

    // Infinite scrolling effect using GSAP
    gsap.to(cards, {
      xPercent: -100 * (cards.length / 2 - 1), // Move through all cards, adjusted for duplication
      ease: "none",
      duration: (cards.length / 2) * 5, // Adjust duration for scrolling speed
      repeat: -1, // Infinite loop
      modifiers: {
        xPercent: gsap.utils.wrap(-100 * (cards.length / 2 - 1), 0),
      },
    });
  }, []);

  const duplicateTestimonials = [...testimonials, ...testimonials]; // Duplicate testimonials for infinite scrolling

  return (
    <div className="h-screen">
      <div className="h-[20vh]">
        <h1 className="text-7xl md:text-[10rem] font-light mt-20 md:mt-28 pb-14 md:pb-10 text-white">
          Testimonials
        </h1>
      </div>
      <div
        ref={containerRef}
        className="relative flex w-full h-[80vh] items-center justify-center overflow-hidden"
      >
        {duplicateTestimonials.map((testimonial, index) => (

          <div 
            key={index}
          className={`testimonial-card h-fit w-[300px] div bg-white m-4 rounded-[1em] relative group shadow-lg p-4 z-0 flex-none overflow-hidden flex flex-col justify-between gap-10 ${
               index % 2 === 0 ? "self-start mt-20" : "self-end mb-20"
             }`}>
            {/* Gradient background */}
            <div className="z-[-1] h-full w-[200%] rounded-[1em] bg-gradient-to-br from-green-400 via-lime-400 to-yellow-400 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[300%] duration-500 origin-bottom-right"></div>

            {/* Button */}
            {/* <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-white">
              <span className="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-white duration-50 before:bottom-0 before:left-0">
                {testimonial.text}
              </span>
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </button> */}

            {/* Heading */}
            <h1 className="z-20 font-bold font-Poppin group-hover:text-white delay-150 text-[1.4em]">
              {testimonial.name}
            </h1>
            <span className="text-right">{testimonial.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
