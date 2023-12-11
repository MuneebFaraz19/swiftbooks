import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProductPage.css'; // Make sure to use the correct CSS file
import FF from './FF.jpg';

const ProductPage = () => {
  const [books, setBooks] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [currentBook, setCurrentBook] = useState('');

  const fetchBooks = async () => {
    try {
      const response = await axios.post('http://localhost:5600/books/search', { keyword: searchKeyword });
      setBooks(response.data.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [searchKeyword]);

  useEffect(() => {
    // This code will run every time currentBook changes
    console.log('Current Book has been updated:', currentBook);

    // You can perform additional actions here
    // For example, you can make an API call using the updated currentBook
    const fetchData = async () => {
      try {
        const response = await axios.get(`http:///localhost:5600/books/currentBook`);
        console.log('Book details:', response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchData();
  }, [currentBook]);

  const handleBookClick = (bookName) => {
    // Set the currentBook state
    setCurrentBook(bookName);
    // The useEffect hook will be triggered after this, logging the updated currentBook
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Book name, genre, The author's name, and publish year..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>
      <h2 className="heading">Our Books</h2>
      <div className="books-container">
        {books.map((book) => (
          <div key={book.isbn} className="book-card">
            <img src={FF} alt={book.book_title} className="book-image" />
            <div className="book-details">
              <h3 className="book-title">{book.book_title}</h3>
              <p className="book-info">{`Genre: ${book.genre_name}`}</p>
              <p className="book-info">{`Author: ${book.author_name}`}</p>
              <p className="book-info">{`Publish Year: ${book.publish_year}`}</p>
              <p className="book-info">{`Quantity: ${book.Qty}`}</p>
              <p className="book-info">{`Price: $${book.price}`}</p>
              <p className="book-info">{`Rating: ${book.rating}`}</p>
              <Link to='/Cpage' className="buy-button" onClick={() => handleBookClick(book.book_title)}>Buy</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
