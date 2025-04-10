// Navbar.js
import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-absolute navbar-transparent">
            <div className="container-fluid">
                <div className='collapse navbar-collapse ' id='navigation'>
                    <ul className="navbar-nav ml-auto">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>            
        </nav>
    );
};

export default Navbar;
