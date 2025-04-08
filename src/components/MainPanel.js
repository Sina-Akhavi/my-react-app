import React from "react";
import "../styles/main-panel.css"; // Create a separate CSS file for styling
import Navbar from "./Navbar";
import ImageCarousel from "./ImageCarousel";

const images = require
  .context("../assets/img", false, /\.webp$/)
  .keys()
  .map((file) => require(`../assets/img/${file.replace("./", "")}`));

const MainPanel = () => {
  return (
    <>
      <div className="main-panel">
        <Navbar />
        <div className="content">
          <div className="row">
            <div className="img-container">
              <ImageCarousel interval={5000} images={images}></ImageCarousel>
            </div>
          </div>
      </div>

      </div>
    </>
  );
};

export default MainPanel;
