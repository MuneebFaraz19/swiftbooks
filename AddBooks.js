// AddBooks.js

import React, { useState } from 'react';
import axios from 'axios';
import './AddBooks.css';

const AddBooks = () => {
  const [isbn, setIsbn] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [rating, setRating] = useState('');
  const [genreID, setGenreID] = useState('');
  const [authorID, setAuthorID] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleAddBook = async () => {
    try {
      // Send API call to add book
      await axios.post('http://localhost:5600/books/create', {
        isbn,
        book_title: bookTitle,
        rating,
        genreID,
        authorID,
        publish_year: publishYear,
        Qty: quantity,
        price,
      });

      // Optionally, you can handle success or navigate to another page
      console.log('Book added successfully!');
    } catch (error) {
      // Handle errors, such as displaying an error message to the user
      console.error('Error adding book:', error);
    }
  };

  return (
    <div>
      <h2>Add Books</h2>
      <form className="add-books-form">
        <label htmlFor="isbn">ISBN:</label>
        <input
          type="text"
          id="isbn"
          name="isbn"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />

        <label htmlFor="bookTitle">Book Title:</label>
        <input
          type="text"
          id="bookTitle"
          name="bookTitle"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="text"
          id="rating"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <label htmlFor="genreID">Genre ID:</label>
        <input
          type="text"
          id="genreID"
          name="genreID"
          value={genreID}
          onChange={(e) => setGenreID(e.target.value)}
        />

        <label htmlFor="authorID">Author ID:</label>
        <input
          type="text"
          id="authorID"
          name="authorID"
          value={authorID}
          onChange={(e) => setAuthorID(e.target.value)}
        />

        <label htmlFor="publishYear">Publish Year:</label>
        <input
          type="text"
          id="publishYear"
          name="publishYear"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={quantity}
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

        <button type="button" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
