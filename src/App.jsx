import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Faq from './pages/Faq';
import Search from './pages/Search';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
         <Route path="" element={<Home />} />
         <Route path="/contact" element={<Contacts />} />
         <Route path="/portfolio" element={<Portfolio />} />
         <Route path="/faq" element={<Faq />} />
         <Route path="/search" element={<Search />} />
         <Route path="/about" element={<About />} />
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
