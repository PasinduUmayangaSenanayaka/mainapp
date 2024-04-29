import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './personalDetailsStyles.css'; // Import the CSS file

const PersonalDetailsPage = () => {
  const [nicFullName, setNicFullName] = useState('');
  const [nicAddress, setNicAddress] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedDivisionalOffice, setSelectedDivisionalOffice] = useState('');
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (agree) {
      // Navigate to the FamilyDetailsPage using navigate function
      navigate('/family-details');
    } else {
      // Navigate back to the HomePage using navigate function
      navigate('/');
    }
  };

  return (
    <div className="container" style={{ backgroundColor: '#959191' }}>
      <h2>Personal Details</h2>
      <div className="form-group">
        <label htmlFor="nicFullName">NIC Per Full Name:</label>
        <input
          type="text"
          id="nicFullName"
          value={nicFullName}
          onChange={(e) => setNicFullName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="nicAddress">NIC Per Address:</label>
        <input
          type="text"
          id="nicAddress"
          value={nicAddress}
          onChange={(e) => setNicAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
  <label htmlFor="district">District:</label>
  <select
    id="district"
    value={selectedDistrict}
    onChange={(e) => setSelectedDistrict(e.target.value)}
  >
    <option value="">Select District</option>
    <option value="Colombo">Colombo</option>
    <option value="Gampaha">Gampaha</option>
    <option value="Kalutara">Kalutara</option>
    <option value="Kandy">Kandy</option>
    <option value="Matale">Matale</option>
    <option value="Nuwara Eliya">Nuwara Eliya</option>
    <option value="Galle">Galle</option>
    <option value="Matara">Matara</option>
    <option value="Hambantota">Hambantota</option>
    <option value="Jaffna">Jaffna</option>
    <option value="Kilinochchi">Kilinochchi</option>
    <option value="Mannar">Mannar</option>
    <option value="Mullaitivu">Mullaitivu</option>
    <option value="Vavuniya">Vavuniya</option>
    <option value="Batticaloa">Batticaloa</option>
    <option value="Ampara">Ampara</option>
    <option value="Trincomalee">Trincomalee</option>
    <option value="Kurunegala">Kurunegala</option>
    <option value="Puttalam">Puttalam</option>
    <option value="Anuradhapura">Anuradhapura</option>
    <option value="Polonnaruwa">Polonnaruwa</option>
    <option value="Badulla">Badulla</option>
    <option value="Monaragala">Monaragala</option>
    <option value="Ratnapura">Ratnapura</option>
    <option value="Kegalle">Kegalle</option>
  </select>
</div>

      <div className="form-group">
        <label htmlFor="divisionalOffice">Divisional Office:</label>
        <select
          id="divisionalOffice"
          value={selectedDivisionalOffice}
          onChange={(e) => setSelectedDivisionalOffice(e.target.value)}
        >
          <option value="">Select Divisional Office</option>
          {/* Add options for divisional offices based on selected district */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="agree">I agree:</label>
        <input
          type="checkbox"
          id="agree"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default PersonalDetailsPage;
