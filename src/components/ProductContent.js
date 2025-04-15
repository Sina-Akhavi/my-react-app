import React, { useState } from "react";
import "../styles/product.css";
import Footer from './Footer.js'
import image1 from "../assets/img/ai.bitcoin.3.webp";
import image2 from "../assets/img/ai.bitcoin.2.webp";
import image3 from "../assets/img/ai.bitcoin.4.webp";

const ProductContent = () => {
  const products = [
    {
      name: "Bitcoin Forecaster",
      content: (
        <div className="product-content">
          {/* Section 1: Explanation on left, image on right */}
          <div className="section-container">
            <div className="bf-section">
              <div className="bf-text">
                <h3>Bitcoin Forecaster</h3>
                <p>
                  Our advanced Bitcoin forecasting system leverages cutting-edge
                  predictive algorithms to analyze historical data and emerging
                  patterns. This tool empowers you to make timely investment
                  decisions with confidence.
                </p>
                <p>
                  It captures diverse market signals by processing technical
                  indicators and social sentiment, ensuring you receive a
                  holistic view of Bitcoin trends.
                </p>
                <button className="bf-button">Learn More</button>
              </div>
              <div className="bf-image">
                <img
                  src={image1}
                  alt="Bitcoin Analytics"
                  className="product-image"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Image on left, explanation on right */}
          <div className="section-container">
            <div className="bf-section reverse">
              <div className="bf-image">
                <img
                  src={image2}
                  alt="Advanced Analytics"
                  className="product-image"
                />
              </div>
              <div className="bf-text">
                <h3>Deep Market Insights</h3>
                <p>
                  Experience unparalleled market insights through our in-depth
                  analytics section. Rich visualizations and real-time data
                  feeds combine to keep you ahead in the fast-paced crypto
                  world.
                </p>
                <p>
                  Our constantly refined algorithmic models capture even the
                  subtlest market movements, providing you with the
                  comprehensive knowledge you need to navigate Bitcoin’s
                  volatility.
                </p>
              </div>
            </div>
          </div>

          <h3 className="bf-header">Why Choose Bitcoin Forecaster?</h3>
          <p className="bf-paragraph">
            Bitcoin Forecaster combines state-of-the-art technology with expert financial insights to provide you with a comprehensive tool for mastering the cryptocurrency market. Our platform leverages advanced predictive algorithms to analyze historical data, emerging trends, and market sentiment. Whether you're a seasoned investor or a newcomer, Bitcoin Forecaster empowers you to make informed decisions with confidence.
          </p>
          <p className="bf-paragraph">
            With real-time analytics, intuitive visualizations, and actionable insights, you can stay ahead in the fast-paced world of cryptocurrency. Our system is designed to adapt to market fluctuations, ensuring that you always have the most accurate and up-to-date information at your fingertips.
          </p>

        </div>
      ),
    },
    {
      name: "Crypto Analyzer",
      content: (
        <div className="product-content">
          {/* Section: Explanation on left, image on right */}
          <div className="section-container">
            <div className="bf-section">
              <div className="bf-text">
                <h2 className="crypto-header">Crypto Analyzer</h2>
                <p>
                  Dive deep into the world of cryptocurrencies with our advanced
                  Crypto Analyzer. This tool provides detailed analysis, real-time
                  data feeds, and actionable insights to help you make informed
                  decisions in the ever-changing crypto market.
                </p>
                <p>
                  Stay ahead of the curve with cutting-edge analytics, intuitive
                  visualizations, and comprehensive market trends. Whether you're a
                  seasoned trader or a beginner, Crypto Analyzer equips you with
                  the tools you need to succeed.
                </p>
                <button className="crypto-button">Explore More</button>
              </div>
              <div className="bf-image">
                <img
                  src={image3}
                  alt="Crypto Analyzer"
                  className="product-image"
                />
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="product-cards-container">
            <br></br>
            <br></br>
            <h3 className="product-cards-header">Capabilities of Crypto Analyzer</h3>
            <br></br>
            <div className="product-cards">
              {/* Row 1 */}
              <div className="product-card">
                <h4>Real-Time Data</h4>
                <p>
                  Access live cryptocurrency data feeds to stay updated with the
                  latest market trends and fluctuations.
                </p>
              </div>
              <div className="product-card">
                <h4>Advanced Analytics</h4>
                <p>
                  Leverage cutting-edge algorithms to analyze historical data and
                  predict future market movements.
                </p>
              </div>
              <div className="product-card">
                <h4>Comprehensive Insights</h4>
                <p>
                  Gain a holistic view of the cryptocurrency market with detailed
                  insights and intuitive visualizations.
                </p>
              </div>

              {/* Row 2 */}
              <div className="product-card">
                <h4>Customizable Dashboards</h4>
                <p>
                  Tailor your analytics dashboard to focus on the metrics that
                  matter most to you.
                </p>
              </div>
              <div className="product-card">
                <h4>Risk Assessment</h4>
                <p>
                  Evaluate potential risks with our advanced risk assessment tools
                  to make safer investment decisions.
                </p>
              </div>
              <div className="product-card">
                <h4>Market Predictions</h4>
                <p>
                  Stay ahead of the competition with accurate market predictions
                  powered by AI-driven algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <div className="product-container">
        <div className="tabs-container">
          {products.map((product, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {product.name}
            </button>
          ))}
        </div>
        <div className="content-container">{products[activeTab].content}</div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductContent;
