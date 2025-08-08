import { useState } from "react";
import styles from "./Navbar.module.css";

import { motion } from "motion/react";

const links = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Company", path: "/com" },
  { name: "Login", path: "/log" },
  { name: "Register", path: "/regi" },
];

function Navbar() {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {links.map((link, index) => {
          return (
            <li key={index} className={styles.list_item}>
              <motion.a
                animate={{
                  color: `${activeLink === index ? "#fff" : "#000"}`,
                }}
                className={styles.list_link}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(index);
                }}
              >
                {link.name}
              </motion.a>
              {activeLink === index ? (
                <motion.div
                  className={styles.active}
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

export default Navbar;
