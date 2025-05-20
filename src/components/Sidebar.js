/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/sidebar.css";

const Sidebar = () => {
  const [showProductMenu, setShowProductMenu] = useState(false);

  const toggleProductMenu = () => {
    setShowProductMenu(!showProductMenu);
  };

  return (
    <div className="sidebar mutabel-sidebar-styles">
      <div className="sidebar-header">
        <div className="sidebar-header-info">
          <h3>Analytics Hub</h3>
          <p>Your insights at a glance</p>
        </div>
      </div>
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <a className="a-item" href="#">
              <i
                className="fa fa-tachometer"
                aria-hidden="true"
                style={{ marginRight: "8px" }}
              ></i>
              Dashboard
            </a>
          </li>
          <li className="sidebar-item">
            <a className="a-item" href="/bitcoin-table">
              <i
                className="fa fa-bar-chart"
                aria-hidden="true"
                style={{ marginRight: "8px" }}
              ></i>
              Reports
            </a>
          </li>
          <li className="sidebar-item">
            <a className="a-item" href="/analytics">
              <i
                className="fa fa-line-chart"
                aria-hidden="true"
                style={{ marginRight: "8px" }}
              ></i>
              Analytics
            </a>
          </li>
          {/* Product Link with Dropdown */}
          <li className="sidebar-item">
            <a href="#" className="a-item"
              onClick={(e) => {
                e.preventDefault();
                toggleProductMenu();
              }}
            >
             <i className="fa fa-product-hunt" aria-hidden="true"></i>
              Product
            </a>
            {showProductMenu && (
              <ul className="product-menu">
                <li>
                  <Link to="/products " className="btn">
                    bitcoin forecaster
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="btn">
                    crypto analyzer
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="sidebar-item">
            <Link className="a-item" to="/what-is-app">
              <i
                className="fa fa-info-circle"
                aria-hidden="true"
                style={{ marginRight: "8px" }}
              ></i>
              About App
            </Link>
          </li>
          {/* Login Button as a List Item */}
          <br></br>
          <br></br>
          <br></br>
          <li className="sidebar-item login-item">
            <a href="/login" className="btn btn-primary login-button">
              <i
                className="fa fa-sign-in"
                aria-hidden="true"
                style={{ marginRight: "8px" }}
              ></i>
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
