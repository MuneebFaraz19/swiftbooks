import React, { useState } from 'react';
import './Signup.css'; // Create a new CSS file for Signup styles
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Make a POST request to the backend signup endpoint
      const response = await axios.post('http://localhost:5600/users/create', {
        username: username,
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
      });

      
      console.log('Signup successful!', response.data);

      // You may want to redirect to the login page or another page after successful signup
      // history.push('/login'); // Uncomment and adjust based on your routing setup
      window.location.href = '/Login';
    } catch (error) {
      // Handle errors, such as displaying an error message
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="app-title">BookStore</h1>
      <div className="signup-form">
        <h2 className='Heading'>Signup</h2>
        <label htmlFor="username" className='username'>Username:</label>
        <input
          className='input'
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="firstName" className='username'>First Name:</label>
        <input
          className='input'
          type="text"
          id="firstName"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName" className='username'>Last Name:</label>
        <input
          className='input'
          type="text"
          id="lastName"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email" className='username'>Email:</label>
        <input
          className='input'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className='username'>Password:</label>
        <input
          className='input'
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button onClick={handleSignup}>
          <Link to="/">Signup</Link>
        </button>
        <p className="login-link">
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;