import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';


const Layout = () => {


  return (
    <div
      className="your-main-container bg-contain md:bg-contain bg-center min-h-screen flex flex-col bg-white"
      style={{backgroundImage: 'url(/assets/images/blog.jpeg'}}
    >
        <div className=" flex-grow md:pb-0">
          <Navbar />

          <main className="flex-grow">
            <Outlet />
          </main>

          <Footer />

        </div>
    </div>
  );
};

export default Layout;
