import React, { useState, useEffect } from 'react'; // Keep useState and useEffect
import { useCSVData } from '../context/CSVDataContext'; // <--- Import the hook to access your context

import LineChart from "./LineChart.js";
import ImageCarousel from "./ImageCarousel.js";

function HomePageContent() {
  const { csvData, isLoading, error } = useCSVData();

  const [chartLabels, setChartLabels] = useState([]);
  const [chartValues, setChartValues] = useState([]);

  const images = require
    .context("../assets/img", false, /\.webp$/)
    .keys()
    .map((file) => require(`../assets/img/${file.replace("./", "")}`));

  useEffect(() => {
    if (csvData) {
      const data = csvData.reverse();
      const labelsFromCSV = data.map(row => row.Date);
      const valuesFromCSV = data.map(row => parseFloat(row.Close)); // Convert 'Close' string to number

      console.log(labelsFromCSV);
      
      setChartLabels(labelsFromCSV);
      setChartValues(valuesFromCSV);
    }
  }, [csvData]);

  if (isLoading) {
    return <div className="loading-message">Loading market data for charts...</div>;
  }

  if (error) {
    return <div className="error-message">Error loading market data: {error}</div>;
  }

  if (chartLabels.length === 0 || chartValues.length === 0) {
      return <div className="loading-message">Processing chart data...</div>;
  }

  return (
    <>
      <div className="content">
        <div className="row">
          <ImageCarousel images={images} interval={10000}/>
        </div>
        <br></br>
        <div className="row">
          <LineChart
            labels={chartLabels}
            values={chartValues}
            graphHeight="60% !important"
            graphWidth="100% !important"
            dynamicClassName="first-chart-style"
            title="Bitcoin Historical Data"
          />
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div style={{ width: "48%" }}>
            <LineChart
              labels={chartLabels.slice(-7)} 
              values={chartValues.slice(-7)}
              graphHeight="100% !important"
              graphWidth="100% !important"
              dynamicClassName="second-chart-style"
              title="Bitcoin: last 7 days"
            />
          </div>
          <div style={{ width: "48%" }}>
            <LineChart
              labels={chartLabels.slice(-30)} // Use state derived from CSV
              values={chartValues.slice(-30)} // Use state derived from CSV
              graphHeight="100% !important"
              graphWidth="100% !important"
              dynamicClassName="thirs-chart-style"
              title="Bitcoin: last 30 days"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageContent;
