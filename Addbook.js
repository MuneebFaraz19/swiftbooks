// AddBook.js
import React, { useState } from 'react';
import './Addbook.css'; // Create a CSS file for styling

const AddBook = () => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState(''); 
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [isbn, setISBN] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');

  const handleAddBook = () => {
    // Implement logic to add the book (e.g., send data to the server)
    console.log('Adding book:', { name, genre, author, publishYear, isbn, price, rating });
    // You can perform further actions like clearing the form, showing a success message, etc.
  };

  return (
    <div className="add-book-container">
      <h2>Add Book</h2>
      <div className="input-container">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter book name"
        />
      </div>
      <div className="input-container">
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Enter book genre"
        />
      </div>
      <div className="input-container">
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter book author"
        />
      </div>
      <div className="input-container">
        <label htmlFor="publishYear">Publish Year:</label>
        <input
          type="text"
          id="publishYear"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          placeholder="Enter publish year"
        />
      </div>
      <div className="input-container">
        <label htmlFor="isbn">ISBN:</label>
        <input
          type="text"
          id="isbn"
          value={isbn}
          onChange={(e) => setISBN(e.target.value)}
          placeholder="Enter book ISBN"
        />
      </div>
      <div className="input-container">
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter book price"
        />
      </div>
      <div className="input-container">
        <label htmlFor="rating">Rating:</label>
        <input
          type="text"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Enter book rating"
        />
      </div>
      <button className="add-button" onClick={handleAddBook}>
        Add Book
      </button>
    </div>
  );
};

export default AddBook;
