import React from 'react';
import Navbar from './components/Navbar.js';
import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';
import './styles/app.css'; 


const App = () => {
    return (
        <div className="app">
            <Navbar />
            <div className="main">
                <Sidebar />
                <Content />
            </div>
        </div>
    );
};

export default App;