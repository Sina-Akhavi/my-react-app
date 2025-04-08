import React from "react";
import "../styles/main-panel.css"; // Create a separate CSS file for styling
import Carousel from "./ImageCarousel";
import Navbar from "./Navbar";

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
              <img src={images[1]}></img>
            </div>
          </div>
      </div>

      </div>
    </>
  );
};

export default MainPanel;
