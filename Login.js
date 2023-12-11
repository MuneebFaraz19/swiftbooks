import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
   try {
    const response = await axios.post('http://localhost:5600/login/login', {
      username,
      password,
    });
    
    // Example of setting the user in the state after login
  const handleLogin = (username) => {
    setCurrentUser(username);

};


    // Handle successful login response
    console.log('Login successful:', response.data);
  } catch (error) {
    // Handle login error
    console.error('Login error:', error.response ? error.response.data : error.message);
  }
};

  return (
    <div className="login-container">
      <h1 className="app-title">BookStore</h1>
      <div className="login-form">
        <h2 className='Heading'>Login</h2>
        <label htmlFor="username"
        className='username'>Username:</label>
        <input className='input'
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password"
        className='username'>Password:</label>
        <input className='input'
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>
          <Link to="/">Login</Link></button>
          <p className="forgot-password" >
         <Link to='/ForgotPassword'>Forgot your password?</Link> 
        </p>
      </div>
    </div>
  );
};

export default Login;
