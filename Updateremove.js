// UpdateRemoveBook.js
import React, { useState } from 'react';
import './updateremove.css'; // Create a CSS file for styling

const UpdateRemoveBook = ({ book, onUpdate, onRemove }) => {
  const [updatedBookTitle, setUpdatedBookTitle] = useState(book.title);
  const [updatedPrice, setUpdatedPrice] = useState(book.price);
  // Add more state variables for other attributes as needed

  const handleUpdateBook = () => {
    // Implement logic to update the book (e.g., send updated data to the server)
    onUpdate({ id: book.id, title: updatedBookTitle, price: updatedPrice });
    // You can perform further actions like clearing the form, showing a success message, etc.
  };

  const handleRemoveBook = () => {
    // Implement logic to remove the book (e.g., send book ID to the server)
    onRemove(book.id);
    // You can perform further actions like showing a success message, etc.
  };

  return (
    <div className="update-remove-book-container">
      <h2>Update / Remove Book</h2>
      <div className="input-container">
        <label htmlFor="updatedBookTitle">Updated Title:</label>
        <input
          type="text"
          id="updatedBookTitle"
          value={updatedBookTitle}
          onChange={(e) => setUpdatedBookTitle(e.target.value)}
          placeholder="Enter updated title"
        />
      </div>
      <div className="input-container">
        <label htmlFor="updatedPrice">Updated Price:</label>
        <input
          type="text"
          id="updatedPrice"
          value={updatedPrice}
          onChange={(e) => setUpdatedPrice(e.target.value)}
          placeholder="Enter updated price"
        />
      </div>
      {/* Add more input fields for other attributes as needed */}
      <button className="update-button" onClick={handleUpdateBook}>
        Update Book
      </button>
      <button className="remove-button" onClick={handleRemoveBook}>
        Remove Book
      </button>
    </div>
  );
};

export default UpdateRemoveBook;
