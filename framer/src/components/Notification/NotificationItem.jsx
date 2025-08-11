import { AnimatePresence, motion } from "motion/react";

import styles from "./NotificationItem.module.css";
import { useEffect } from "react";

function NotificationItem({ notifi, onRemove }) {
  useEffect(() => {
    const timer = setTimeout(onRemove, 3000);

    return () => clearTimeout(timer);
  }, [onRemove]);

  return (
    <motion.div
      key={notifi}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className={styles.notifyStyle}
      layout
    >
      <p>{notifi}</p>
    </motion.div>
  );
}

export default NotificationItem;
