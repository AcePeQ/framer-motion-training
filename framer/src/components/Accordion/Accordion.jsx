import { AnimatePresence, motion } from "motion/react";

const items = [
  {
    title: "Accordion 1",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Accordion 2",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
  },
  {
    title: "Accordion 3",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

import styles from "./Accordion.module.css";
import { useState } from "react";

function Accordion() {
  return (
    <div className={styles.layout}>
      {items.map((item) => {
        const [show, setShow] = useState(false);

        return (
          <div>
            <button onClick={() => setShow((prev) => !prev)}>
              {item.title}
            </button>
            <AnimatePresence>
              <motion.div layout className={styles.wrapper}>
                {show && <p>{item.message}</p>}
              </motion.div>
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
