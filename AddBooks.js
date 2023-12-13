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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded p-8 shadow-md">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Add Books</h2>
        <form className="add-books-form space-y-4">
          {/* ISBN */}
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label htmlFor="isbn" className="text-sm font-medium text-gray-700">
                ISBN:
              </label>
              <input
                type="text"
                id="isbn"
                name="isbn"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Book Title */}
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label htmlFor="bookTitle" className="text-sm font-medium text-gray-700">
                Book Title:
              </label>
              <input
                type="text"
                id="bookTitle"
                name="bookTitle"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Rating */}
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label htmlFor="rating" className="text-sm font-medium text-gray-700">
                Rating:
              </label>
              <input
                type="text"
                id="rating"
                name="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Genre ID */}
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label htmlFor="genreID" className="text-sm font-medium text-gray-700">
                Genre ID:
              </label>
              <input
                type="text"
                id="genreID"
                name="genreID"
                value={genreID}
                onChange={(e) => setGenreID(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Author ID */}
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label htmlFor="authorID" className="text-sm font-medium text-gray-700">
                Author ID:
              </label>
              <input
                type="text"
                id="authorID"
                name="authorID"
                value={authorID}
                onChange={(e) => setAuthorID(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Publish Year */}
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label htmlFor="publishYear" className="text-sm font-medium text-gray-700">
                Publish Year:
              </label>
              <input
                type="text"
                id="publishYear"
                name="publishYear"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Quantity */}
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                Quantity:
              </label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Price */}
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label htmlFor="price" className="text-sm font-medium text-gray-700">
                Price:
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Add Book Button */}
          <button
            type="button"
            onClick={handleAddBook}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
