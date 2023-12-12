import React from 'react';
import { Link } from 'react-router-dom';
import './Thankyou.css'; // Make sure to use the correct CSS file

const ThankYouPage = () => {
  return (
    <div className="thank-you-container">
      <h2 className='heading'>Thank You for Your Order Confirmation!</h2>
      <p>We appreciate your business. Your order has been confirmed successfully.</p>
      <div className="button-container">
        <Link to="/productpage" className="button">
          Back to Product Page
        </Link>
        <Link to="/" className="button">
          Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
