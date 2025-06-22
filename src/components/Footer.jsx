// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'right',
      padding: '1rem 1rem',
      color: 'black',
      fontSize: '0.875rem',
      width: '100%',
      position: 'fixed',
      bottom: 0
    }}>
      This website serves as my personal playground to practice coding using Vite & React
    </footer>
  );
};

export default Footer;

