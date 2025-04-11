import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar.js';
// import MainPanel from './components/MainPanel.js';
import './styles/app.css'; 
import LoginPage from './components/LoginPage.js';
import HomePage from './components/HomePage.js';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/' element={<HomePage/>} />
                <Route/>
                <Route/>
            </Routes>
        </BrowserRouter>

        // <div className="wrapper">
        //     <Sidebar />
        //     <MainPanel />
        // </div>
    );
};

export default App;
