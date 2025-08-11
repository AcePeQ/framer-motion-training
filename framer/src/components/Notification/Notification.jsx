import { useCallback, useState } from "react";
import styles from "./Notification.module.css";

import { AnimatePresence, motion } from "motion/react";
import NotificationItem from "./NotificationItem";

function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [notifyId, setNotifyId] = useState(0);

  function addNotification() {
    setNotifications((prevArray) => [...prevArray, `Notification ${notifyId}`]);
    setNotifyId((prev) => prev + 1);
  }

  const removeNotification = useCallback(function removeNotification() {
    setNotifications((prevArray) => {
      const newArray = [...prevArray];
      newArray.shift();

      return newArray;
    });
  }, []);

  return (
    <>
      <button onClick={addNotification} className={styles.button}>
        Dodaj powiadomienie
      </button>

      <div className={styles.notifyWrapper}>
        <AnimatePresence mode="popLayout">
          {notifications.map((notifi) => (
            <NotificationItem
              key={notifi}
              notifi={notifi}
              onRemove={removeNotification}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Notification;
