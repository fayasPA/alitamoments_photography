import React, { useEffect, useRef } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import Layout from './Layout';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Faq from './pages/Faq';
import Search from './pages/Search';
import HorizontalScroll from './components/HorizontalScroll';
import LocomotiveScroll from "locomotive-scroll";

export const TransitionWrapper = ({ children }) => {
  const location = useLocation(); // Get current route
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP animation: slide-in effect
      gsap.fromTo(
        containerRef.current,
        { x: '100%', opacity: 1 },
        { x: '0%', opacity: 1, ease: 'power2.out' }
      );
    });

    // Cleanup GSAP context
    return () => ctx.revert();
  }, [location]); // Re-run animation on route change

  return (<div className='overflow-hidden'>
    <div
      ref={containerRef}>
      {children}
    </div>
  </div>);
};

function App() {


  const locomotiveScroll = new LocomotiveScroll();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/horizontal-scroll" element={<HorizontalScroll />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
