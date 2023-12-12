// AdminDashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Make sure to use the correct CSS file

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-buttons">
        <div className="dashboard-row">
          <Link to="/ViewBooks" className="dashboard-button">
            View Books
          </Link>
          <Link to="/AddBooks" className="dashboard-button">
            Add Books
          </Link>
        </div>
        <div className="dashboard-row">
          <Link to="/EditBooks" className="dashboard-button">
            Edit Books
          </Link>
          <Link to="/ViewUsers" className="dashboard-button">
            View Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
