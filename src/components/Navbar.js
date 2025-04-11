/* eslint-disable jsx-a11y/anchor-is-valid */
// Navbar.js
import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-absolute navbar-transparent">
            <div className="container-fluid">
                <div className='collapse navbar-collapse ' id='navigation'>
                    <ul className="navbar-nav ml-auto">
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/about" className="nav-link">About</Link></li>
                        <li><Link to="/contact" className="nav-link">Contact</Link></li>
                    </ul>
                </div>
            </div>            
        </nav>
    );
};

export default Navbar;
