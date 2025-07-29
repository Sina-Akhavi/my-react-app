import React, { useState, useEffect } from "react";
import "../styles/model-evaluation.css";
import Footer from "./Footer";
import ActualVsPredictedChart from "./ActualVsPredictedChart";

function LSTMEvaluationContent() {
  const [evaluationStarted, setEvaluationStarted] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/LSTM_result.json")
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
  const chartLabels = tableData.map((item) => '');
  const actualValues = tableData.map((item) => item.original_ytrain);
  const predictedValues = tableData.map((item) => item.predicted_ytrain);

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="evaluation-card fade-in">
        <h2>LSTM Evaluation</h2>
        <p>
          This evaluation section is dedicated to assessing the
          performance of LSTM models.
        </p>
        <p>
          It offers insights into time series forecasting techniques.
        </p>
        <p>
          Historical data patterns are compared against predicted
          values.
        </p>
        <p>The evaluation simulates real-world market conditions.</p>
        <p>It provides a tangible approach to model validation.</p>
        <p>Users can observe trends and variances in the output.</p>
        <p>
          Interactive visuals and animations enrich the user experience.
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
                    <th>Original</th>
                    <th>Predicted</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.original_ytrain}</td>
                      <td>{row.predicted_ytrain}</td>
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
                  <td>33.31</td>
                  <td>350.344</td>
                  <td>242.471</td>
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

export default LSTMEvaluationContent;
      