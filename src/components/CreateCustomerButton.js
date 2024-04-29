import React from 'react';
import { useHistory } from 'react-router-dom';

const CreateCustomerButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/customer-register');
  };

  return (
    <button onClick={handleClick}>Create New Customer</button>
  );
}

export default CreateCustomerButton;
