import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar.js';
// import MainPanel from './components/MainPanel.js';
import './styles/app.css'; 
import LoginPage from './components/LoginPage.js';
import HomePage from './components/HomePage.js';
import ContactPage from './components/ContactPagr.js'
import HomePageContent from './components/HomePageContent.js'
import MainLayout from './layout/MainLayout.js';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage/>} />

                <Route path='/' element={<MainLayout/>}>
                    <Route index element={<HomePageContent/>} />
                    <Route path='/contact' element={<ContactPage/>}/>
                </Route>
                
            </Routes>
        </BrowserRouter>

        // <div className="wrapper">
        //     <Sidebar />
        //     <MainPanel />
        // </div>
    );
};

export default App;
