import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import styles from "./Slider.module.css";
import { Link } from "react-router-dom";
const Slider = ({ items }) => {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        autoplay: true,
        type: "loop",
        interval: 1500,
        perPage: 3,
        pagination: false,
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
          <Link to={`/acheter-louer/${item.id}`}>
            <img src={item.image} alt={item.name} />
            <span>{item.name} -</span> <span>{item.type.toUpperCase()}</span>
          </Link>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;
