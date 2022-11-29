import React from "react";
import styles from "./Number.module.css";
const Number = ({ year, title }) => {
  return (
    <div className={styles.number}>
      <h4>{year}</h4>
      <h6>{title}</h6>
    </div>
  );
};

export default Number;
