import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navigation">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <Link to="/" className="nav-link">Home</Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/home/sub1" className="dropdown-item">Sub Home 1</Link></li>
                                <li><Link to="/home/sub2" className="dropdown-item">Sub Home 2</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/about" className="nav-link">About</Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/about/team" className="dropdown-item">Team</Link></li>
                                <li><Link to="/about/company" className="dropdown-item">Company</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/contact" className="nav-link">Contact</Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/contact/support" className="dropdown-item">Support</Link></li>
                                <li><Link to="/contact/sales" className="dropdown-item">Sales</Link></li>
                            </ul>
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