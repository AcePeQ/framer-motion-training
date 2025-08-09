import { useState } from "react";
import styles from "./Slider.module.css";

import { AnimatePresence, motion } from "motion/react";

const items = [
  { title: "Elo", message: "Elo" },
  { title: "Elo2", message: "Elo2" },
  { title: "Elo3", message: "Elo3" },
  { title: "Elo4", message: "Elo4" },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  return (
    <>
      <div className={styles.slider}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ x: direction * 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -100, opacity: 0 }}
            className={styles.sliderItem}
          >
            <h1>{items[currentSlide].title}</h1>
            <p>{items[currentSlide].message}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.buttons}>
        <button
          onClick={() => {
            setDirection(-1);
            setCurrentSlide((prev) => prev - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setDirection(1);
            setCurrentSlide((prev) => prev + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Slider;
