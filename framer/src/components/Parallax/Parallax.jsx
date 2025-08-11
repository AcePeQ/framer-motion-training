import { useMotionValue, useTransform, motion, useScroll } from "motion/react";
import styles from "./Parallax.module.css";
import { useRef } from "react";

function Section({ bgClass, title, text }) {
  const ref = useRef(null);

  // Obserwujemy scroll dla tej sekcji
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax: tło porusza się wolniej
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  // Skalowanie tytułu
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <motion.section
      ref={ref}
      style={{ scale, y: yBg }}
      className={`${styles.section} ${bgClass}`}
    >
      {/* Treść */}
      <div className={styles.content}>
        <h1 className={styles.sectionTitle}>{title}</h1>
        <p>{text}</p>
      </div>
    </motion.section>
  );
}

function Parallax() {
  return (
    <>
      <Section
        bgClass={styles.bg1}
        title="Sekcja 1"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Section
        bgClass={styles.bg2}
        title="Sekcja 2"
        text="Proin sit amet justo eget est feugiat laoreet."
      />
      <Section
        bgClass={styles.bg3}
        title="Sekcja 3"
        text="Donec euismod risus in ipsum fermentum, eget porttitor sapien feugiat."
      />
    </>
  );
}

export default Parallax;
