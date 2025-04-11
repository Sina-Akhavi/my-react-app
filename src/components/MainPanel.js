// src/components/MainPanel.js
import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom'; // Outlet for nested content
import '../styles/main-panel.css'


const MainPanel = () => {
  return (
    <div className="main-panel">
      <Navbar />
        <Outlet /> {/* Put the Content Here */}
    </div>
  );
};

export default MainPanel;