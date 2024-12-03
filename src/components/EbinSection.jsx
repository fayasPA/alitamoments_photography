import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EbinSection = () => {
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

    // Parallax effect for the inset image
    gsap.fromTo(
      ".inset-image",
      { y: 50 },
      {
        y: -50,
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
      { y: -600 },
      {
        y: -100,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".piermarco-title",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="bg-black text-white py-24">
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
          <div className="absolute top-4 left-4 bg-black p-2 rounded-md inset-image shadow-lg">
            <img
              src="https://images.pixieset.com/85319848/5133670e80eae2ffdd563582157ed154-xxlarge.jpeg"
              alt="Inset"
              className="w-32 h-40 object-cover rounded-sm"
            />
            <p className="text-xs font-bold mt-2 text-center text-white">
              FOUNDER
            </p>
          </div>
          {/* Title */}
          <div className="piermarco-title absolute bottom-4 left-4 text-6xl font-bold text-white">
            Ebin Abraham
          </div>
        </div>

        {/* Right Column: Description Text */}
        <div className="description-text space-y-6 text-lg leading-relaxed">
          <p>
            If I could capture Piermarco in a cinematic sequence, that would be
            a Triumph Scrambler motorbike on the Route 66 with the horizon in
            the distance and the asphalt boiling hot underneath his wheels. A
            constant mover, a California dreamer (and surfer) his congenial
            nature and contagious smile instantly puts you at ease.
          </p>
          <p>
            We built our wedding photography brand in London four years ago and
            since then we have worked together continuously, developing aside
            from our friendship and romance, a delightful professional intimacy.
            Piermarco's inner eye for everything elegant is something he was
            born with, and he has honed his skills over decades to breathtaking
            perfection.
          </p>
          <p>
            Quiet and considerate, but clear about what he wants, he is a
            disciplined romantic with a unique ability to capture the essence of
            our couples. I'm happy to say – and working next to him bears me
            out – that he does not tell the story of a bride and groom, but the
            story around them, describing the time, the place, and the couple
            with a flair that a simple camera medium itself, no matter how
            striking, could never accomplish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EbinSection;
