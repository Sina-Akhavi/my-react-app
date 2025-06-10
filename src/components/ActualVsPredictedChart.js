import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

function ActualVsPredictedChart({ title, labels, actualValues, predictedValues, graphHeight, graphWidth, dynamicCSS }) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Actual",
        data: actualValues,
        fill: false,
        borderColor: "rgba(75,192,192,0.6)",
        tension: 0.1,
      },
      {
        label: "Predicted",
        data: predictedValues,
        fill: false,
        borderColor: "rgba(255,99,132,0.6)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: { display: true, text: title },
      legend: { position: "top" },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div style={{ height: graphHeight, width: graphWidth, ...dynamicCSS }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default ActualVsPredictedChart;
