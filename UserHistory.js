import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './UserHistory.css'; 
import FF from './FF.jpg';


const UserHistory = () => {
  const [userHistory, setUserHistory] = useState([]);
  const [username, setUsername] = useState('');
  const [totalSpent, setTotalSpent] = useState(null);

  useEffect(() => {
    // Fetch user history from the backend when the component mounts
    fetchUserHistory();
  }, []);

  const fetchUserHistory = async () => {
    try {
      const response = await axios.post('http://localhost:5600/books_bought/search', { keyword: username });
      setUserHistory(response.data.data);
    } catch (error) {
      console.error('Error fetching user history:', error);
    }
  };

  const handleBackToProductPage = () => {
    // Redirect back to the product page
    window.location.href = '/ProductPage'; // Adjust the route as needed
  };

  const handleUsernameSubmit = async (e) => {
    e.preventDefault();
    await fetchUserHistory();
    await fetchTotalSpent;
  };

  const fetchTotalSpent = async () => {
    try {
      const response = await axios.post('http://localhost:5600/books_bought/moneyspentbooksbyuser/', {keyword : username});
      setTotalSpent(response.data.totalSpent);
    } catch (error) {
      console.error('Error fetching total spent:', error);
    }
  };

  return (
    <div className="user-history-container">
      <h2>User History</h2>
      <form onSubmit={handleUsernameSubmit}>
        <label htmlFor="username">Enter Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search User History</button>
        
      </form>
      <button onClick={() => handleBackToProductPage()}>Back to Product Page</button>
      {userHistory.length === 0 ? (
        <p>No user history available.</p>
      ) : (
        <div className="history-container">
            
          {userHistory.map((item) => (
            <div key={item.isbn} className="history-card">
                <img src={FF} alt={item.book_title} className="book-image" />
              <div className="history-details">
                <h3 className="history-title">{item.book_title}</h3>
                <p className="history-info">{`username: ${item.username}`}</p>
                <p className="history-info">{`user ID: ${item.userID}`}</p>
                <p className="history-info">{`ISBN: ${item.isbn}`}</p>
                <p className="history-info">{`Date added: ${item.added_date}`}</p>
                <p className="history-info">{`Price: $${item.price}`}</p>
                
              </div>
            </div>
          ))}
        </div>
      )}
      

    </div>
  );
};

export default UserHistory;
