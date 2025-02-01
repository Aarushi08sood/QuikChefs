import React from 'react';
import "./../styles/ChefStaffing.css";
import chefImage from './../assets/chef-image.jpg';




const ChefStaffing = () => {
  return (
    <div className="chef-staffing">
      <div className="content">
        <div className="text-content">
          <h1>Discover Our Expert Chef Staffing Solutions</h1>
          <p>
            At Quik Chefs, we provide exceptional culinary talent to elevate your dining experience. Our chefs are skilled in various cuisines and are ready to meet your specific needs, whether for a private event or a luxury restaurant.
          </p>
          <ul>
            <li> 1. Access to a diverse range of talented culinary professionals.</li>
            <li>2. Customized staffing solutions tailored to your specific needs.</li>
            <li>3. Expertise in various cuisines and culinary styles.</li>
          </ul>
        </div>
        <div className="image-content">
          <img src={chefImage} alt="Expert Chef" />
        </div>
      </div>
    </div>
  );
};

export default ChefStaffing;