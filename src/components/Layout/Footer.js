import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo-agence-montmartre.svg";
const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={styles.footerLinks}>
          <ul>
            <li className={styles.footerLink}>
              <Link to="/acheter-louer"> Acheter-Louer </Link>
            </li>
            <li className={styles.footerLink}>
              <Link to="/acheter-louer"> Estimation </Link>
            </li>
            <li className={styles.footerLink}>
              <Link to="/about"> À propos </Link>
            </li>
            <li className={styles.footerLink}>
              <Link to="/add-property"> Ajouter un bien </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.credentials}>
        <h6>
          Agence Montmartre - 2022 - Designed & Developped by David Crenin
        </h6>
      </div>
    </>
  );
};

export default Footer;
