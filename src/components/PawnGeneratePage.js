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
  }, [items, calculateMonetaryValues]); // Include calculateMonetaryValues in the dependency array

  const calculateMonetaryValues = () => {
    let totalQuantityValue = 0;
    let totalGrossWeightValue = 0;
    let totalNetWeightValue = 0;
    let totalMonetaryValue = 0;

    const calculatedValues = items.map(item => {
      const totalWeightNum = parseFloat(item.totalWeight);
      const netWeightNum = parseFloat(item.netWeight);

      if (totalWeightNum && netWeightNum) {
        // Your calculation logic here
      }
      return { monetaryValue: 0, poundAmount: 0, carat: '' };
    });

    // Set state values
    setMonetaryValues(calculatedValues);
    setTotalQuantity(totalQuantityValue);
    setTotalGrossWeight(totalGrossWeightValue);
    setTotalNetWeight(totalNetWeightValue);
    setAverageCarat(totalNetWeightValue / totalGrossWeightValue);
    setLoanApprovalValue(totalMonetaryValue);
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
    <div className="container" style={{ backgroundColor: '#959191' }}>
      {items.map((item, index) => (
        <div key={index} className="item-container">
          {/* Input fields and labels */}
          {items.length > 1 && (
            <button className="remove-item-btn" onClick={() => removeItem(index)}>
              <FaTrashAlt />
            </button>
          )}
        </div>
      ))}
      <button className="add-item-btn" onClick={addItem}><FaPlus /> Add Item</button>
      <div>
        {/* Total quantity, weight, and loan approval value */}
      </div>
    </div>
  );
}

export default PawnGeneratePage;
