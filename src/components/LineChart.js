import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles/line-chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartCard = ({
  labels,
  values,
  graphHeight,
  graphWidth,
  dynamicClassName = "graph-style",
  dynamicCSS,
}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Line Chart Data",
        data: values,
        fill: true,
        borderColor: "#f39c12", // New accent color
        backgroundColor: "rgba(243,156,18,0.2)", // Light orange fill
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Line Chart",
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            weight: "bold",
          },
          color: "black", // Darker color for x-axis labels
        },
      },
      y: {
        ticks: {
          stepSize: 5,
          font: {
            weight: "bold",
          },
          color: "black", // Darker color for y-axis numbers
        },
      },
    },
  };

  const defaultCSS = `
    .${dynamicClassName} {
      box-sizing: border-box;
      display: block;
      height: ${graphHeight};
      width: ${graphWidth};
    }
  `;

  return (
    <>
      <style>{dynamicCSS ? dynamicCSS : defaultCSS}</style>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="card-header">
              <h1 className="card-title">Bitcoin Price</h1>
            </div>
          </div>
          <Line className={dynamicClassName} data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default LineChartCard;
