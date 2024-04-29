// ItemDetailsPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ItemDetailsPage = () => {
  const [item1, setItem1] = useState('');
  const [item2, setItem2] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/personal-details');
  };

  return (
    <div className="container">
      <h2>Item Details</h2>
      <div className="input-group">
        <label htmlFor="item1">Item 1 Details:</label>
        <input
          type="text"
          id="item1"
          value={item1}
          onChange={(e) => setItem1(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="item2">Item 2 Details:</label>
        <input
          type="text"
          id="item2"
          value={item2}
          onChange={(e) => setItem2(e.target.value)}
        />
      </div>
      <button className="next-btn" onClick={handleNext}>Next</button>
    </div>
  );
}

export default ItemDetailsPage;
