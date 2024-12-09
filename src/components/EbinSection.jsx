import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EbinSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Parallax effect for the main image
    gsap.fromTo(
      ".main-image",
      { y: 100 },
      {
        y: -100,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".main-image",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Parallax effect for the description text
    gsap.fromTo(
      ".description-text",
      { y: -100 },
      {
        y: 100,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".description-text",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Parallax effect for the "Ebin" title
    gsap.fromTo(
      ".piermarco-title",
      { y: -400 },
      {
        y: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".main-image",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Animate background to black when the section is at the center
          gsap.to(sectionRef.current, {
            backgroundColor: 'black',
            duration: 0.3, // Smooth transition
          });
        } else {
          // Animate background back to white when the section is not at the center
          gsap.to(sectionRef.current, {
            backgroundColor: 'white',
            duration: 0.3, // Smooth transition
          });
        }
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.3, // Trigger when 50% of the section is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };

  }, []);

  return (
    <div className="about-section bg-white text-white py-24"
      ref={sectionRef}
    >
      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-16 items-center">
        {/* Left Column: Image Section */}
        <div className="relative">
          {/* Main Image */}
          <img
            src="https://images.pixieset.com/85319848/060d37c5521fe0192ce54dfbd30bcd43-xxlarge.jpeg"
            alt="Founder"
            className="main-image w-full h-auto rounded-md object-cover"
          />
          {/* Inset Image */}
          {/* Title */}
          <div className="piermarco-title absolute bottom-4 left-4 text-4xl md:text-6xl font-bold text-white mix-blend-difference">
            Ebin Abraham
          </div>
        </div>

        {/* Right Column: Description Text */}
        <div className="description-text space-y-6 text-lg leading-relaxed">
          Preserving Timeless Memories, One Click at a Time"
          <p>
            Greetings! I'm a passionate event photographer dedicated to encapsulating those fleeting, once-in-a-lifetime moments in the vibrant tapestry of Indian and Malayali traditions.
          </p>

          <p>
            In the fast-paced whirlwind of events, I stand committed to never letting a precious memory slip away. With a keen eye for detail and an uncanny ability to anticipate those candid, unscripted moments, I ensure that every cherished instance is etched in time.
          </p>
          <p>
            What sets me apart is my intimate familiarity with Indian culture and traditions. This deep understanding allows me to seamlessly blend into the heart of your event, capturing not just the visuals, but the emotions that make each occasion unique. Whether it's a joyous wedding celebration, a lively cultural festival, or a heartwarming family gathering, I am your visual storyteller.
          </p>

          <p>
            I believe in more than just photography; I believe in creating a personalized experience for my clients. Your satisfaction is my ultimate goal, and I approach every event with the intention of leaving you with a treasure trove of memories you can hold close forever.
          </p>

          <p>
            Perhaps my journey into photography began from a personal desire. I understood the struggle of capturing a genuine, unguarded smile, and that inspired me to make it my mission to freeze those moments of pure happiness for others.
            Thank you for considering me to be a part of your special day. Let's embark on this visual journey together, and let me be the storyteller of your extraordinary moments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EbinSection;
