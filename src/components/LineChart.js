import React from "react";
import '../styles/line-chart-container.css'
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

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartContainer = () => {
  // Data for the first chart
  const data1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue (USD)",
        data: [1200, 1900, 3000, 5000, 2400, 2800],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4, // Smooth curve
      },
    ],
  };

  // Data for the second chart
  const data2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Expenses (USD)",
        data: [900, 1500, 2000, 4000, 1900, 2200],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4, // Smooth curve
      },
    ],
  };

  // Chart options (applies to both charts)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Line Chart Example",
      },
    },
  };

  return (
    <div className="chart-card">
      <h2 className="card-title">Dashboard</h2>
      <div className="charts">
        {/* First chart */}
        <div className="chart-wrapper">
          <Line data={data1} options={options} />
        </div>
        {/* Second chart */}
        <div className="chart-wrapper">
          <Line data={data2} options={options} />
        </div>
      </div>
    </div>
  );
};

export default LineChartContainer;
