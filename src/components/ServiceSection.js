import React from 'react';
import "./../styles/ServiceSection.css";



const ServiceSection = ({ image, title, description }) => {
  return (
    <div className="service-section">
      <img src={require(`./../assets/${image}`)} alt={title} className="service-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      {/* <button className="learn-more-btn">Learn More</button> */}
    </div>
  );
};

export default ServiceSection;
