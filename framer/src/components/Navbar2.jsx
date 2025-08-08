import { useState } from "react";
import styles from "./Navbar2.module.css";

import { motion } from "motion/react";

const links = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Company", path: "/com" },
  { name: "Login", path: "/log" },
  { name: "Register", path: "/regi" },
];

function Navbar2() {
  const [activeLink, setActiveLink] = useState(0);
  const [hoverLink, setHoverLink] = useState(null);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {links.map((link, index) => {
          return (
            <li key={index} className={styles.list_item}>
              <motion.a
                animate={{
                  color: `${hoverLink === index ? "#fff" : "#000"}`,
                }}
                className={`${styles.list_link} ${
                  activeLink === index ? styles.active : ""
                }`}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(index);
                }}
                onMouseEnter={() => {
                  setHoverLink(index);
                }}
                onMouseLeave={() => {
                  setHoverLink(null);
                }}
              >
                {link.name}
              </motion.a>
              {hoverLink === index ? (
                <motion.div
                  className={styles.activeHover}
                  id="underline"
                  layoutId="underline"
                ></motion.div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar2;
