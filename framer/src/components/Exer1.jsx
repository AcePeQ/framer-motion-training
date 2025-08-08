import { motion } from "motion/react";

import styles from "./Exer1.module.css";

function Exer1() {
  return (
    <div className={styles.wrapper}>
      <motion.div
        initial={{ backgroundColor: "#ff0000", x: -200 }}
        animate={{ backgroundColor: "#0051ff", x: 0 }}
        transition={{ duration: 2 }}
        className={styles.box}
      ></motion.div>

      <motion.button
        initial={{ backgroundColor: "#ff0000" }}
        whileHover={{
          scale: 1.1,
          backgroundColor: "#0026ff",
        }}
        transition={{ duration: 0.3 }}
        className={styles.hoverButton}
      >
        Hover me
      </motion.button>

      <motion.div
        className={styles.box}
        initial={{ backgroundColor: "#fff" }}
        animate={{ rotate: 360 }}
        transition={{ delay: 1, ease: "backOut" }}
      ></motion.div>

      <motion.div
        className={styles.box}
        initial={{ y: -100, scale: 0.8, background: "#fff" }}
        animate={{ y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
      ></motion.div>

      <motion.div
        className={styles.box}
        initial={{ scale: 1, background: "#fff" }}
        animate={{ scale: 1.2 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
    </div>
  );
}

export default Exer1;
