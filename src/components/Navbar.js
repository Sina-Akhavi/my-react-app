import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">Bitcoin App</div>

      {/* Search Bar */}
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search..."
          className="navbar-input"
        />
      </div>

      {/* Desktop Actions */}
      <div className="navbar-actions">
        <button className="navbar-button">Login</button>
        <button className="navbar-button">Sign Up</button>
      </div>

    </nav>
  );
};

export default Navbar;