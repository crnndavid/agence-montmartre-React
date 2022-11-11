import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../src/assets/img/logo-agence-montmartre.svg";

import { SlMenu } from "react-icons/sl";
import { MdClear } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const styleOverlay = {
    opacity: 1,
  };
  const toggleOverlay = () => setShowOverlay((prevState) => !prevState);
  return (
    <header className={styles.navContainer}>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>

      <nav className={styles.navLinks}>
        <ul>
          <li>
            <Link to="/acheter-louer" className={styles.navLink}>
              Acheter - Louer
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.navLink}>
              À propos
            </Link>
          </li>
          <li>
            <Link className={styles.navLink}>Contact</Link>
          </li>
        </ul>
      </nav>
      <SlMenu
        className={styles.hamburger}
        size="30px"
        onClick={toggleOverlay}
      />
      {showOverlay && (
        <>
          <div className={styles.overlayBg} onClick={toggleOverlay}></div>
          <div className={styles.overlay}>
            <MdClear
              className={styles.iconClose}
              size={30}
              onClick={toggleOverlay}
            />
            <img src={Logo} alt="Logo" />
            <ul>
              <li onClick={toggleOverlay}>
                <Link to="/acheter-louer" className={styles.navLinkOverlay}>
                  Acheter - Louer
                </Link>
              </li>
              <li onClick={toggleOverlay}>
                <Link to="/about" className={styles.navLinkOverlay}>
                  À propos
                </Link>
              </li>
              <li onClick={toggleOverlay}>
                <Link to="" className={styles.navLinkOverlay}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
