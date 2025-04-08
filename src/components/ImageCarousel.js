import React, { useState, useEffect } from "react";
import "../styles/images-carousel.css";
import PropTypes from "prop-types";

  

const ImageCarousel = ({images, interval}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="image-carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div className="carousel-item" key={index}>
            <img src={src} alt={`Bitcoin ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  interval: PropTypes.number,
};

export default ImageCarousel;
