import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import Slide1 from "../assets/img/slide1.jpg";
import Slide2 from "../assets/img/slide2.jpg";
const SlideShow = () => {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        autoplay: true,
        interval: 1500,
        perPage: 1,
      }}
    >
      <SplideSlide>
        <img src={Slide1} alt="Photo 1" style={{ width: "100%" }} />
        <div>
          <h2>Acheter votre appartement</h2>
        </div>
      </SplideSlide>
      <SplideSlide>
        <img src={Slide2} alt="Photo 2" style={{ width: "100%" }} />
        <div>
          <h2>Acheter votre appartement</h2>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default SlideShow;
