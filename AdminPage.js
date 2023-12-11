// AdminDashboard.js
import React, { useState } from 'react';
import './AdminDashboard.css';
import Navbar from './Navbar';

const AdminDashboard = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Book 1',
      genre: 'Fiction',
      author: 'Author 1',
      publishYear: '2022',
      isbn: '1234567890',
      price: '19.99',
      rating: '4.5',
      quantity: 50,
    },
    // Add more products as needed
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    genre: '',
    author: '',
    publishYear: '',
    isbn: '',
    price: '',
    rating: '',
    quantity: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleAddProduct = () => {
    setProducts((prevProducts) => [...prevProducts, { id: Date.now(), ...newProduct }]);
    setNewProduct({
      name: '',
      genre: '',
      author: '',
      publishYear: '',
      isbn: '',
      price: '',
      rating: '',
      quantity: '',
    });
  };

  const handleRemoveProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleUpdatePrice = (id, newPrice) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, price: newPrice } : product
    );
    setProducts(updatedProducts);
  };
  const handleUpdateQuantity = (id, newQuantity) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, quantity: newQuantity } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="admin-dashboard">
        <Navbar/>
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="add-product-form">
        <h2>Add New Product</h2>
        <div className="form-row">
    <div>
      <label>Name:</label>
      <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
    </div>
    <div>
      <label>Genre:</label>
      <input type="text" name="genre" value={newProduct.genre} onChange={handleInputChange} />
    </div>
    <div><label>Author:</label>
        <input type="text" name="author" value={newProduct.author} onChange={handleInputChange} /></div>
        
  </div>
  
  <div className="form-row">
    <div>
   <label>Publish Year:</label>
        <input
          type="text"
          name="publishYear"
          value={newProduct.publishYear}
          onChange={handleInputChange}
        />
    </div>
    <div>
    <label>Publish Year:</label>
        <input
          type="text"
          name="publishYear"
          value={newProduct.publishYear}
          onChange={handleInputChange}
        />
    </div>
    <div>
    <label>ISBN:</label>
        <input type="text" name="isbn" value={newProduct.isbn} onChange={handleInputChange} />
        </div>
  </div>
  <div className="form-row">
    
    <div>
  
  
  
        
        
       
        
        <label>Price:</label>
        <input type="text" name="price" value={newProduct.price} onChange={handleInputChange} /></div>
     <div>  <label>Rating:</label>
        <input type="text" name="rating" value={newProduct.rating} onChange={handleInputChange} /> 
        </div> 
        <div>
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={newProduct.quantity}
          onChange={handleInputChange}
        /></div>
        </div>
        <button className='button' onClick={handleAddProduct}>Add Product</button>
      </div>
      <div className="product-list">
        <h2>Product List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Genre</th>
              <th>Author</th>
              <th>Publish Year</th>
              <th>ISBN</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.genre}</td>
                <td>{product.author}</td>
                <td>{product.publishYear}</td>
                <td>{product.isbn}</td>
                <td>{product.price}</td>
                <td>{product.rating}</td>
                <td>{product.quantity}</td>
                <td>
                  <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
                  <button
                    onClick={() =>
                      handleUpdatePrice(
                        product.id,
                        prompt(`Enter new price for ${product.name}:`)
                      )
                    }
                  >
                    Update Price
                  </button>
                  <button
                    onClick={() =>
                      handleUpdateQuantity(
                        product.id,
                        prompt(`Enter new quantity for ${product.name}:`)
                      )
                    }
                  >
                    Update Quantity
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;