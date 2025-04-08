import React from 'react';
// import Navbar from './components/Navbar.js';
import Sidebar from './components/Sidebar.js';
import MainPanel from './components/MainPanel.js';
import './styles/app.css'; 


const App = () => {
    return (
        <div className="wrapper">
            <Sidebar />
            <MainPanel />
        </div>
    );
};

export default App;