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
        <Link to="/buysub" className="nav-link">
            Subscriptions
          </Link>
          <a href="#about" className="nav-link">
            About
          </a>
          <Link to="/ProductPage" className="nav-link">
            Products
          </Link>
          <Link to="/Login" className="nav-link">

            Login
          </Link>
          <Link to="/Signup" className="nav-link">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
