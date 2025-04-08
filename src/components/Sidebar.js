import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css"; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">Bitcoin App</div>
      <ul className="sidebar-links">
        <li>
          <Link to="/" className="sidebar-link">
            Live Prices
          </Link>
        </li>
        <li>
          <Link to="/historical-data" className="sidebar-link">
            Historical Data
          </Link>
        </li>
        <li>
          <Link to="/forecast" className="sidebar-link">
            Forecast
          </Link>
        </li>
        <li>
          <Link to="/model-comparison" className="sidebar-link">
            Model Comparison
          </Link>
        </li>
        <li>
          <Link to="/settings" className="sidebar-link">
            Settings
          </Link>
        </li>
        <li>
          <Link to="/about" className="sidebar-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;