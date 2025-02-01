import React from "react";
import Button from "./Button";
import "./../styles/Hero.css";
import heroImage from "./../assets/hero-image.jpg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }} // ✅ Background image applied
    >
      {/* Overlay for better text contrast */}
      <div className="hero-overlay"></div> 

      {/* Hero Content */}
      <div className="hero-content">
        <h1>
          Elevate Your <br />
          <span className="underline">Culinary Experience</span>
        </h1>
        <p>
          Discover the art of fine dining with <strong>Quik Chefs.</strong> Our expert chefs and 
          innovative culinary solutions transform every meal into a memorable experience. 
          From private events to luxury restaurants, we bring creativity and quality to your table.
        </p>
        
        {/* Buttons */}
        {/* <div className="hero-buttons">
          <Button text="Explore Services" type="btn-primary" />
          <Button text="Meet Our Chefs" type="btn-outline" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
