import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

const PageTransition = ({ children }) => {
  const transitionRef = useRef(null);
  const location = useLocation();

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // Animation for page transition
  //     gsap.fromTo(
  //       transitionRef.current,
  //       { x: "100%", opacity: 0 },
  //       { x: "0%", opacity: 1, duration: 1, ease: "power2.inOut" }
  //     );
  //   });

  //   return () => ctx.revert();
  // }, [location]);

  return (
    <div ref={transitionRef} className="overflow-hidden">
      {children}
    </div>
  );
};

export default PageTransition;
