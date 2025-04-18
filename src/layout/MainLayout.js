import React from 'react';
import Sidebar from '../components/Sidebar';
import MainPanel from '../components/MainPanel';
import { Outlet, useLocation } from 'react-router-dom'; 

function MainLayout() {
  const location = useLocation(); 

  const noSidebarPaths = ['/contact', '/about', '/what-is-app', '/products'];

  return (
    <div className="wrapper">
      {!noSidebarPaths.includes(location.pathname) && <Sidebar />}
      <MainPanel>
        <Outlet />
      </MainPanel>
    </div>
  );
}

export default MainLayout;
