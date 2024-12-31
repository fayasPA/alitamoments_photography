import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Services from './pages/Services';
import Faq from './pages/Faq';
import Search from './pages/Search';
import PageTransition from './utils/PageTransition';
import SpecificImage from './pages/SpecificImage';
import Portfolio from './pages/Portfolio';
import About from './pages/About';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          path=""
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/portfolio"
          element={
            <PageTransition>
              <Portfolio />
            </PageTransition>
          }
        />
        <Route
          path="/specific-image/:collectionId/*"
          element={
            <PageTransition>
              <SpecificImage />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contacts />
            </PageTransition>
          }
        />
        <Route
          path="/faq"
          element={
            <PageTransition>
              <Faq />
            </PageTransition>
          }
        />
        <Route
          path="/search"
          element={
            <PageTransition>
              <Search />
            </PageTransition>
          }
        />
        <Route
          path="/services"
          element={
            <PageTransition>
              <Services />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

