import React, { useState } from "react";
import "../styles/arima-evaluation.css";
import Footer from "./Footer";

function ForecastingModelsContent() {
  const [evaluationStarted, setEvaluationStarted] = useState(false);

  const handleStartEvaluation = () => {
    setEvaluationStarted(true);
  };

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
      )}
      <Footer />
    </>
  );
}

export default ForecastingModelsContent;
