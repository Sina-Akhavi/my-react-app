import React from "react";
import "../styles/main-panel.css"; // Create a separate CSS file for styling
import Navbar from "./Navbar";
import ImageCarousel from "./ImageCarousel";
import LineChartCard from "./LineChart";

const images = require
  .context("../assets/img", false, /\.webp$/)
  .keys()
  .map((file) => require(`../assets/img/${file.replace("./", "")}`));


const sampleLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const sampleValues = [65, 59, 80, 81, 56, 55, 40, 70, 90, 100, 110, 120];  
  
const MainPanel = () => {
  return (
    <>
      <div className="main-panel">
        <Navbar />
        <div className="content">
          <div className="row">
            <LineChartCard labels={sampleLabels} values={sampleValues}></LineChartCard>
          </div>
      </div>

      </div>
    </>
  );
};

export default MainPanel;
