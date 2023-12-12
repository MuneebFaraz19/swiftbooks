// EditBooks.js

import React, { useState } from 'react';
import axios from 'axios';
import './EditBooks.css';

const EditBooks = () => {
  const [isbn, setIsbn] = useState('');
  const [Qty, setQuantity] = useState(null);
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');

  const handleEditClick = async () => {
    try {
      // Send API call to update book details
      await axios.post('http://localhost:5600/books/update', {
        isbn,
        Qty,
        price,
        rating,
      });

      // Optionally, you can handle success or navigate to another page
      console.log('Book details updated successfully!');
    } catch (error) {
      // Handle errors, such as displaying an error message to the user
      console.error('Error updating book details:', error);
    }
  };

  return (
    <div className="edit-books-container">
      <h2>Edit Book Details</h2>
      <form className="edit-books-form">
        <label htmlFor="isbn">ISBN:</label>
        <input
          type="text"
          id="isbn"
          name="isbn"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={Qty}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="text"
          id="rating"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button type="button" onClick={handleEditClick}>
          Edit Book
        </button>
      </form>
    </div>
  );
};

export default EditBooks;
