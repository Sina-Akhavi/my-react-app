import React, { useState, useEffect } from "react";
import "../styles/images-carousel.css";

const ImageCarousel = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="carousel-container">
      <img
        src={images[0]}
        alt={`Slide image`}
        className={`carousel-image active`}
      />
    </div>
  );
};

export default ImageCarousel;