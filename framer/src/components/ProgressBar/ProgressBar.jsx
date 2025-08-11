import {
  useMotionValue,
  useTransform,
  motion,
  useSpring,
  useMotionValueEvent,
} from "motion/react";
import styles from "./ProgressBar.module.css";
import { useState } from "react";

function ProgressBar() {
  const progress = useMotionValue(0);
  const [percent, setPercent] = useState(0);

  const width = useTransform(progress, [0, 100], ["0%", "100%"]);

  const backgroundColor = useTransform(
    progress,
    [0, 50, 100],
    ["#ff0000", "#ffe600", "#1eff00"]
  );

  useMotionValueEvent(progress, "change", (latest) => {
    setPercent(latest);
  });

  return (
    <>
      <motion.div>Procenty: {percent}%</motion.div>

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
