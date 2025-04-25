// src/components/MainPanel.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/main-panel.css';

const MainPanel = ({ onLogoutClick }) => {
    return (
        <div className="main-panel">
            <Navbar onLogoutClick={onLogoutClick} />
            <Outlet />
        </div>
    );
};

export default MainPanel;