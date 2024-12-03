import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel cards={cards} />
    </div>
  );
};

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
              </div>

              {/* Subsequent cards with images */}
              {cards.slice(0).map((card) => (
                <div
                  key={card.id}
                  className="group relative h-[80vh] w-[50vw] overflow-hidden bg-neutral-200"
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

export default Example;
