import React, { useState } from 'react';
import './projectManagerStyles.css'; // Import the CSS file

const ProjectManagerPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [todayMarketPrice, setTodayMarketPrice] = useState('');
  const [loanApprovalValue, setLoanApprovalValue] = useState('');
  const [caratValues, setCaratValues] = useState({
    24: { marketPrice: '', loanValue: '' },
    22: { marketPrice: '', loanValue: '' },
    21: { marketPrice: '', loanValue: '' },
    20: { marketPrice: '', loanValue: '' },
    19: { marketPrice: '', loanValue: '' },
    18: { marketPrice: '', loanValue: '' },
    17: { marketPrice: '', loanValue: '' },
    16: { marketPrice: '', loanValue: '' },
    15: { marketPrice: '', loanValue: '' },
    14: { marketPrice: '', loanValue: '' },
    13: { marketPrice: '', loanValue: '' },
    12: { marketPrice: '', loanValue: '' }
  });

  const calculateCaratValues = (marketPrice, loanValue) => {
    const caratValue = marketPrice / 22;
    const loanPerCarat = loanValue / 22;

    const updatedCaratValues = {};
    for (let carat = 12; carat <= 24; carat++) {
      if (carat !== 23) {
        const marketValue = (caratValue * carat).toFixed(2);
        const loanApproved = (loanPerCarat * carat).toFixed(2);
        updatedCaratValues[carat] = { marketPrice: marketValue, loanValue: loanApproved };
      }
    }
    setCaratValues(updatedCaratValues);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    // Perform any additional actions related to date change if needed
  };

  const handleInputChange = (event, field) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      if (field === 'todayMarketPrice') {
        setTodayMarketPrice(value);
        calculateCaratValues(value, loanApprovalValue);
      } else if (field === 'loanApprovalValue') {
        setLoanApprovalValue(value);
        calculateCaratValues(todayMarketPrice, value);
      }
    }
  };

  return (
    <div className="container">
      <h2>Market Value Update</h2>
      <div className="input-field">
        <label htmlFor="selectedDate">Select Date:</label>
        <input
          type="date"
          id="selectedDate"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <div className="input-field">
        <label htmlFor="todayMarketPrice">Today Market Price:</label>
        <input
          type="number"
          id="todayMarketPrice"
          value={todayMarketPrice}
          onChange={(e) => handleInputChange(e, 'todayMarketPrice')}
        />
      </div>
      <div className="input-field">
        <label htmlFor="loanApprovalValue">Loan Approval Value:</label>
        <input
          type="number"
          id="loanApprovalValue"
          value={loanApprovalValue}
          onChange={(e) => handleInputChange(e, 'loanApprovalValue')}
        />
      </div>
      <table className="carat-table">
        <thead>
          <tr>
            <th>Carat</th>
            <th>Market Price</th>
            <th>Loan Approval Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(caratValues)
            .reverse()
            .map(([carat, values]) => (
              <tr key={carat}>
                <td>{carat}</td>
                <td>{values.marketPrice}</td>
                <td>{values.loanValue}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectManagerPage;
