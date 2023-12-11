import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5600/adminLogin/login', {
        username: username,
        password: password,
      });

      const token = response.data.token;

      // Save the token to localStorage or sessionStorage
      localStorage.setItem('token', token);

      // Redirect to AdminPage
      window.location.href = '/AdminPage';
    } catch (error) {
      setError('Invalid username or password');
      console.error('Error logging in:', error);
    }
  };

  const handleForgotPassword = () => {
    // Implement the logic for forgot password, e.g., show a modal or redirect to a reset password page
    console.log('Forgot password clicked');
  };

  return (
    <div className="login-container">
      <h1 className="app-title">SwiftBooks</h1>
      <div className="login-form">
        <h2 className='Heading'>Admin Login</h2>
        {error && <p className="error-message">{error}</p>}
        <label htmlFor="username" className='username'>
          Username:
        </label>
        <input
          className='input'
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password" className='username'>
          Password:
        </label>
        <input
          className='input'
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p className="forgot-password" onClick={handleForgotPassword}>
          <Link to='/ForgotPassword'>Forgot your password?</Link>
        </p>
        {/* Add Link to AdminPage */}
        <p className="admin-page-link">
          <Link to='/AdminPage'>Go to AdminPage</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
