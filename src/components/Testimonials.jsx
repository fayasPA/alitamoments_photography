import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/css/Testimonials.css"; // Add this CSS file for additional styles if needed

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { id: 1, name: "Danica W.", designation: "Founder of XYZ", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Peter H.", designation: "Founder of XYZ", text: "Ipsa nostrum labore dolor facilis.", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Max Q.", designation: "Founder of XYZ", text: "Dolor sit amet consectetur adipisicing elit.", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Jeff R.", designation: "Founder of XYZ", text: "Nostrum labore dolor facilis nesciunt.", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Ben S.", designation: "Founder of XYZ", text: "Adipisicing elit ipsum.", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Matthew I.", designation: "Founder of XYZ", text: "Facilis nesciunt facere mollitia nam.", image: "https://via.placeholder.com/150" },
];

const Testimonials = () => {
  React.useEffect(() => {
    // Animation for Row 1 (Left)
    gsap.to(".row-1", {
      x: "-100%",
      duration: 20,
      repeat: -1,
      ease: "linear",
    });

    // Animation for Row 2 (Right)
    gsap.to(".row-2", {
      x: "100%",
      duration: 20,
      repeat: -1,
      ease: "linear",
    });

    // Animation for Row 3 (Left)
    gsap.to(".row-3", {
      x: "-100%",
      duration: 20,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="testimonials-container bg-dark text-white py-10">
      <div className="relative overflow-hidden">
        <div className="gradient-overlay gradient-left"></div>
        <div className="gradient-overlay gradient-right"></div>

        {/* Row 1 */}
        <div className="testimonial-row row-1 flex space-x-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="testimonial-row row-2 flex space-x-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Row 3 */}
        <div className="testimonial-row row-3 flex space-x-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
    <h3 className="font-bold text-lg">{testimonial.name}</h3>
    <p className="text-sm text-gray-400">{testimonial.designation}</p>
    <p className="mt-2">{testimonial.text}</p>
  </div>
);

export default Testimonials;
