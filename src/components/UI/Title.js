import React from "react";
import styles from "./Title.module.css";
const Title = ({ title, color }) => {
  return (
    <h2 className={styles.header2} style={{ color: color }}>
      {title}
    </h2>
  );
};

export default Title;
