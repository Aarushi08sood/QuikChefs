import React from "react";
import "./Experience.css";
import Footer from "../components/Footer";
import culinaryImage from "./../assets/hero-image.jpg";

const Experience = () => {
  return (
    <>
      <div className="experience-page">
        {/* Hero Section */}
        <section className="main-hero-section"> {/* Updated class name */}
          <h1>Elevate Your Culinary Experience</h1>
          <p>
            Discover the art of fine dining with Quik Chefs. Our Chef Staff Provider & 360 Services offer a diverse range of talented culinary professionals, ensuring a seamless and memorable dining experience for any occasion.
          </p>
          <div className="hero-buttons">
            <button className="learn-more">Learn More</button>
            <button className="contact-us">Contact Us</button>
          </div>
          <img src={culinaryImage} alt="Culinary Experience" className="hero-image" />
        </section>

        {/* Culinary Services Section */}
        <section className="culinary-services">
          <h2>Explore Our Culinary Expertise</h2>
          <p>
            Discover how our Chef Staff Provider service can transform your events with top-notch culinary talent and personalized solutions.
          </p>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="feature">
            <h3>Diverse Talent Pool</h3>
            <p>
              Gain access to a wide array of skilled chefs, each bringing unique culinary styles and expertise to elevate your dining experience. <a href="#learn-more">Learn more</a> about our chefs.
            </p>
          </div>
          <div className="feature">
            <h3>Customized Solutions</h3>
            <p>
              We tailor our staffing solutions to meet your specific needs, ensuring that every event is perfectly catered to your requirements. <a href="#contact">Contact us</a> for a consultation.
            </p>
          </div>
          <div className="feature">
            <h3>Culinary Expertise</h3>
            <p>
              Our chefs are well-versed in various cuisines, providing exceptional service whether for a private gathering or a large corporate event. Experience the difference with Quik Chefs.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Experience;