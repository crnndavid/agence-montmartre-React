import React from "react";
import ImageGallery from "react-image-gallery";
const Slider = ({ items, autoPlay }) => {
  return <ImageGallery items={items} autoPlay={autoPlay} />;
};

export default Slider;
