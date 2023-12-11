// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Create a CSS file for styling if needed
import FF from './FF.jpg';
import Navbar from './Navbar';
import Products from './Products'; 

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
        <img className='image' src={FF} alt="banner" />
        
        <div className="banner-text">
          <h2>Welcome to SwiftBooks</h2>
          <p>Explore a world of knowledge and stories.</p>
        </div>
        
      </div>

    
  );
};

export default LandingPage;
