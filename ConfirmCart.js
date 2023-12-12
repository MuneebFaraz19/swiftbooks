import React, { useState } from 'react';
import axios from 'axios';
import './ConfirmCart.css'; // Make sure to use the correct CSS file
import { Link } from 'react-router-dom';
const ConfirmCart = () => {
  const [isbn, setISBN] = useState('');
  const [userID, setUserID] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleConfirmOrder = async () => {
    try {
      // Make an API call to confirm the order
      const response = await axios.post('http://localhost:5600/wishlist/create', {
        isbn,
        userID,
      });

      // Assuming the API returns a confirmation message
      setConfirmationMessage(response.data.message);
    } catch (error) {
      console.error('Error confirming order:', error);
      setConfirmationMessage('Error confirming order. Please try again.');
    }
  };

  return (
    <div className="confirmation-container">
      <h2>Order Confirmation</h2>
      <div className="form-group">
        <label htmlFor="isbn">Book ISBN:</label>
        <input
          type="text"
          id="isbn"
          name="isbn"
          value={isbn}
          onChange={(e) => setISBN(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="userID">User ID:</label>
        <input
          type="text"
          id="userID"
          name="userID"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
        />
      </div>
      <Link to='/thankyou'>
      <button onClick={handleConfirmOrder}>Confirm Order</button></Link>
      {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
    </div>
  );
};

export default ConfirmCart;
