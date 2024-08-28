import React from 'react';
import { Link } from 'react-router-dom';

const Nabber = () => {
  const nabberStyle = {
    backgroundColor: 'gray', 
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    color: 'white',
  };

  return (
    <nav style={nabberStyle}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/About" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
      <Link to="/FAQ" style={{ color: 'white', textDecoration: 'none' }}>FAQ</Link>
      <Link to="/Data" style={{ color: 'white', textDecoration: 'none' }}>Data</Link>
      <Link to="/Login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
    </nav>
  );
};

export default Nabber;
