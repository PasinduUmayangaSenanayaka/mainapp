import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="heading">Welcome to Loan App</h1>
      <Link to="/customer-registration" className="link">
        <button className="button">Create New Customer</button>
      </Link>
      <Link to="/project-manager" className="link">
        <button className="button">Project Manager Login</button>
      </Link>
    </div>
  );
}

export default HomePage;
