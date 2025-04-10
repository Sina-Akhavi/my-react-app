// Sidebar.js
import React from 'react';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      
      <div className="sidebar-wrapper"></div>

      <ul className="sidebar-menu">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;