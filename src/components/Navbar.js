/* eslint-disable jsx-a11y/anchor-is-valid */
// Navbar.js
import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-absolute navbar-transparent">
            <div className="container-fluid">
                <div className='collapse navbar-collapse ' id='navigation'>
                    <ul className="navbar-nav ml-auto">
                        <li><a href="#" className="nav-link">Home</a></li>
                        <li><a href="#" className="nav-link">About</a></li>
                        <li><a href="#" className="nav-link">Contact</a></li>
                    </ul>
                </div>
            </div>            
        </nav>
    );
};

export default Navbar;
