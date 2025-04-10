import React from "react";
import "../styles/main-panel.css"; 
import Navbar from "./Navbar";
import LineChartCard from "./LineChart";

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
