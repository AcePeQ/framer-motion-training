import {
  useAnimate,
  useMotionValue,
  useTransform,
  motion,
  useSpring,
} from "motion/react";
import styles from "./Counter.module.css";
import { useEffect, useState } from "react";

function Counter() {
  const value = useMotionValue(0);
  // const [scope, animate] = useAnimate();

  const spring = useSpring(value, {
    stiffness: 1,
    damping: 50,
    duration: 100,
  });

  const displayValue = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    value.set(100);
  }, [value]);

  // useEffect(() => {
  //   animate(value, 100, {
  //     duration: 10,
  //     ease: "linear",
  //     onUpdate: (lastest) => {
  //       if (scope.current) {
  //         scope.current.textContent = Math.round(lastest);
  //       }
  //     },
  //   });
  // }, [animate, value, scope]);

  return <motion.p className={styles.counter}>{displayValue}</motion.p>;
}

export default Counter;
