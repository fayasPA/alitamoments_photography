import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faqData } from "../assets/js/data";

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  

  useEffect(() => {
    // Split the "FAQ" text into individual letters and animate them
    const letters = document.querySelectorAll(".faq-letter");
    const tl = gsap.timeline();
    tl.fromTo(
      letters,
      { x: -1000, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2.6,
        stagger: 0.3, // Delay each letter by 0.1s
      }
    );

    // GSAP ScrollTrigger animation for FAQ items
    gsap.utils.toArray(".faq-item").forEach((faqItem) => {
      gsap.fromTo(
        faqItem,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: faqItem,
            start: "top 80%", // Animation starts when 80% of the element is in view
            end: "top 20%",
            scrub: true, // Smooth animation on scroll
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div>
        <h1 className="text-7xl md:text-[10rem] font-light mt-20 md:mt-28 pb-14 md:pb-10 pl-4 md:pl-5">
          <span className="faq-letter">F</span>
          <span className="faq-letter">A</span>
          <span className="faq-letter">Q</span>
        </h1>
      </div>

      <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4">
        <div className="max-w-xs md:max-w-xl w-full text-center">
          {faqData.map((item, index) => (
            <div key={index} className="mb-12 faq-item">
              <h2
                onClick={() => toggleQuestion(index)}
                className="text-2xl md:text-5xl font-bold cursor-pointer transition-all duration-300 ease-in-out hover:text-gray-300"
              >
                {item.question}
              </h2>
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  openQuestion === index ? "max-h-fit" : "max-h-0"
                }`}
              >
                <p className="mt-4 text-sm md:text-lg text-black font-semibold">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
