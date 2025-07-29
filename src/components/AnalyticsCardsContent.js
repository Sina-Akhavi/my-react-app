import React from "react";
import { Link } from "react-router-dom";
import "../styles/analytics-cards-content.css";
import Footer from "./Footer";

function AnalyticsCardsContent() {
  return (
    <>
      <section className="analytics-cards-image">
        <div className="analytics-overlay">
          <h1>Evaluation, Forecasting and Comparison</h1>
          <p>Utilize ARIMA and LSTM models to evaluate and forecast Bitcoin.</p>
        </div>
      </section>

      <section className="cards-section">
        <div className="cards-row">
          <Link to="/analyzer/arima-evaluation" className="card-link">
            <div className="analytic-card">
              <i className="fas fa-chart-line card-icon"></i>
              <h2>ARIMA Evaluation</h2>
            </div>
          </Link>
          <Link to="/analyzer/lstm-evaluation" className="card-link">
            <div className="analytic-card">
              <i className="fas fa-brain card-icon"></i>
              <h2>LSTM Evaluation</h2>
            </div>
          </Link>
        </div>
        <div className="cards-row">
          <Link to="/analyzer/forecasting" className="card-link">
            <div className="analytic-card">
              <i className="far fa-chart-bar card-icon"></i>
              <h2>ARIMA Forecasting</h2>
            </div>
          </Link>
          <Link to="#" className="card-link">
            <div className="analytic-card">
              <i className="fas fa-chart-bar card-icon"></i>
              <h2>LSTM Forecasting</h2>
            </div>
          </Link>
        </div>
        <div className="cards-row">
          <Link to="/analyzer/arima-lstm" className="card-link">
            <div className="analytic-card">
              <i className="fas fa-balance-scale card-icon"></i>
              <h2>ARIMA vs LSTM</h2>
            </div>
          </Link>
          <Link to="/analyzer/forecasting-models" className="card-link">
            <div className="analytic-card">
              <i className="fas fa-info-circle card-icon"></i>
              <h2>About Forecasting Models</h2>
            </div>
          </Link>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default AnalyticsCardsContent;