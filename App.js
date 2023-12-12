import logo from './logo.svg';
import './App.css';
import Login from './Login';
import LandingPage from './LandingPage';
import Navbar from './Navbar';
import Products from './Products';
import AdminLogin from './AdminLogin';
import ProductPage from './ProductPage';
import CheckoutPage from './CheckoutPage';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import React, { useState } from 'react';
import ConfirmationPage from './ConfirmationPage';
import ThankYouPage from './Thankyou';
import CartPage from './CartPage';
import ConfirmCart from './ConfirmCart';
import Signup from './Signup';
import UserHistory from './UserHistory';
import BuySubscriptionPage from './BuySubscriptionPage';
import AddBooks from './AddBooks';
import EditBooks from './EditBooks';
import ViewBooks from './ViewBooks';
import ViewUsers from './ViewUsers';
import AdminDashboard from './AdminDashboard';


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
    <Route path = 'Cart' element = {<CartPage/>}/>
    <Route path = 'confirmcart' element = {<ConfirmCart/>}/>
    <Route path  = 'signup' element = {<Signup/>}/>
    <Route path = 'userhistory' element = {<UserHistory/>}/>
    <Route path = 'buysub' element = {<BuySubscriptionPage/>}/>
    <Route path = 'addbooks' element = {<AddBooks/>}/>
    <Route path = 'editbooks' element = {<EditBooks/>}/>
    <Route path = 'viewbooks' element = {<ViewBooks/>}/>
    <Route path = 'viewusers' element = {<ViewUsers/>}/>
    <Route path = 'admindashboard' element = {<AdminDashboard/>}/>
      
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
        <Route path="Thankyou" element={<ThankYouPage/>}/>
          
    </Routes>
    </BrowserRouter>
  );
}

export default App;