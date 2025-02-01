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
            src="https://foto.piletid.eu/konverents/varia/conference-expert-gala-dinner-table-white-tablecloth-r2.jpg"
            alt="Luxury Wedding Catering"
          />
        </section>

        {/* Main Section (Hero + Client Details) */}
        <div className="main-section">
          {/* Hero Section */}
          <section className="hero-section">
            <h1>Corporate Gala Dinner
</h1>
            <p>
            Experience an unforgettable evening with our expertly crafted menus and impeccable service, tailored for your corporate events and celebrations.
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
                <p>Tech Innovations Ltd.</p>
              </div>
              <div className="detail">
                <strong>Location</strong>
                <p>Corporate Venue</p>
              </div>
            </div>
            <div className="detail-row">
              <div className="detail">
                <strong>Date</strong>
                <p>May 2023</p>
              </div>
              <div className="detail">
                <strong>Highlights</strong>
                <p>Gourmet Menus, Event Management
</p>
              </div>
            </div>
          </section>
        </div>

        {/* Project Description Section */}
        <section className="project-description">
          <h2>About the Event</h2>
          <p>
          Corporate Gala Dinner was a prestigious event managed for Tech Innovations Ltd., where we showcased our culinary excellence and meticulous event management skills. Our team curated a gourmet menu that delighted the guests, ensuring a memorable experience. The event featured elegant table settings and a seamless flow of service, reflecting our commitment to quality and creativity in every aspect of hospitality.

          </p>
        </section>

       
        
      </div>
      <Footer />
    </>
  );
};

export default LuxuryWeddingCatering;