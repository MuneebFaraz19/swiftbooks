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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded p-8 shadow-md">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Edit Book Details</h2>
        <form className="edit-books-form space-y-4">
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
                value={Qty}
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

          {/* Edit Book Button */}
          <button
            type="button"
            onClick={handleEditClick}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Edit Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBooks;
