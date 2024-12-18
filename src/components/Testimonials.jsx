import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";


const testimonials = [
  {
    id: 1,
    name: "John Doe",
    message: "This product has changed our lives for the better!",
  },
  {
    id: 2,
    name: "Jane Smith",
    message: "Absolutely love this! Highly recommended.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    message: "A fantastic solution to a common problem.",
  },
  {
    id: 4,
    name: "Michael Brown",
    message: "Customer support is phenomenal. Great experience.",
  },
  {
    id: 5,
    name: "Sarah Williams",
    message: "Top-notch quality and seamless performance.",
  },
];

const TestimonialSlider = () => {
  const rowRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    rowRefs.forEach((rowRef, index) => {
      gsap.to(rowRef.current, {
        xPercent: -100, // Move from right to left
        duration: 20, // Speed of animation
        repeat: -1, // Infinite looping
        ease: "linear", // Smooth linear animation
        modifiers: {
          xPercent: gsap.utils.wrap(-100, 0), // Wrap the animation for infinite effect
        },
      });
    });
  }, []);

  return (
    <section className="relative w-full bg-gray-900 text-white py-12 overflow-hidden">
      <h2 className="text-center text-3xl font-bold mb-8">Testimonials</h2>

      {/* Three Rows of Testimonials */}
      <div className="space-y-6">
        {rowRefs.map((rowRef, rowIndex) => (
          <div key={rowIndex} className="w-full overflow-hidden">
            <div
              ref={rowRef}
              className="flex space-x-6"
              style={{ width: "max-content" }}
            >
              {/* Duplicate Testimonials for Infinite Effect */}
              {[...testimonials, ...testimonials].map((testimonial, i) => (
                <div
                  key={`${rowIndex}-${testimonial.id}-${i}`}
                  className="bg-gray-800 p-4 rounded-lg shadow-md min-w-[250px] md:min-w-[300px]"
                >
                  <p className="text-sm text-gray-300 mb-2">
                    "{testimonial.message}"
                  </p>
                  <h4 className="text-gray-100 font-semibold">
                    - {testimonial.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;
