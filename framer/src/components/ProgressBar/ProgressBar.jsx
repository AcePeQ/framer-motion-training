import { useMotionValue, useTransform, motion } from "motion/react";
import styles from "./ProgressBar.module.css";

function ProgressBar() {
  const progress = useMotionValue(0);

  const width = useTransform(progress, [0, 100], ["0%", "100%"]);

  const backgroundColor = useTransform(
    progress,
    [0, 50, 100],
    ["#ff0000", "#ffe600", "#1eff00"]
  );

  return (
    <>
      <input
        className={styles.range}
        type="range"
        defaultValue={0}
        onChange={(e) => progress.set(e.target.value)}
      />

      <motion.div
        style={{ width, backgroundColor }}
        className={styles.bar}
      ></motion.div>
    </>
  );
}

export default ProgressBar;
