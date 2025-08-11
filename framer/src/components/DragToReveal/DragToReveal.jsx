import styles from "./DragToReveal.module.css";

import {
  useMotionValue,
  motion,
  useSpring,
  useTransform,
  animate,
} from "motion/react";

function DragToReveal() {
  const dragX = useMotionValue(0);

  const backgroundColor = useTransform(
    dragX,
    [-100, 0, 100],
    ["#5eff00", "#fff", "#ff0000"]
  );

  return (
    <motion.div
      className={styles.box}
      drag="x"
      onDragEnd={() => {
        animate(dragX, 0);
      }}
      style={{ x: dragX, backgroundColor }}
    ></motion.div>
  );
}

export default DragToReveal;
