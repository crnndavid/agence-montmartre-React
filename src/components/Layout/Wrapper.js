import React from "react";
import styles from "./Wrapper.module.css";
const Wrapper = ({ children, bg }) => {
  return (
    <section
      className={styles.sectionContainer}
      style={{ backgroundColor: bg }}
    >
      {children}
    </section>
  );
};

export default Wrapper;
