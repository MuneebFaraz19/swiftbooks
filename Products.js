import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';
import FF from './FF.jpg';

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.post('http://localhost:5600/books/list', {});
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="heading">Our Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.isbn} className="product-card">
            <img src={FF} alt={product.book_title} className="product-image" />
            <h3 className="product-name">{product.book_title}</h3>
            <p className="product-price">{`$${product.price}`}</p>
            <p className="product-details">
              <strong>Published Year:</strong> {product.publish_year},{' '}
              <strong>Genre:</strong> {product.genre_name},{' '}
              <strong>Author:</strong> {product.author_name},{' '}
              <strong>Quantity:</strong> {product.Qty}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
