import { useEffect, useRef } from "react";
import styles from "./Card3D.module.css";

import {
  useMotionValue,
  useTransform,
  motion,
  useSpring,
  useMotionValueEvent,
} from "motion/react";

function Card3D() {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateY = useTransform(mouseX, [-200, 200], [-30, 30]);
  const rotateX = useTransform(mouseY, [-200, 200], [30, -30]);

  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const card = cardRef.current;

    function handleRotate(e) {
      const cardMouse = e.target;
      const rect = cardMouse.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const xValue = e.clientX - centerX;
      const yValue = e.clientY - centerY;

      console.log(xValue, yValue);

      mouseX.set(xValue);
      mouseY.set(yValue);
    }

    function handleMouseLeave() {
      mouseX.set(0);
      mouseY.set(0);
    }

    card.addEventListener("mousemove", handleRotate);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleRotate);
      card.addEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cardRef}
      className={styles.card}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <img src="https://placehold.co/300x200" />

      <div className={styles.inner}>
        <h2>Card Title</h2>
        <p>
          This card is about the placeholder thing. And we need to wait for
          something
        </p>
      </div>
    </motion.div>
  );
}

export default Card3D;
