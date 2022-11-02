import React from "react";

import styles from "./Banner.module.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    description: "Acheter votre bien avec l'agence Montmartre",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    description: "Trouver votre location avec l'agence Montmartre",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    description: "Estimer votre bien avec l'agence Montmartre",
  },
];

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <ImageGallery
        items={images}
        description={images.text}
        autoPlay={true}
        showNav={false}
        lazyLoad={true}
        showThumbnails={false}
        showBullets={true}
        showFullscreenButton={false}
        showPlayButton={false}
        slideDuration={1000}
        slideInterval={4000}
      />
    </div>
  );
};

export default Banner;
