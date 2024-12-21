import React from 'react';
import { useNavigate } from 'react-router-dom';


const Welcome = () => {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate('/Login');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to CallBasket</h1>
        <p className="welcome-description">Discover the best products at unbeatable prices.</p>
        <button className="welcome-button" onClick={handleStartShopping}>Start Shopping</button>
      </div>
    </div>
  );
};

export default Welcome;