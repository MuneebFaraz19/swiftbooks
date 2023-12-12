// ViewUsers.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewUsers.css'; // Make sure to use the correct CSS file

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    // Fetch users from the backend when the component mounts
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.post('http://localhost:5600/users/list');
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSearch = async () => {
    try {
      // Send API call to search for users
      const response = await axios.post('http://localhost:5600/users/search', {
        keyword: searchKeyword,
      });

      setUsers(response.data.data);
    } catch (error) {
      console.error('Error searching for users:', error);
    }
  };

  return (
    <div>
      <h2>View Users</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Username or ID..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="users-container">
        {users.map((user) => (
          <div key={user.userID} className="user-card">
            <div className="user-details">
              <h3 className="user-title">{user.username}</h3>
              <p className="user-info">{`ID: ${user.userID}`}</p>
              <p className="user-info">{`Email: ${user.email}`}</p>
              <p className="user-info">{`Joined Date: ${user.join_date}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewUsers;
