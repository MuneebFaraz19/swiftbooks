import logo from './logo.svg';
import './App.css';
import Login from './Login';
import LandingPage from './LandingPage';
import Navbar from './Navbar';
import Products from './Products';
import AdminDashboard from './AdminPage';

import AdminLogin from './AdminLogin';
import ProductPage from './ProductPage';
import CheckoutPage from './CheckoutPage';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import React, { useState } from 'react';
import ConfirmationPage from './ConfirmationPage';



function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [currentBook, setCurrentBook] = useState(null);
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage />}/>
    <Route path="Login" element={<Login />} />
    <Route path="AdminLogin" element={<AdminLogin />} />
    <Route path="AdminPage" element={<AdminDashboard />} />
    <Route
          path="ProductPage"
          element={<ProductPage setCurrentBook={setCurrentBook} />}
        />
    <Route path='ForgotPassword' element={<ForgotPassword/>}/>
    <Route path = 'CheckoutPage' element = {<CheckoutPage/>}/>
    
      
    <Route path="/" element={<LandingPage />} />
        <Route path="Login" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="AdminLogin" element={<AdminLogin />} />
        
        <Route path="ProductPage" element={<ProductPage setCurrentBook={setCurrentBook} />} />
        <Route path="ForgotPassword" element={<ForgotPassword />} />
        <Route
          path="/checkout"
          element={<CheckoutPage currentUser={currentUser} currentBook={currentBook} />}
        />
        <Route path="Cpage" element={<ConfirmationPage/>}/>
          
    </Routes>
    </BrowserRouter>
  );
}

export default App;