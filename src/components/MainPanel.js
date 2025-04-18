// src/components/MainPanel.js
import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet for nested content
import '../styles/main-panel.css'
// import '../styles/sidebar.css'

// import Sidebar from './Sidebar';
import Navbar from './Navbar';

const MainPanel = () => {
  return (
    <div className="main-panel">
      <Navbar />
        <Outlet /> {/* Put the Content Here */}
    </div>
  );
};

export default MainPanel;