// Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="app-title">SwiftBooks</h1>
        <div className="nav-links">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <Link to="/ProductPage" className="nav-link">
            Products
          </Link>
          <Link to="/Login" className="nav-link">

            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
