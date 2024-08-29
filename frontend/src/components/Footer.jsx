import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'gray', 
    padding: '10px',
    textAlign: 'center',
    color: 'white',
    position: 'fixed',
    width: '100%',
    bottom: '0',
  };

  return (
    <footer style={footerStyle}>
      Thanks for choosing Maxx Energy
    </footer>
  );
};

export default Footer;
