import styles from "./Summary.module.css";

import { motion } from "motion/react";

function Sumary() {
  return (
    <motion.div className={styles.person}>
      <p>Wszystko git dobrze fajnie ze sie zrobilo elo</p>
    </motion.div>
  );
}

export default Sumary;
