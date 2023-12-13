import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-800 to-purple-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">SwiftBooks</h1>
        <div className="flex space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/buysub" className="text-white hover:text-gray-300">
            Subscriptions
          </Link>
          
          <Link to="/ProductPage" className="text-white hover:text-gray-300">
            Products
          </Link>
          <Link to="/Login" className="text-white hover:text-gray-300">
            Login
          </Link>
          <Link to="/Signup" className="text-white hover:text-gray-300">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
