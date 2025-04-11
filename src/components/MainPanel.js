// src/components/MainPanel.js
import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom'; // Outlet for nested content
import '../styles/main-panel.css'


const MainPanel = () => {
  return (
    <div className="main-panel">
      <Navbar />
      <div className="content">
        <Outlet /> {/* Dynamic content from child routes will appear here */}
      </div>
    </div>
  );
};

export default MainPanel;