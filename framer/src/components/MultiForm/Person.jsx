import { motion } from "motion/react";
import styles from "./Person.module.css";

function Person() {
  return (
    <motion.div className={styles.person}>
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
