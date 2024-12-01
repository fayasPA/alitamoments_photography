import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "WHAT IS THE BOOKING PROCESS?",
      answer:
        "We operate on a first-come, first-served basis and take a limited number of weddings each year. To secure your date, a retainer and signed contract are required. Unfortunately, we cannot hold dates without a deposit and a signed agreement.\n\nOnce you've selected your wedding package, please email us with all the details. We will then send you an online quote and contract, which can be e-signed. To officially book your wedding with us, we require a 50% deposit, with the remaining balance due three weeks before your wedding day.",
    },
    {
      question: "DO YOU TRAVEL?",
      answer:
        "Yes, we do! We absolutely love traveling! In fact, we’re most inspired when photographing in new locations. No matter where you choose to say 'I do,' we’re excited and ready to be there with you.\n\nTo ensure a smooth experience and avoid any travel delays, we arrive the day before your event and depart the day after. This also gives us the opportunity to scout your venue ahead of time, ensuring everything is perfect for your big day.",
    },
    {
      question: "WHEN DO WE RECEIVE OUR IMAGES?",
      answer:
        "We deeply understand the excitement of receiving your images promptly! Our typical turnaround time for image delivery depends on the service or package you've chosen.\n\nFor our standard packages, you can expect to receive your images within 3-4 months from the date of your session or event.\n\nIf you’ve selected any expedited services, the delivery time will be shorter. We also offer Express Delivery in one month, one of the most popular services.",
    },
    {
      question: "WHATS A WEDDING LIKE WITH YOU?",
      answer:
        "At Bottega 53 Studio, we focus on capturing the true essence of your day, meaning we won't just photograph from a distance. We capture candid, unposed moments that reflect the raw emotions and connections of your day.",
    },
    {
      question: "DO YOU SHOOT FILIM OR DIGITAL?",
      answer:
        "We choose to shoot digitally for the freedom it offers, allowing your wedding day to unfold naturally and effortlessly. However, we also shoot on film, embracing its timeless quality to capture the true essence of your emotions.",
    },
    {
        question: "DO YOU ALSO DELIVER RAW FILES?",
        answer:
          "Yes, we can provide raw files upon request, though additional charges may apply as raw files are unprocessed versions of your images.",
      },
      {
        question: "DO YOU PHOTOSHOP IMAGES?",
        answer:
          "Yes, we edit all delivered images for color correction, exposure, and artistic enhancements. Let us know if you have specific editing preferences.",
      },
      {
        question: "DO YOU CARRY INSURANCE?",
        answer:
          "Yes, we are fully insured, including liability insurance, for peace of mind during your events.",
      },
  ];

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
        <h1 className="text-8xl md:text-[180px] font-bold pt-28 pb-10">
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
                  openQuestion === index ? "max-h-96" : "max-h-0"
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
