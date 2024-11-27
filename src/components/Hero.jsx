import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Dynamically set the video ID based on screen width
let vidId = window.innerWidth > 768 ? "d2hYY2V1lh0" : "8cdCo40erIA";

window.onYouTubeIframeAPIReady = () => {
  // Create the YouTube player dynamically with the correct videoId
  new window.YT.Player("youtube-player", {
    videoId: vidId,
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 0,
      rel: 0,
      modestbranding: 1,
      mute: 1,
      playsinline: 1,
      playlist: vidId, // Ensure the playlist matches the videoId for looping
    },
  });
};


    // Animation for title
    const titleLetters = titleRef.current.querySelectorAll(".letter");
    gsap.fromTo(
      titleLetters,
      { opacity: 0, y: 50, scale: 0.5 },
      {
        opacity: 0.4,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        delay: 2,
        ease: "elastic.out(1, 0.5)",
      }
    );

    // Animation for subtitle
    const subtitleLetters = subtitleRef.current.querySelectorAll(".letter");
    gsap.fromTo(
      subtitleLetters,
      { opacity: 0, y: 50, scale: 0.5 },
      {
        opacity: 0.4,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        delay: 2.5, // Slightly delayed after the title
        ease: "elastic.out(1, 0.5)",
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {/* YouTube Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <div
            id="youtube-player"
            className="absolute w-full h-full top-0 left-0 pointer-events-none"
            style={{
              transform: "scale(1.3)",
              transformOrigin: "center",
            }}
          />
        </div>
        {/* Overlay to darken video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4">
        <h1
          ref={titleRef}
          className="text-white text-5xl md:text-7xl font-extrabold tracking-wide uppercase text-center"
          style={{
            textShadow: "0 2px 5px rgba(0, 0, 0, 0.8)",
          }}
        >
          {"Alita Moments".split("").map((char, i) => (
            <span key={i} className="letter inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        
        <p
          ref={subtitleRef}
          className="text-white text-xl md:text-3xl font-medium tracking-wider text-center"
          style={{
            textShadow: "0 2px 5px rgba(0, 0, 0, 0.8)",
          }}
        >
          {"Capturing stories frame by frame".split("").map((char, i) => (
            <span key={i} className="letter inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;