import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../src/assets/img/logo-agence-montmartre.svg";
import { SlMenu } from "react-icons/sl";
import { MdClear } from "react-icons/md";
import { useState } from "react";
const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const styleOverlay = {
    opacity: 1,
  };
  const toggleOverlay = () => setShowOverlay((prevState) => !prevState);
  return (
    <header className={styles.navContainer}>
      <a href="/">
        {" "}
        <img src={Logo} alt="Logo" />
      </a>

      <nav className={styles.navLinks}>
        <ul>
          <li>
            <a href="#" className={styles.navLink}>
              Acheter
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Louer
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              À propos
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Contact
            </a>
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
                <a href="#" className={styles.navLinkOverlay}>
                  Acheter
                </a>
              </li>
              <li onClick={toggleOverlay}>
                <a href="#" className={styles.navLinkOverlay}>
                  Louer
                </a>
              </li>
              <li onClick={toggleOverlay}>
                <a href="#" className={styles.navLinkOverlay}>
                  À propos
                </a>
              </li>
              <li onClick={toggleOverlay}>
                <a href="#" className={styles.navLinkOverlay}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
