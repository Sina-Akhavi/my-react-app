import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/app.css'; 

import LoginPage from './components/LoginPage.js';
import MainLayout from './layout/MainLayout.js';
import HomePageContent from './components/HomePageContent.js';
import AboutContent from './components/AboutContent.js';
import ContactContent from './components/ContactContent.js'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/' element={<MainLayout/>}>
                    <Route index element={<HomePageContent/>} />
                    <Route path='/contact' element={<ContactContent/>}/>
                    <Route path='/about' element={<AboutContent/>}/>
                </Route>
                
            </Routes>
        </BrowserRouter>
    );
};

export default App;
