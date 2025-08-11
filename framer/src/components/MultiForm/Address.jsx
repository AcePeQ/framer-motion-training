import { motion } from "motion/react";
import styles from "./Address.module.css";

function Address() {
  return (
    <motion.div className={styles.person}>
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
