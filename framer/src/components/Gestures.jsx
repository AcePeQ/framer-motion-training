import styles from "./Gestures.module.css";

import { motion } from "motion/react";

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

function Gestures() {
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
    </div>
  );
}

export default Gestures;
