/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar mutabel-sidebar-styles">
      <div className="sidebar-header">
        {/* Removed logo image to avoid alt text fallback */}
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
            <a className="a-item" href="#">
              <i className="fa fa-bar-chart" aria-hidden="true" style={{ marginRight: "8px" }}></i>
              Reports
            </a>
          </li>
          <li className="sidebar-item">
            <a className="a-item" href="#">
              <i className="fa fa-line-chart" aria-hidden="true" style={{ marginRight: "8px" }}></i>
              Analytics
            </a>
          </li>
          <li className="sidebar-item">
            <a className="a-item" href="#">
              <i className="fa fa-cog" aria-hidden="true" style={{ marginRight: "8px" }}></i>
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
