// BookForm.js
import React, { useState } from 'react';

const BookForm = ({ onAddBook }) => {
  const [newBook, setNewBook] = useState({
    name: '',
    genre: '',
    quantity: '',
    ISBN: '',
    rating: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newBook.name.trim() &&
      newBook.genre.trim() &&
      newBook.quantity.trim() &&
      newBook.ISBN.trim() &&
      newBook.rating.trim() &&
      newBook.price.trim()
    ) {
      const id = Date.now();
      onAddBook({ ...newBook, id });
      setNewBook({
        name: '',
        genre: '',
        quantity: '',
        ISBN: '',
        rating: '',
        price: '',
      });
    }
  };

  return (
    <div className="book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Book Name:
          <input
            type="text"
            name="name"
            value={newBook.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Genre:
          <input
            type="text"
            name="genre"
            value={newBook.genre}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Quantity:
          <input
            type="text"
            name="quantity"
            value={newBook.quantity}
            onChange={handleInputChange}
          />
        </label>
        <label>
          ISBN:
          <input
            type="text"
            name="ISBN"
            value={newBook.ISBN}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Rating:
          <input
            type="text"
            name="rating"
            value={newBook.rating}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={newBook.price}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
