import React from "react";
import styles from "./SignInBtn.module.css";
const SignInBtn = ({ handleClick, label }) => {
  return (
    <button className={styles["login-with-google-btn"]} onClick={handleClick}>
      {label}
    </button>
  );
};

export default SignInBtn;
