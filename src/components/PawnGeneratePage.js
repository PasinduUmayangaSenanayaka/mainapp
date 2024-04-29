import React, { useState, useEffect } from 'react';
import { FaTrashAlt, FaPlus } from 'react-icons/fa'; // Import the trash and plus icons
import './pawnGenerateStyles.css'; // Import the CSS file

const PawnGeneratePage = () => {
  const [items, setItems] = useState([{ itemName: '', itemsQuantity: '', totalWeight: '', netWeight: '' }]);
  const [monetaryValues, setMonetaryValues] = useState([]);
  const [loanApprovalValue, setLoanApprovalValue] = useState('');
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalGrossWeight, setTotalGrossWeight] = useState(0);
  const [totalNetWeight, setTotalNetWeight] = useState(0);
  const [averageCarat, setAverageCarat] = useState(0);

  useEffect(() => {
    calculateMonetaryValues();
  }, [items]);

  const calculateMonetaryValues = () => {
    // Calculation logic here
  };

  const addItem = () => {
    setItems([...items, { itemName: '', itemsQuantity: '', totalWeight: '', netWeight: '' }]);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleInputChange = (index, event, field) => {
    const updatedItems = [...items];
    updatedItems[index][field] = event.target.value;
    setItems(updatedItems);
  };

  return (
    <div className="container">
      {items.map((item, index) => (
        <div key={index} className="item-container">
          <div>
            <label>Item Name</label>
            <input
              type="text"
              value={item.itemName}
              onChange={(e) => handleInputChange(index, e, 'itemName')}
            />
          </div>
          <div>
            <label>Item Quantity</label>
            <input
              type="text"
              value={item.itemsQuantity}
              onChange={(e) => handleInputChange(index, e, 'itemsQuantity')}
            />
          </div>
          <div>
            <label>Gross Weight</label>
            <input
              type="text"
              value={item.totalWeight}
              onChange={(e) => handleInputChange(index, e, 'totalWeight')}
            />
          </div>
          <div>
            <label>Net Weight</label>
            <input
              type="text"
              value={item.netWeight}
              onChange={(e) => handleInputChange(index, e, 'netWeight')}
            />
          </div>
          <div>
            <label>Pounds</label>
            <input
              type="text"
              value={monetaryValues[index]?.poundAmount || ''}
              readOnly
            />
          </div>
          <div>
            <label>Carat</label>
            <input
              type="text"
              value={monetaryValues[index]?.carat || ''}
              readOnly
            />
          </div>
          <div>
            <label>Max Loan Value</label>
            <input
              type="text"
              value={monetaryValues[index]?.monetaryValue.toLocaleString('en-LK', { style: 'currency', currency: 'LKR' }) || ''}
              readOnly
            />
          </div>
          
          {items.length > 1 && (
            <button className="remove-item-btn" onClick={() => removeItem(index)}>
              <FaTrashAlt />
            </button>
          )}
        </div>
      ))}
      <button className="add-item-btn" onClick={addItem}><FaPlus /> Add Item</button>
      <div>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Gross Weight: {totalGrossWeight}</p>
        <p>Total Net Weight: {totalNetWeight}</p>
        <p>Average Carat: {averageCarat}</p>
        <p>Total Loan Approval Value: {loanApprovalValue.toLocaleString('en-LK', { style: 'currency', currency: 'LKR' })}</p>
      </div>
    </div>
  );
}

export default PawnGeneratePage;
