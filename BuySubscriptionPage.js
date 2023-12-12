// BuySubscriptionPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BuySubscriptionPage.css'
import { Link } from 'react-router-dom';

const BuySubscriptionPage = () => {
  const [subscriptionID, setSubscriptionID] = useState('');
  const [userID, setUserID] = useState('');
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    // Fetch subscriptions from the backend when the component mounts
    fetchSubscriptions();
  }, []);

  const fetchSubscriptions = async () => {
    try {
      const response = await axios.post('http://localhost:5600/subscription/list');
      setSubscriptions(response.data.data);
    } catch (error) {
      console.error('Error fetching subscriptions:', error);
    }
  };

  const handleBuySubscription = async () => {
    try {
      // Send API call to buy subscription
      await axios.post('http://localhost:5600/subscriptions_bought/create', {
        subscriptionID,
        userID,
      });

      // Optionally, you can handle success or navigate to another page
      console.log('Subscription bought successfully!');

      // Refresh the list of subscriptions after buying
      fetchSubscriptions();
    } catch (error) {
      // Handle errors, such as displaying an error message to the user
      console.error('Error buying subscription:', error);
    }
  };

  return (
    <div>
      <h2>Buy Subscription</h2>
      <form>
      <label htmlFor="subscriptionID">Subscription ID:</label>
          <input
            type="text"
            id="subscriptionID"
            name="subscriptionID"
            className="form-input"
            value={subscriptionID}
            onChange={(e) => setSubscriptionID(e.target.value)}
          />

          <label htmlFor="userID">User ID:</label>
          <input
            type="text"
            id="userID"
            name="userID"
            className="form-input"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
          />

        
      </form>
      <button type="button" onClick={handleBuySubscription}>
          Buy Subscription
        </button>
        <Link to="/" className="back-to-home">
        <button type="button">
          Back to Home
        </button>
      </Link>

      <h2>Available Subscriptions</h2>
      <div className="subscriptions-container">
        {subscriptions.map((subscription) => (
          <div key={subscription.subscriptionID} className="subscription-card">
            
            <p>{`Subscription ID: ${subscription.subscriptionID}`}</p>
            <p>{`Name: ${subscription.subscription_name}`}</p>
            <p>{`Validity: ${subscription.validity} days`}</p>
            <p>{`Price: $${subscription.subscription_price}`}</p>
           
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuySubscriptionPage;
