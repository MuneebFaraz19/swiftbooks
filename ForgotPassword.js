// ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios'
import './ForgotPassword.css'; // Create a CSS file for styling

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [Password, setNewPassword] = useState('');

  const handleResetPassword = async () => {
    try {
      // Call the update function in the backend
      const response = await axios.post('http://localhost:5600/users/update', {
        username: username, // Assuming the username is the email for simplicity
        password: Password,
      });

      console.log('Password reset successful:', response.data);
      // Add any additional logic or redirect the user as needed
    } catch (error) {
      console.error('Error resetting password:', error);
      // Handle errors or display an error message to the user
    }
  };

  return (
    <div className="forgot-password-container">
      <h2 className='heading'>Forgot Your Password?</h2>
      <div className="input-container">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="input-container">
        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          value={Password}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter a new password"
        />
      </div>
      <button className="reset-button" onClick={handleResetPassword}>
        <Link to="/Login" className="reset-button">
        Reset Password
        </Link>
      </button>
    </div>
  );
};

export default ForgotPassword;
