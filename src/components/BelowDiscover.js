import React from 'react';
import "./../styles/BelowDiscover.css";
import image from './../assets/discover.jpg'; // Adjust the path as necessary

const BelowDiscover = () => {
  return (
    <div className="full-width-image">
      <img src={image} alt="Full Width" />
    </div>
  );
};

export default BelowDiscover;