import React, { useState, useEffect } from "react";
import "../styles/arima-evaluation.css";
import Footer from "./Footer";
import ActualVsPredictedChart from "./ActualVsPredictedChart";

function ForecastingModelsContent() {
  const [evaluationStarted, setEvaluationStarted] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from public/arima_results.json
    fetch(process.env.PUBLIC_URL + "/arima_results.json")
      .then((res) => res.json())
      .then((data) => {
        setTableData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleStartEvaluation = () => {
    setEvaluationStarted(true);
  };

  // Replace hardcoded data with tableData for chart
  const chartLabels = tableData.map((item) => item.date || item.year);
  const actualValues = tableData.map((item) => item.actual);
  const predictedValues = tableData.map((item) => item.predicted);

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
            {loading ? (
              <div>Loading...</div>
            ) : (
              <table className="evaluation-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Original</th>
                    <th>Predicted</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.date}</td>
                      <td>{row.actual}</td>
                      <td>{row.predicted}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
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
      