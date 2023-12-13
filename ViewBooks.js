// ViewBooks.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewBooks.css';
import FF from './FF.jpg';

const ViewBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    // Fetch books from the backend when the component mounts
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.post('http://localhost:5600/books/search', { keyword: searchKeyword });
      setBooks(response.data.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSearch = () => {
    fetchBooks();
  };

  return (
    <div>
      <h2>View All Books</h2>
      <div className="search-container">
        <input
          type="text"
          
          placeholder="Search by Book name, genre, author, and publish year..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button className='searchbutton' onClick={handleSearch}>Search</button>
      </div>
      <div className="books-container">
        {books.map((book) => (
          <div key={book.isbn} className="book-card">
            <img src={FF} alt={book.book_title} className="book-image" />
            <div className="book-details">
              <h3 className="book-title">{book.book_title}</h3>
              <p className="book-info">{`ISBN: ${book.isbn}`}</p>
              <p className="book-info">{`Genre: ${book.genre_name}`}</p>
              <p className="book-info">{`Author: ${book.author_name}`}</p>
              <p className="book-info">{`Publish Year: ${book.publish_year}`}</p>
              <p className="book-info">{`Quantity: ${book.Qty}`}</p>
              <p className="book-info">{`Price: $${book.price}`}</p>
              <p className="book-info">{`Rating: ${book.rating}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBooks;
