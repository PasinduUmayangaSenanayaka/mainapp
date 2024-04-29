import React from 'react';

const NavigationBar = () => {
  const navStyle = {
    backgroundColor: '#333',
    padding: '10px 20px',
  };

  const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  };

  const liStyle = {
    marginRight: '20px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><a href="#" style={linkStyle}>Home</a></li>
        <li style={liStyle}><a href="#" style={linkStyle}>Contact Us</a></li>
        <li style={liStyle}><a href="#" style={linkStyle}>About Us</a></li>
        <li style={liStyle}><a href="#" style={linkStyle}>Customer Login</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
