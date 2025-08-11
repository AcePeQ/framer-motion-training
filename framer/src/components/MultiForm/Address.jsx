import { motion, usePresenceData } from "motion/react";
import styles from "./Address.module.css";
import { formVariants } from "./MultiForm";

function Address({ direction }) {
  return (
    <motion.div
      variants={formVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={direction}
      className={styles.person}
    >
      <label>Miasto</label>
      <input />

      <label>Kod Pocztowy</label>
      <input />

      <label>Adres</label>
      <input />
    </motion.div>
  );
}

export default Address;
