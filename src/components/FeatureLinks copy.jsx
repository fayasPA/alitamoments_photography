import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureLinks = () => {
  useEffect(() => {
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: ".feature-links",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    animation.fromTo(
      ".feature-link",
      { opacity: 0, scale: 0.8, y: 50 },
      { opacity: 1, scale: 1, y: 0, stagger: 0.05, ease: "power2.out" }
    );

    return () => {
      if (animation) animation.kill();
    };
  }, []);

  return (
    <div className="feature-links py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {/* Feature 1 */}
          <div className="feature-link w-full md:w-1/4 p-4">
            <a
              href="/portfolio"
              className="block relative overflow-hidden group rounded-lg shadow-lg bg-white"
            >
              <div className="relative h-96 ">
                <img
                  src="/assets/images/portfolio.jpeg"
                  alt="Portfolio"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-500"></div>
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-pink-500 transition-colors">
                  Portfolio
                </h2>
                <p className="text-gray-600">See my work</p>
              </div>
            </a>
          </div>

          {/* Feature 2 */}
          <div className="feature-link w-full md:w-1/4 p-4">
            <a
              href="/about"
              className="block relative overflow-hidden group rounded-lg shadow-lg bg-white"
            >
              <div className="relative h-96">
                <img
                  src="/assets/images/about.jpeg"

                  alt="About Me"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-500"></div>
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-pink-500 transition-colors">
                  About Me
                </h2>
                <p className="text-gray-600">Get to know me better</p>
              </div>
            </a>
          </div>

          {/* Feature 3 */}
          <div className="feature-link w-full md:w-1/4 p-4">
            <a
              href="/blog"
              className="block relative overflow-hidden group rounded-lg shadow-lg bg-white"
            >
              <div className="relative h-96">
                <img
                  src="/assets/images/blog.jpeg"

                  alt="Blog"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-500"></div>
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-pink-500 transition-colors">
                  Blog
                </h2>
                <p className="text-gray-600">Read about our stories</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureLinks;
