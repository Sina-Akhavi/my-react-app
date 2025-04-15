import React from "react";
import "../styles/whatIsApp.css";
import Footer from "./Footer";

function WhatIsAppContent() {
  return (
    <>
      {/* Hero Section with Parallax Background */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>What is This App?</h1>
          <p>
            Experience the future of Bitcoin forecasting powered by an
            innovative ARIMA model.
          </p>
          <button className="explore-btn">Start Exploring →</button>
        </div>
      </section>

      {/* About App Section with Two-Column Layout */}
      <section className="app-info">
        <div className="about-app">
          <h2>About the App</h2>
          <p>
            Our Bitcoin forecaster leverages the sophisticated ARIMA model to
            deliver highly accurate predictions, ensuring you stay ahead in the
            market. By processing real-time data using robust algorithms, our
            app provides an experience that is both reliable and ultrafast. This
            groundbreaking approach empowers you to make informed decisions
            using predictive analytics.
          </p>
          <p>
            In addition, our platform integrates elegant design with
            user-centric features, making complex forecasting both accessible
            and attractive. Our commitment to excellence is evident in every
            element.
          </p>
        </div>
        <div className="about-image">
          <img
            src={require("../assets/img/ai.bitcoin.3.webp")}
            alt="Bitcoin Analytics"
          />
        </div>
      </section>

      {/* Features Section with Grid Layout */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <span className="icon">📈</span>
            <h3>High Accuracy Predictions</h3>
            <p>Utilizes statistical precision for market forecasts.</p>
          </div>
          <div className="feature-item">
            <span className="icon">⏱️</span>
            <h3>Real-time Data Processing</h3>
            <p>Instant updates keep you informed at every moment.</p>
          </div>
          <div className="feature-item">
            <span className="icon">⚙️</span>
            <h3>Innovative ARIMA Modeling</h3>
            <p>State-of-the-art models for reliable market insight.</p>
          </div>
          <div className="feature-item">
            <span className="icon">🖥️</span>
            <h3>User-Friendly Interface</h3>
            <p>Beautiful, intuitive design for effortless navigation.</p>
          </div>
          <div className="feature-item">
            <span className="icon">🚀</span>
            <h3>Advanced Performance</h3>
            <p>Engineered for speed and efficient market analysis.</p>
          </div>
          <div className="feature-item">
            <span className="icon">🔒</span>
            <h3>Secure & Reliable</h3>
            <p>Your data is safe with our robust security protocols.</p>
          </div>
        </div>
      </section>

      {/* Demo Section with Video Placeholder */}
      <section className="demo">
        <h2>See It in Action</h2>
        <p>
          Witness our advanced forecasting in action. Discover how our powerful
          ARIMA-driven platform transforms data into actionable insights.
        </p>
        <div className="video-placeholder">
          <p>Video/Tutorial Coming Soon!</p>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default WhatIsAppContent;
