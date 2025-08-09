import { useState } from "react";
import styles from "./AnimatePresence.module.css";

import { motion, AnimatePresence, wrap } from "motion/react";

function AnimatePresenceComp() {
  const [isBoxShowed, setIsBoxShowed] = useState(false);

  return (
    <div className={styles.wrapper}>
      <AnimatePresence>
        {isBoxShowed && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className={styles.box}
          ></motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsBoxShowed((prev) => !prev)}
        className={styles.button}
      >
        {isBoxShowed ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default AnimatePresenceComp;
