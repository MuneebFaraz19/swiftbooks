// BuySubscriptionPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

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
      <Navbar/>
    
    <div className="container mx-auto p-8">
      
      <h2 className="text-3xl font-semibold mb-4">Buy Subscription</h2>
      <form className="mb-4">
        <div className="flex space-x-4">
          <div className="flex flex-col">
            <label htmlFor="subscriptionID" className="mb-1">Subscription ID:</label>
            <input
              type="text"
              id="subscriptionID"
              name="subscriptionID"
              className="input"
              value={subscriptionID}
              onChange={(e) => setSubscriptionID(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userID" className="mb-1">User ID:</label>
            <input
              type="text"
              id="userID"
              name="userID"
              className="input"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
          </div>
        </div>
      </form>

      <button
        type="button"
        className="button bg-purple-500 text-white"
        onClick={handleBuySubscription}
      >
        Buy Subscription
      </button>

      <Link to="/" className="back-to-home mt-4">
        <button type="button" className="button bg-purple-500">
          Back to Home
        </button>
      </Link>

      <h2 className="text-3xl font-semibold my-4">Available Subscriptions</h2>
      <div className="flex flex-wrap">
        {subscriptions.map((subscription) => (
          <div key={subscription.subscriptionID} className="subscription-card mb-4 mx-4 bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
            <p className="text-lg mb-2">{`Subscription ID: ${subscription.subscriptionID}`}</p>
            <p>{`Name: ${subscription.subscription_name}`}</p>
            <p>{`Validity: ${subscription.validity} days`}</p>
            <p>{`Price: $${subscription.subscription_price}`}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BuySubscriptionPage;
