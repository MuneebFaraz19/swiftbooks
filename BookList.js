// BookList.js
import React from 'react';

const BookList = ({ books, onRemoveBook, onUpdateBook }) => {
  return (
    <div className="book-list">
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <span>{book.name}</span>
            <span>${book.price}</span>
            <button onClick={() => onRemoveBook(book.id)}>Remove</button>
            <button onClick={() => onUpdateBook(book.id, prompt('Enter new price'))}>
              Update Price
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
