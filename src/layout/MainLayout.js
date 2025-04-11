// src/layouts/MainLayout.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import MainPanel from '../components/MainPanel';
import { Outlet } from 'react-router-dom'; // Outlet is used for rendering child routes

function MainLayout() {
  return (
    <div className="wrapper">
      <Sidebar />
      <MainPanel>
        <Outlet /> {/* Child routes will be rendered here */}
      </MainPanel>
    </div>
  );
}

export default MainLayout;