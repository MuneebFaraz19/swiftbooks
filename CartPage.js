import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CartPage.css'; 

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [username, setUsername] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    // Fetch cart items from the backend when the component mounts
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.post('http://localhost:5600/wishlist/search',  { keyword : username }); 
      setCartItems(response.data.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const removeFromCart = async (isbn) => {
    try {
      // Call the backend API to remove the item from the cart
      await axios.post(`http://localhost:5600/wishlist/delete/${username}`); // Adjust the endpoint as per your backend
      // After successful removal, fetch updated cart items
      fetchCartItems();
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const handleBuyClick = () => {
    
    window.location.href = '/Cpage'; // 
  };

  const handleUsernameSubmit = (e) => {
    
      e.preventDefault();
      fetchCartItems();
    
  };
  console.log(username);
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      
        <label htmlFor="username">Enter Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        
        />    
        
        <button onClick= {fetchCartItems}>Search Wishlist</button>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="books-container">
          {cartItems.map((item) => (
            <div key={item.isbn} className="book-card">
              <div className="book-details">
                <h3 className="book-title">{item.book_title}</h3>
                <p className="book-info">{`username: ${item.username}`}</p>
                
                <p className="book-info">{`user ID: ${item.userID}`}</p>
                <p className="book-info">{`ISBN: ${item.isbn}`}</p>
                <p className="book-info">{`Date added: ${item.added_date}`}</p>
                <p className="book-info">{`Price: $${item.price}`}</p>
                
                <Link to='/Cpage' className="buy-button" onClick={() => handleBuyClick()}>Buy</Link>
                <button onClick={() => removeFromCart(item.isbn)}>Remove from Cart</button>
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default CartPage;
