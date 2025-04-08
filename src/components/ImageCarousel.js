import React, { useState, useEffect } from "react";
import "../styles/carousel.css";

const Carousel = ({ images, autoPlay = true, autoPlayTime = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        handleNext();
      }, autoPlayTime);
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoPlay, autoPlayTime]);

  return (
    <div className="carousel-container">
      <img src={images[1]} alt={`bitcoin index`} className="carousel-image" />

      {/* <button className="carousel-button prev" onClick={handlePrev}>
        Prev
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        Next
      </button> */}
    </div>
  );
};

export default Carousel;
