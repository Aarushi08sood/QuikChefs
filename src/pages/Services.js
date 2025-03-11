import React from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom"; 
import Footer from "../components/Footer";
import FAQChatbot from "../components/FAQChatbot";

const Services = () => {

  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click
  const handleLearnMore1Click = () => {
    navigate("/experience"); // Navigate to the Portfolio page
  };
  const handleLearnMore2Click = () => {
    navigate("/portfolio"); // Navigate to the Portfolio page
  };
  const handleLearnMore3Click = () => {
    navigate("/luxury-wedding-catering"); // Navigate to the Portfolio page
  };
  return (
    <>
      <div className="main-container">
        {/* Explore Our Culinary and Hospitality Services Section */}
        <section className="intro-section">
          <h1>Explore Our Culinary and Hospitality Services</h1>
          <p>
            At Quik Chefs, we offer a wide range of culinary and hospitality
            services tailored to meet the unique needs of our clients. From
            providing skilled chefs for private events to designing
            state-of-the-art kitchens, our team is dedicated to delivering
            exceptional quality and creativity. Discover how we can enhance your
            dining experience with our comprehensive solutions.
          </p>
        </section>

        {/* Service Cards Container */}
        <div className="cards-container">
          {/* Professional Chef Staffing Solutions Section */}
          <div className="card-item">
            <img
              src="https://10web-site.ai/219/wp-content/uploads/sites/231/2025/01/tenweb_media_6acj1X4X.webp"
              alt="Chef Staffing"
            />
            <h2>Professional Chef Staffing Solutions</h2>
            <p>
              Our chef staffing solutions provide highly skilled culinary
              professionals for any occasion, ensuring a memorable dining
              experience. Whether for a private event or a luxury restaurant,
              our chefs bring creativity and expertise.
            </p>
            <button className="action-button" onClick={handleLearnMore1Click}>
              Learn More
            </button>
          </div>

          {/* Innovative Kitchen Design Services Section */}
          <div className="card-item">
            <img
              src="https://10web-site.ai/219/wp-content/uploads/sites/231/2025/01/tenweb_media_NUnRpD99.webp"
              alt="Kitchen Design"
            />
            <h2>Innovative Kitchen Design Services</h2>
            <p>
              Transform your culinary space with our innovative kitchen design
              services. We create functional and aesthetically pleasing
              environments that enhance efficiency and elevate the dining
              experience.
            </p>
            <button className="action-button" onClick={handleLearnMore2Click}>
              Learn More
            </button>
          </div>

          {/* Exquisite Event Catering Section */}
          <div className="card-item">
            <img
              src="https://10web-site.ai/219/wp-content/uploads/sites/231/2025/01/tenweb_media_l8JVol07.webp"
              alt="Event Catering"
            />
            <h2>Exquisite Event Catering</h2>
            <p>
              Our event catering services offer a seamless blend of taste and
              presentation. From weddings to corporate galas, we create menus
              that delight and impress, ensuring your event is unforgettable.
            </p>
            <button className="action-button" onClick={handleLearnMore3Click}>
              Learn More
            </button>
          </div>
        </div>
        {/* Explore Our Culinary Expertise Section */}
        <section className="culinary-expertise">
          <h2>Explore Our Culinary Expertise</h2>
          <p>
            At Quik Chefs, we offer a range of services designed to enhance your
            culinary experience. From providing skilled chefs for private events
            to designing state-of-the-art kitchens, our team is dedicated to
            delivering excellence and creativity in every project.
          </p>

          <div className="expertise-subsection">
            <h3>Chef Staffing</h3>
            <p>
              Hire top-tier chefs for events, restaurants, or corporate
              settings, ensuring a memorable dining experience.
            </p>
          </div>

          <div className="expertise-subsection">
            <h3>Kitchen Design</h3>
            <p>
              Transform your space with our innovative kitchen design solutions,
              tailored to your specific needs.
            </p>
          </div>
        </section>
      </div>
      <FAQChatbot/>
      <Footer />
    </>
  );
};

export default Services;
