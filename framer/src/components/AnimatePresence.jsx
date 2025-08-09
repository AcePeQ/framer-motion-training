import { useState } from "react";
import styles from "./AnimatePresence.module.css";

import { motion, AnimatePresence, wrap } from "motion/react";

function AnimatePresenceComp() {
  const [items, setItems] = useState([0, 1, 2, 3, 4]);
  const [nextId, setNextId] = useState(5);
  const [isBoxShowed, setIsBoxShowed] = useState(false);

  const addItem = () => {
    setItems((prev) => [...prev, nextId]);
    setNextId((prev) => prev + 1);
  };

  const removeItem = (idToRemove) => {
    setItems((prev) => prev.filter((id) => id !== idToRemove));
  };

  return (
    <div className={styles.wrapper}>
      <AnimatePresence>
        {isBoxShowed && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className={styles.box}
          ></motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsBoxShowed((prev) => !prev)}
        className={styles.button}
      >
        {isBoxShowed ? "Hide" : "Show"}
      </button>

      <button onClick={() => setItems((prev) => [...prev, prev.length])}>
        Add Item
      </button>

      <motion.ul>
        <AnimatePresence>
          {items.map((itemId) => (
            <motion.li
              key={itemId} // unikalny key!
              onClick={() => removeItem(itemId)}
              className={styles.card}
              initial={{ x: -100, opacity: 0, height: 0 }}
              animate={{ x: 0, opacity: 1, height: "auto" }}
              exit={{ x: 100, opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              Item {itemId}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}

export default AnimatePresenceComp;
