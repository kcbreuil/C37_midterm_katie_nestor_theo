import React from 'react';
import footer from '../books.png';

function Footer() {
  return (
    <div className="footer">
      <img src={footer} style={{ width: '100%', height: 70 }} alt="book icon" />
    </div>
  );
}

export default Footer;
