import React, { useState } from 'react';
import { FaTrashAlt, FaPlus } from 'react-icons/fa'; // Import the trash and plus icons

const PawnGeneratePage = () => {
  const [items, setItems] = useState([{ itemName: '', itemsQuantity: '', totalWeight: '', netWeight: '' }]);
  const [monetaryValues, setMonetaryValues] = useState([]);
  const [loanApprovalValue, setLoanApprovalValue] = useState('');
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalGrossWeight, setTotalGrossWeight] = useState(0);
  const [totalNetWeight, setTotalNetWeight] = useState(0);
  const [averageCarat, setAverageCarat] = useState(0);

  const calculateMonetaryValues = () => {
    let totalQuantityValue = 0;
    let totalGrossWeightValue = 0;
    let totalNetWeightValue = 0;
    let totalMonetaryValue = 0;

    const calculatedValues = items.map(item => {
      const totalWeightNum = parseFloat(item.totalWeight);
      const netWeightNum = parseFloat(item.netWeight);

      if (totalWeightNum && netWeightNum) {
        const goldPresentation = (netWeightNum / totalWeightNum) * 100;
        let carat = '';
        if (goldPresentation >= 100) {
          carat = '22 carats';
        } else if (goldPresentation >= 95.45) {
          carat = '21 carats';
        } else if (goldPresentation >= 90.91) {
          carat = '20 carats';
        } else if (goldPresentation >= 86.36) {
          carat = '19 carats';
        } else if (goldPresentation >= 81.82) {
          carat = '18 carats';
        } else if (goldPresentation >= 77.27) {
          carat = '17 carats';
        } else if (goldPresentation >= 72.73) {
          carat = '16 carats';
        } else if (goldPresentation >= 68.18) {
          carat = '15 carats';
        } else if (goldPresentation >= 63.64) {
          carat = '14 carats';
        } else if (goldPresentation >= 59.09) {
          carat = '13 carats';
        } else if (goldPresentation >= 54.55) {
          carat = '12 carats';
        }

        const poundAmount = netWeightNum / 8;
        let monetaryValue = 0;
        if (carat === '22 carats') {
          monetaryValue = poundAmount * 160000;
        } else if (carat === '21 carats') {
          monetaryValue = poundAmount * 152727.27;
        } else if (carat === '20 carats') {
          monetaryValue = poundAmount * 145454.55;
        } else if (carat === '19 carats') {
          monetaryValue = poundAmount * 138181.82;
        } else if (carat === '18 carats') {
          monetaryValue = poundAmount * 130909.09;
        } else if (carat === '17 carats') {
          monetaryValue = poundAmount * 123636.36;
        } else if (carat === '16 carats') {
          monetaryValue = poundAmount * 116363.64;
        } else if (carat === '15 carats') {
          monetaryValue = poundAmount * 109090.91;
        } else if (carat === '14 carats') {
          monetaryValue = poundAmount * 101818.18;
        } else if (carat === '13 carats') {
          monetaryValue = poundAmount * 94545.45;
        } else if (carat === '12 carats') {
          monetaryValue = poundAmount * 87272.73;
        }

        totalQuantityValue += parseInt(item.itemsQuantity);
        totalGrossWeightValue += totalWeightNum;
        totalNetWeightValue += netWeightNum;
        totalMonetaryValue += monetaryValue;

        return { monetaryValue, poundAmount, carat };
      }
      return { monetaryValue: 0, poundAmount: 0, carat: '' };
    });

    setMonetaryValues(calculatedValues);
    setTotalQuantity(totalQuantityValue);
    setTotalGrossWeight(totalGrossWeightValue);
    setTotalNetWeight(totalNetWeightValue);
    setAverageCarat(totalNetWeightValue / totalGrossWeightValue);
    setLoanApprovalValue(totalMonetaryValue);
  };

  // useEffect(() => {
  //   calculateMonetaryValues();
  // }, [items]);

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
