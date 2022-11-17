import React from "react";

import styles from "./Banner.module.css";
import SlideShow from "./SlideShow";
const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <SlideShow />
    </div>
  );
};

export default Banner;
