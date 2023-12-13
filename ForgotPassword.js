import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [password, setNewPassword] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await axios.post('http://localhost:5600/users/update', {
        username, // Assuming the username is the email for simplicity
        password,
      });

      console.log('Password reset successful:', response.data);
      // Add any additional logic or redirect the user as needed
    } catch (error) {
      console.error('Error resetting password:', error);
      // Handle errors or display an error message to the user
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Forgot Your Password?
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Enter your email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* New Password Input */}
          <div>
            <label htmlFor="newPassword" className="sr-only">
              New Password
            </label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Enter a new password"
              value={password}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          {/* Reset Password Button */}
          <div>
            <button
              type="button"
              onClick={handleResetPassword}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Link to="/Login">Reset Password</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
