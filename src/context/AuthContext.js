import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // On mount, decode token and set user if valid
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
        const res = await api.post('login/', { username, password });
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        const decoded = jwtDecode(res.data.access);
        setUser(decoded);
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        setUser(null);
    };

    const register = async (username, email, password) => {
        return api.post('register/', { username, email, password });
    };

    const requestPasswordReset = async (email) => {
        return api.post('password-reset-request/', { email });
    };

    const confirmPasswordReset = async ({ uid, token, new_password }) => {
        return api.post('password-reset-confirm/', { uid, token, new_password });
    };

    return (
        <AuthContext.Provider value={{
            user,
            login,
            logout,
            register,
            requestPasswordReset,
            confirmPasswordReset
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
