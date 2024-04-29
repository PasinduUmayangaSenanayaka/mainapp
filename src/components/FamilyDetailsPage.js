import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './familyDetailsStyles.css'; // Import the CSS file

const FamilyDetailsPage = () => {
  const [connection, setConnection] = useState('');
  const [fullName, setFullName] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    // Add validation logic here if needed

    // Navigate to the JobDetailsPage using navigate function
    navigate('/customer-registration');
  };

  return (
    <div className="container" style={{ backgroundColor: '#959191' }}>
      <h2>Family Details</h2>
      <div className="form-group">
        <label htmlFor="connection">Connection of Customer:</label>
        <input
          type="text"
          id="connection"
          value={connection}
          onChange={(e) => setConnection(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="permanentAddress">Permanent Address:</label>
        <input
          type="text"
          id="permanentAddress"
          value={permanentAddress}
          onChange={(e) => setPermanentAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="text"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="nicNumber">NIC Number:</label>
        <input
          type="text"
          id="nicNumber"
          value={nicNumber}
          onChange={(e) => setNicNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="whatsappNumber">WhatsApp Number:</label>
        <input
          type="text"
          id="whatsappNumber"
          value={whatsappNumber}
          onChange={(e) => setWhatsappNumber(e.target.value)}
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default FamilyDetailsPage;
