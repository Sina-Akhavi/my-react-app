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
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`carousel-image-${index}`}
          className={`carousel-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}
      {/* Optional: Add a caption or description for the active image */}
    </div>
  );
};

export default ImageCarousel;