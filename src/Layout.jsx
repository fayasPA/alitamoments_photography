import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx';

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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      className="your-main-container bg-contain md:bg-contain bg-center min-h-screen flex flex-col bg-white"
    >
        <div className="flex-grow md:pb-0">
          <Navbar />

          <main className="flex-grow">
            <Outlet />
          </main>

          {/* <Footer /> */}
        </div>
    </div>
  );
};

export default Layout;