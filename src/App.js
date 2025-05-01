import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/app.css'; 

import { AuthProvider } from './context/AuthContext';
import LoginPage from './components/LoginPage.js';
import MainLayout from './layout/MainLayout.js';
import HomePageContent from './components/HomePageContent.js';
import AboutContent from './components/AboutContent.js';
import ContactContent from './components/ContactContent.js';
import WhatIsAppContent from './components/WhatIsAppContent.js';
import TeamAndLeadership from './components/TeamAndLeadership.js';
import ProductContent from './components/ProductContent.js';
import CryptoInfoTable from './components/CryptoInfoTable.js';
import RegisterPage from './components/RegisterPage.js';
import ForgotPasswordContent from './components/ForgotPasswordContent.js'
import ResetPasswordContent from './components/ResetPasswordContent.js';
import ProfileContent from './components/ProfileContent.js';
 

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path='/login' element={<LoginPage/>} />
                    <Route path='/profile' element={<ProfileContent/>} />
                    <Route path='/reset-password' element={<ResetPasswordContent/>} />
                    <Route path='/forgot-password' element={<ForgotPasswordContent/>} />
                    <Route path='/register' element={<RegisterPage/>} />
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
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
