import { useEffect, useRef } from "react";
import styles from "./Tracker.module.css";
import { useMotionValue, motion, useSpring } from "motion/react";

function Tracker() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 100, damping: 20 });
  const y = useSpring(rawY, { stiffness: 100, damping: 20 });

  const root = useRef();

  useEffect(() => {
    const rootElement = root.current;

    function handleMove(e) {
      const rect = rootElement.getBoundingClientRect();
      rawX.set(e.clientX - rect.left);
      rawY.set(e.clientY - rect.top);
    }

    rootElement.addEventListener("mousemove", handleMove);

    return () => rootElement.removeEventListener("mousemove", handleMove);
  }, [rawX, rawY]);

  return (
    <div ref={root} className={styles.tracker}>
      <motion.div className={styles.box} style={{ x, y }}></motion.div>
    </div>
  );
}

export default Tracker;
