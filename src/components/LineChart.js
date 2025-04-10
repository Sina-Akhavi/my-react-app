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
import "../styles/line-chart.css"; // Create a separate CSS file for styling

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartCard = ({ labels, values }) => {
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
  };

  return (
    <div className="card">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartCard;
