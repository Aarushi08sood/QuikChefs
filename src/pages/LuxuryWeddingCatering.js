import React from "react";
import "./LuxuryWeddingCatering.css";
import Footer from "../components/Footer";

const LuxuryWeddingCatering = () => {
  return (
    <>
      <div className="luxury-wedding-page">
        {/* Full-Width Image Section */}
        <section className="full-width-image">
          <img
            src="https://img.freepik.com/premium-photo/amazing-catering-food-banquet-table-with-different-delicious-foods-luxury-celebration-wedding_1235831-80448.jpg"
            alt="Luxury Wedding Catering"
          />
        </section>

        {/* Main Section (Hero + Client Details) */}
        <div className="main-section">
          {/* Hero Section */}
          <section className="hero-section">
            <h1>Luxury Wedding Catering</h1>
            <p>
              Experience the finest in culinary artistry with our full-service catering for luxury weddings, tailored to create unforgettable moments.
            </p>
            <div className="highlights">
              <ul>
                <li># Exquisite Menus</li>
                <li># Professional Staff</li>
                <li># Elegant Presentation</li>
              </ul>
            </div>
          </section>

          {/* Client Details Section */}
          <section className="client-details">
            <div className="detail-row">
              <div className="detail">
                <strong>Client</strong>
                <p>Private Client</p>
              </div>
              <div className="detail">
                <strong>Location</strong>
                <p>India</p>
              </div>
            </div>
            <div className="detail-row">
              <div className="detail">
                <strong>Date</strong>
                <p>May 2023</p>
              </div>
              <div className="detail">
                <strong>Services</strong>
                <p>Catering & Event Management</p>
              </div>
            </div>
          </section>
        </div>

        {/* Project Description Section */}
        <section className="project-description">
          <h2>About the Event</h2>
          <p>
            Luxury Wedding Catering was a prestigious event where we showcased our culinary excellence. Our team crafted a bespoke multi-course menu that delighted the guests, featuring seasonal ingredients and exquisite presentation. The event was a true reflection of our commitment to quality and creativity in catering.
          </p>
        </section>

       
        
      </div>
      <Footer />
    </>
  );
};

export default LuxuryWeddingCatering;