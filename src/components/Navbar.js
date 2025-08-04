import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, username } = useAuth();
    console.log('user:', user);
    

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navigation">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                        {/* Product Dropdown */}
                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                                Product
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/products" className="dropdown-item">Bitcoin Forecaster</Link></li>
                                <li><Link to="/products" className="dropdown-item">Crypto Analyzer</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="navbar-logo ml-auto">
                        <Link to="/" className="logo-text">Bitcoin Forecaster</Link>
                    </div>
                    <div className="navbar-login ml-auto">
                        {username && (
                            <div className="user-greeting">
                                <Link to="/profile" className="greeting-text">
                                    Hello, {username}
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>            
        </nav>
    );
};

export default Navbar;