import { useState } from "react";
import styles from "./Exer2.module.css";

import { motion, stagger } from "motion/react";

const variants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.4,
    },
  },
};

const listVariants = {
  initial: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const buttonVariants = {
  idle: {
    backgroundColor: "#FFF",
    transition: {
      duration: 5,
    },
  },
  loading: {
    backgroundColor: "#000",
    rotate: 180,
    transition: {
      duration: 2,
      repeatType: "reverse",
      repeat: Infinity,
    },
  },
  success: {
    backgroundColor: "#00ff00",
    transition: {
      duration: 4,
      ease: "linear",
    },
  },
};

function Exer2() {
  const [status, setStatus] = useState("idle");

  return (
    <div className={styles.wrapper}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className={styles.card}
      ></motion.div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className={styles.card}
      >
        <motion.h1 variants={variants}>Tytuł kart</motion.h1>
        <motion.p variants={variants}>Elo melo karta tuta</motion.p>
      </motion.div>

      <motion.div
        variants={listVariants}
        initial="initial"
        animate="visible"
        className={styles.list}
      >
        <motion.li variants={itemVariants}>Item 1</motion.li>
        <motion.li variants={itemVariants}>Item 2</motion.li>
        <motion.li variants={itemVariants}>Item 3</motion.li>
        <motion.li variants={itemVariants}>Item 4</motion.li>
      </motion.div>

      <button onClick={() => setStatus("idle")}>Idle</button>
      <button onClick={() => setStatus("loading")}>Loading</button>
      <button onClick={() => setStatus("success")}>Success</button>

      <motion.button
        variants={buttonVariants}
        animate={status}
        className={styles.button}
      >
        Button
      </motion.button>

      <div></div>
    </div>
  );
}

export default Exer2;
