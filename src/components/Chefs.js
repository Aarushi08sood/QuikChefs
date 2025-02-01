import React from "react";
import "./../styles/Chefs.css";

import Benefits from "./Benefits";

const Chefs = () => {
  return (
    <div className="explore-services">
      <div className="heading-and-para">
        <h1>Meet Our Culinary Masters at Quik Chefs</h1>
        <p>
        At Quik Chefs, our team of culinary experts brings a wealth of experience and creativity to every dish. Our chefs are not only skilled in traditional techniques but also innovate with modern culinary trends. Whether crafting a gourmet meal for a luxury event or designing a unique menu for a corporate gathering, our chefs ensure an unforgettable dining experience.

        </p>
      </div>
      <div className="service-sections">
        <Benefits
          image="pic-1.jpg"
          title="Artistry in Every Dish
          "
          description=" Our chefs are renowned for their attention to detail and artistic presentation, transforming each plate into a masterpiece that delights both the eyes and the palate.
          "
        />
        <Benefits
          image="pic-2.jpg"
          title="Teamwork and Expertise"
          description="Collaboration is key in our kitchens. Our chefs work seamlessly together, combining their diverse skills to create exceptional culinary experiences for every occasion.
          "
        />
        <Benefits
          image="pic-3.jpg"
          title="Culinary Education and Training
          "
          description="We believe in continuous learning and development. Our chefs not only cook but also mentor and train the next generation of culinary talent, sharing their knowledge and passion.
          "
        />
      </div>
    </div>
  );
};

export default Chefs;
