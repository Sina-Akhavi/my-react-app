import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/app.css'; 
import LoginPage from './components/LoginPage.js';
import MainLayout from './layout/MainLayout.js';
// import Sidebar from './components/Sidebar.js';
// import MainPanel from './components/MainPanel.js';
import HomePageContent from './components/HomePageContent.js';
// import ContactPage from './components/ContactPagr.js'
// import HomePageContent from './components/HomePageContent.js'


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage/>} />

                <Route path='/' element={<MainLayout/>}>
                    <Route index element={<HomePageContent/>} />
                    <Route path='/contact' element={<p>Contact</p>}/>
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
