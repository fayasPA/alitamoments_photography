import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Faq from './pages/Faq';
import Search from './pages/Search';
import PageTransition from './utils/PageTransition';
import HorizontalScroll from './components/HorizontalScroll';

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

  return (<div className=''>
    <div
      ref={containerRef}>
      {children}
    </div>
  </div>);
};


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
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/horizontal-scroll"
          element={
            <PageTransition>
              <HorizontalScroll />
            </PageTransition>
          }
        />

      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

