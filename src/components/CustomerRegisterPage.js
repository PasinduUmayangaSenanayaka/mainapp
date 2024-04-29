import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './customerRegistrationStyles.css'; // Import the CSS file

const CustomerRegistrationPage = () => {
  const [fullName, setFullName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    // Add validation logic here if needed
    // Navigate to the PawnGeneratePage using navigate function
    navigate('/pawn-generate');
  };

  return (
    
    <div className="container" style={{ backgroundColor: '#959191' }}>
      <h2>Customer Registration</h2>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="whatsappNumber">WhatsApp Number:</label>
        <input
          type="text"
          id="whatsappNumber"
          value={whatsappNumber}
          onChange={(e) => setWhatsappNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="nicNumber">NIC Number:</label>
        <input
          type="text"
          id="nicNumber"
          value={nicNumber}
          onChange={(e) => setNicNumber(e.target.value)}
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default CustomerRegistrationPage;
