import { formVariants } from "./MultiForm";
import styles from "./Summary.module.css";

import { motion } from "motion/react";

function Sumary({ direction }) {
  return (
    <motion.div
      variants={formVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={direction}
      className={styles.person}
    >
      <p>Wszystko git dobrze fajnie ze sie zrobilo elo</p>
    </motion.div>
  );
}

export default Sumary;
