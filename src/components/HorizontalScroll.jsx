import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TransitionWrapper } from "../App";

const Example = () => {
  const location = useLocation();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch or get your data from location or any dynamic source
    if (location.state && location.state.image_url && location.state.name) {
      // Ensure at least three images are present
      const dynamicCards = location.state.image_url.slice(0, 3).map((url, index) => ({
        url: url,
        title: location.state.name,
        id: index + 1,
      }));
      setCards(dynamicCards);
    }
  }, [location.state]);

  return (
    <>
      <TransitionWrapper>
        <div className="bg-neutral-800">
          {/* Large Screen Layout */}
          <div className="hidden lg:block">
            <HorizontalScrollCarousel cards={cards} />
          </div>

          {/* Small Screen Layout */}
          <div className="lg:hidden">
            <VerticalImageDisplay cards={cards} />
          </div>
        </div>
      </TransitionWrapper>
    </>
  );
};

// Horizontal Scroll Carousel for Large Screens
const HorizontalScrollCarousel = ({ cards }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", `-${(cards.length - 1) * 50}vw`]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.length > 0 && (
            <>
              {/* First card with title */}
              <div className="relative w-[50vw] h-[80vh] flex justify-center items-center bg-white">
                <p className="text-4xl font-serif uppercase text-black">
                  {cards[0].title}
                </p>
                {/* Clickable text link with hover animation */}
                <a
                  href="https://galleries.pixieset.com/collections?page=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 text-3xl font-serif text-slate-300 hover:text-black group"
                >
                  Browse collection
                  <span className="absolute inset-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              </div>

              {/* Subsequent cards with images */}
              {cards.slice(0).map((card) => (
                <div
                  key={card.id}
                  className="group relative h-[100vh] w-[50vw] overflow-hidden bg-neutral-200"
                >
                  <div
                    style={{
                      backgroundImage: `url(${card.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// Vertical Image Display for Small Screens
const VerticalImageDisplay = ({ cards }) => {
  return (
    <section className="bg-white">
      {cards.length > 0 && (
        <>
          {/* First card with title */}
          <div className="relative w-full h-[80vh] flex justify-center items-center bg-white">
            <p className="text-4xl font-serif uppercase text-black">{cards[0].title}</p>
            {/* Clickable text link */}
            <a
              href="https://galleries.pixieset.com/collections?page=1"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 text-3xl font-serif text-slate-300 hover:text-black"
            >
              Browse collection
            </a>
          </div>

          {/* Cards displayed vertically */}
          {cards.slice(0).map((card) => (
            <div
              key={card.id}
              className="relative w-full h-[60vh] overflow-hidden bg-neutral-200"
            >
              <div
                style={{
                  backgroundImage: `url(${card.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300"
              />
            </div>
          ))}
        </>
      )}
    </section>
  );
};

export default Example;
