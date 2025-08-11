import { motion } from "motion/react";
import styles from "./Person.module.css";
import { formVariants } from "./MultiForm";

function Person({ direction }) {
  return (
    <motion.div
      variants={formVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={direction}
      className={styles.person}
    >
      <label>Imie</label>
      <input />

      <label>Naziwsko</label>
      <input />

      <label>Adres</label>
      <input />
    </motion.div>
  );
}

export default Person;
