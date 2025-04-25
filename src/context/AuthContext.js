import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

    const openLogoutModal = () => setIsLogoutModalOpen(true);
    const closeLogoutModal = () => setIsLogoutModalOpen(false);

    const handleLogout = () => {
        setIsLogoutModalOpen(false);
        // Add any logout cleanup logic here (e.g. clearing tokens)
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ openLogoutModal, closeLogoutModal, handleLogout, isLogoutModalOpen }}>
            {children}
        </AuthContext.Provider>
    );
};