import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [username, setUserName] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                if (decoded.exp * 1000 > Date.now()) {
                    setUser(decoded);
                } else {
                    setUser(null);
                }
            } catch {
                setUser(null);
            }
        }
    }, []);

    const login = async (username, password) => {
        const res = await api.post('auth/login/', { username, password });
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        const decoded = jwtDecode(res.data.access);
        setUser(decoded);
        setUserName(res.data.username);
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        setUser(null);
        closeLogoutModal(); // close modal after logout
    };

    const register = async (username, email, password) => {
        return api.post('auth/register/', { username, email, password });
    };

    const requestPasswordReset = async (email) => {
        return api.post('auth/password/reset/', { email });
    };

    const confirmPasswordReset = async ({ uid, token, new_password }) => {
        return api.post('auth/password/confirmation/', { uid, token, new_password });
    };

    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const openLogoutModal = () => setIsLogoutModalOpen(true);
    const closeLogoutModal = () => setIsLogoutModalOpen(false);

    return (
        <AuthContext.Provider value={{
            username,
            user,
            login,
            logout,
            register,
            requestPasswordReset,
            confirmPasswordReset,
            isLogoutModalOpen,
            openLogoutModal,
            closeLogoutModal
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
