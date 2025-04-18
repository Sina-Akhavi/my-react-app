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
  dynamicCSS                         
}) => {

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Line Chart Data",
        data: values,
        fill: true,
        borderColor: "#1abc9c",
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
      y: {
        ticks: {
          stepSize: 5,
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
