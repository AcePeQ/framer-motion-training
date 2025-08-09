import { useState } from "react";
import styles from "./Gestures.module.css";

import { motion, scale } from "motion/react";

const colorChars = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "F",
];

const buttonVariants = {
  idle: {
    backgroundColor: "#0026ff",
    scale: 1,
  },
  hover: {
    backgroundColor: "#1f87ff",
    scale: 1.05,
  },
  tap: {
    backgroundColor: "#0051ff",
    scale: 0.95,
  },
};

const cardVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0 5px 10px #fff",
  },
  tap: {
    scale: 1.05,
  },
};

const dragBoxVariants = {
  drag: {
    scale: 1.1,
    rotate: 45,
    cursor: "grabbing",
  },
};

function Gestures() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const array = Array.from({ length: 5 });

  return (
    <div className={styles.wrapper}>
      <motion.button
        variants={buttonVariants}
        initial="idle"
        whileHover="hover"
        whileTap="tap"
      >
        Button
      </motion.button>

      <motion.div
        className={styles.card}
        variants={cardVariants}
        whileHover="hover"
        whileTap="tap"
        transition={{
          duration: 0.2,
        }}
      ></motion.div>

      <motion.div
        className={styles.box}
        variants={dragBoxVariants}
        whileDrag="drag"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      ></motion.div>

      <motion.input
        className={styles.input}
        type="text"
        initial={{ border: "2px solid transparent" }}
        placeholder="Wpisz cos..."
        whileFocus={{
          borderColor: "#001aff",
        }}
        transition={{
          duration: 0.3,
        }}
      />

      <motion.ul>
        {array.map((_, index) => {
          return (
            <motion.li
              key={index}
              animate={
                hoveredCard === null
                  ? { scale: 1, boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }
                  : hoveredCard === index
                  ? {
                      scale: 1.1,
                      boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
                      zIndex: 10,
                    }
                  : { scale: 0.95, opacity: 0.6 }
              }
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className={styles.card}>Item {index}</div>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}

export default Gestures;
