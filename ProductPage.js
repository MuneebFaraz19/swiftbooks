import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProductPage.css'; // Make sure to use the correct CSS file
import FF from './FF.jpg';

const ProductPage = () => {
  const [books, setBooks] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [currentBook, setCurrentBook] = useState('');
  const [salesPerUser, setSalesPerUser] = useState('');
  const [moneySpentInput, setMoneySpentInput] = useState('');

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

  // Add to Cart logic
  const handleAddToCartClick = (book) => {
    
    addToCart(book);
    // Redirect to Cpage after adding to the cart
    window.location.href = '/confirmcart';
  };

  const addToCart = (book) => {
    // Implement your logic to add the book to the cart
    // You can use a context or a state management solution to manage the cart state
    console.log('Added to Cart:', book);
  };

  const handleMoneySpentClick = async () => {
    try {
      const response = await axios.post('http://localhost:5600/users/salesperuser', {
        keyword: moneySpentInput,
      });
      setSalesPerUser(response.data.data[0].SALES);
    } catch (error) {
      console.error('Error fetching sales per user:', error);
    }
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
      <Link to="/UserHistory" className="view-history-button">
        View My History
      </Link>
      <Link to="/Cart" className="view-cart-button">
        View My Cart
      </Link>
      <button className="money-spent-button" onClick={handleMoneySpentClick}>
        Money Spent
      </button>
      <input
        type="text"
        placeholder="Enter UserID or Username"
        value={moneySpentInput}
        onChange={(e) => setMoneySpentInput(e.target.value)}
      />
      {salesPerUser !== null && (
        <p className="money-spent-result">{`Money Spent: ${salesPerUser}`}</p>
      )}
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
              <Link to='/Cpage' className="buy-button" onClick={() => handleBookClick(book.book_title)}>Buy</Link>
              <button className="add-to-cart-button" onClick={() => handleAddToCartClick(book)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
