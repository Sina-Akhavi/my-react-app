import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/app.css'; 

import LoginPage from './components/LoginPage.js';
import MainLayout from './layout/MainLayout.js';
import HomePageContent from './components/HomePageContent.js';
import AboutContent from './components/AboutContent.js';
import ContactContent from './components/ContactContent.js'
import WhatIsAppContent from './components/WhatIsAppContent.js';
import TeamAndLeadership from './components/TeamAndLeadership.js';
import ProductContent from './components/ProductContent.js';
import CryptoInfoTable from './components/CryptoInfoTable.js';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/' element={<MainLayout/>}>
                    <Route index element={<HomePageContent/>} />
                    <Route path='/contact' element={<ContactContent/>}/>
                    <Route path='/about' element={<AboutContent/>}/>
                    <Route path='/what-is-app' element={<WhatIsAppContent/>}/>
                    <Route path='/team-leadership' element={<TeamAndLeadership/>}/>
                    <Route path='/products' element={<ProductContent/>}/>
                    <Route path='/bitcoin-table' element={<CryptoInfoTable/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
