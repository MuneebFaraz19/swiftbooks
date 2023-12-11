import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CheckoutPage = ({ currentUser, currentBook }) => {
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.post('http://localhost:5600/books/searchForBB', { keyword: currentBook });
        const bookData = response.data.data[0];
        setBookDetails(bookData);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [currentBook]);

  const handleBuyButtonClick = async () => {
    try {
      // Use the create function in the backend to add the order to the database
      await axios.post('http://localhost:5600/books_bought/create', {
        userID: currentUser, // Assuming currentUser holds the user ID
        isbn: bookDetails.isbn,
      });

      // Redirect to the ProductPage after a successful purchase
      window.location.href = '/ProductPage';
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  if (!bookDetails) {
    return <p>Loading...</p>; // You can show a loading indicator while fetching book details
  }

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>{bookDetails.book_title}</h3>
        <p>{`Genre: ${bookDetails.genre_name}`}</p>
        <p>{`Author: ${bookDetails.author_name}`}</p>
        <p>{`Publish Year: ${bookDetails.publish_year}`}</p>
        <p>{`Quantity: ${bookDetails.Qty}`}</p>
        <p>{`Price: $${bookDetails.price}`}</p>
        <p>{`Rating: ${bookDetails.rating}`}</p>
        {/* Other book details */}
        <button onClick={handleBuyButtonClick}>Buy</button>
        <Link to='/ProductPage'>Back to Product Page</Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
