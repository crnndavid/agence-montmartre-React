import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import styles from "./Slider.module.css";
const Slider = ({ items }) => {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        autoplay: true,
        interval: 1500,
        perPage: 3,
        perMove: 1,
        gap: 20,
        breakpoints: {
          1024: {
            perPage: 3,
          },
          767: {
            perPage: 2,
          },
          640: {
            perPage: 1,
          },
        },
      }}
    >
      {items.map((item, index) => (
        <SplideSlide key={index} className={styles.slides}>
          <img src={item.image} alt={item.name} />
          <span>{item.name} -</span> <span>{item.type.toUpperCase()}</span>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;
