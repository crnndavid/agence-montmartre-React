import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import styles from "./Slideshow.module.css";
import Slide1 from "../assets/img/slide1.jpg";
import Slide2 from "../assets/img/slide2.jpg";
import { Link } from "react-router-dom";
const SlideShow = () => {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        autoplay: true,
        interval: 1500,
        perPage: 1,
        pagination: false,
      }}
    >
      <SplideSlide className={styles.slide}>
        <img src={Slide1} alt="Photo 1" style={{ width: "100%" }} />
        <div className={styles.caption}>
          <h2>Acheter votre appartement</h2>
          <Link to="/acheter-louer"> Voir nos offres</Link>
        </div>
      </SplideSlide>
      <SplideSlide className={styles.slide}>
        <img src={Slide2} alt="Photo 2" style={{ width: "100%" }} />
        <div className={styles.caption}>
          <h2>Louer votre appartement</h2>
          <Link to="/acheter-louer"> Voir nos offres</Link>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default SlideShow;
