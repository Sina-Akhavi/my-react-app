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
import { CSVDataProvider } from './context/CSVDataContext.js'; 
import AnalyticsCardsContent from './components/AnalyticsCardsContent.js';
import ARIMALSTMComparisonContent from './components/ArimaLstmComparisonContent.js'
import ForecastingModelsContent from './components/ForecastingModelsContent.js'
import ArimaEvaluationContent from './components/ArimaEvaluationContent.js'
import ARIMAForecastingPageContent from './components/ARIMAForecastingPageContent.js'
import LSTMForecastingPageContent from './components/LSTMForecastingPageContent.js'
import LSTMEvaluationContent from './components/LSTMEvaluationContent.js';
import ProtectedRoute from './components/ProtectedRoute.js';


const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <CSVDataProvider>
                    <Routes>
                        {/* Public routes */}
                        <Route path='/login' element={<LoginPage/>} />
                        <Route path='/profile' element={
                            <ProtectedRoute>
                                <ProfileContent/>
                            </ProtectedRoute>
                        } />
                        <Route path='/reset-password' element={<ResetPasswordContent/>} />
                        <Route path='/forgot-password' element={<ForgotPasswordContent/>} />
                        <Route path='/register' element={<RegisterPage/>} />
                        {/* Private routes */}
                        <Route path='/' element={<MainLayout/>}>
                            <Route index element={<HomePageContent/>} />
                            <Route path='/contact' element={
                                <ProtectedRoute>
                                    <ContactContent/>
                                </ProtectedRoute>
                            }/>
                            <Route path='/about' element={
                                <ProtectedRoute>
                                    <AboutContent/>
                                </ProtectedRoute>
                            }/>
                            <Route path='/what-is-app' element={
                                <ProtectedRoute>
                                    <WhatIsAppContent/>
                                </ProtectedRoute>
                            }/>
                            <Route path='/team-leadership' element={
                                <ProtectedRoute>
                                    <TeamAndLeadership/>
                                </ProtectedRoute>
                            }/>
                            <Route path='/products' element={
                                <ProtectedRoute>
                                    <ProductContent/>
                                </ProtectedRoute>
                            }/>
                            <Route path='/bitcoin-table' element={
                                <ProtectedRoute>
                                    <CryptoInfoTable/>
                                </ProtectedRoute>
                            }/>
                            <Route path='/analytics' element={
                                <ProtectedRoute>
                                    <AnalyticsCardsContent/>
                                </ProtectedRoute>
                            }/>
                            <Route path='/analyzer/arima-lstm' element={
                                <ProtectedRoute>
                                    <ARIMALSTMComparisonContent/>
                                </ProtectedRoute>
                            }/>
                            <Route path='/analyzer/forecasting-models' element={
                                <ProtectedRoute>
                                    <ForecastingModelsContent/>
                                </ProtectedRoute>
                            }/>
                            <Route path='/analyzer/arima-evaluation' element={
                                <ProtectedRoute>
                                    <ArimaEvaluationContent/>
                                </ProtectedRoute>
                            }/>
                            <Route path='/analyzer/lstm-evaluation' element={
                                <ProtectedRoute>
                                    <LSTMEvaluationContent/>
                                </ProtectedRoute>
                            }/>
                            <Route path='/analyzer/arima-forecasting' element={
                                <ProtectedRoute>
                                    <ARIMAForecastingPageContent/>
                                </ProtectedRoute>
                            }/>
                            <Route path='/analyzer/lstm-forecasting' element={
                                <ProtectedRoute>
                                    <LSTMForecastingPageContent/>
                                </ProtectedRoute>
                            }/>
                        </Route>
                    </Routes>
                </CSVDataProvider>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
