// SearchBar.js
import React, { useState } from 'react';
import './Searchbar.css'; // Create a CSS file for styling

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () => {
    // Implement logic to perform the search (e.g., send searchQuery to the server)
    onSearch(searchQuery);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search books..."
        className="search-input"
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
