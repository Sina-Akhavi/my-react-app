/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar mutabel-sidebar-styles">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          
          <li className="sidebar-item">
            <a className="a-item" href="#">Dashboard</a>
          </li>
          <li className="sidebar-item">
            <a className="a-item" href="#">Reports</a>
          </li>
          <li className="sidebar-item">
            <a className="a-item" href="#">Analytics</a>
          </li>
          <li className="sidebar-item">
            <a className="a-item" href="#">Settings</a>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
