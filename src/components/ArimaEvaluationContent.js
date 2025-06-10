import React, { useState } from "react";
import "../styles/arima-evaluation.css";
import Footer from "./Footer";
import ActualVsPredictedChart from "./ActualVsPredictedChart";

function ForecastingModelsContent() {
  const [evaluationStarted, setEvaluationStarted] = useState(false);

  const handleStartEvaluation = () => {
    setEvaluationStarted(true);
  };

  const data = [
    { year: "2015", actual: 5000, predicted: 5100 },
    { year: "2016", actual: 5200, predicted: 5300 },
    { year: "2017", actual: 5400, predicted: 5500 },
    { year: "2018", actual: 5600, predicted: 5700 },
    { year: "2019", actual: 5800, predicted: 5900 },
    { year: "2020", actual: 6000, predicted: 6100 },
    { year: "2021", actual: 6200, predicted: 6300 },
    { year: "2022", actual: 6400, predicted: 6500 },
    { year: "2023", actual: 6600, predicted: 6700 },
  ];

  const chartLabels = data.map((item) => item.year);
  const actualValues = data.map((item) => item.actual);
  const predictedValues = data.map((item) => item.predicted);

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="evaluation-card fade-in">
        <h2>Arima Evaluation</h2>
        <p>
          Line 1: This evaluation section is dedicated to assessing the
          performance of ARIMA models.
        </p>
        <p>
          Line 2: It offers insights into time series forecasting techniques.
        </p>
        <p>
          Line 3: Historical data patterns are compared against predicted
          values.
        </p>
        <p>Line 4: The evaluation simulates real-world market conditions.</p>
        <p>Line 5: It provides a tangible approach to model validation.</p>
        <p>Line 6: Users can observe trends and variances in the output.</p>
        <p>
          Line 7: Interactive visuals and animations enrich the user experience.
        </p>
        <button
          className="start-evaluation-btn"
          onClick={handleStartEvaluation}
        >
          Start Evaluation
        </button>
      </div>

      {evaluationStarted && (
        <>
          <div className="evaluation-table-container fade-in">
            <h3>Actual vs Predicted</h3>
            <table className="evaluation-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Original</th>
                  <th>Predicted</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023-10-01</td>
                  <td>100</td>
                  <td>110</td>
                </tr>
                <tr>
                  <td>2023-10-02</td>
                  <td>105</td>
                  <td>115</td>
                </tr>
                <tr>
                  <td>2023-10-03</td>
                  <td>102</td>
                  <td>112</td>
                </tr>
                <tr>
                  <td>2023-10-04</td>
                  <td>107</td>
                  <td>117</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="evaluation-metric-container fade-in">
            <h3>Evaluation Metric</h3>
            <table className="evaluation-table">
              <tbody>
                <tr>
                  <th>MAPE</th>
                  <th>RMSE</th>
                  <th>MAE</th>
                </tr>
                <tr>
                  <td>5.2%</td>
                  <td>9.8</td>
                  <td>3.4</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="evaluation-chart-container fade-in">
            <ActualVsPredictedChart
              title="Actual vs Predicted Visualization"
              labels={chartLabels}
              actualValues={actualValues}
              predictedValues={predictedValues}
              graphHeight="300px"
              graphWidth="100%"
              dynamicCSS={{}}
            />
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

export default ForecastingModelsContent;
