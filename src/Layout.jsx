import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx';
import ScrollToTop from './utils/ScrollToTop.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import LocomotiveScroll from 'locomotive-scroll';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust time as needed

    // Cleanup timeout if component unmounts
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="your-main-container bg-contain md:bg-contain bg-center flex flex-col bg-white">
      <div className="flex-grow md:pb-0">
        <ToastContainer toastClassName="custom-toast" />

        <Navbar />

        <main className={`main-container-transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <Outlet />
        </main>

        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Layout;
