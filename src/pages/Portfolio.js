import React from "react";
import "./Portfolio.css";
import Footer from "../components/Footer";
import FAQChatbot from "../components/FAQChatbot";

const Portfolio = () => {
  return (
    <>
    <div className="portfolio-page">
        <section className="culinary-expertise">
        <h2>Our Culinary Expertise</h2>
        <p>
          Explore our diverse portfolio showcasing exceptional culinary projects that highlight our commitment to quality and creativity in every dish.
        </p>
      </section>
      {/* Showcasing Culinary Excellence Section */}
      <section className="showcase-section">
        <h1>Showcasing Culinary Excellence</h1>
        <p>
          Explore our past projects that reflect our commitment to quality and creativity in culinary services.
        </p>

        {/* Project Cards */}
        <div className="project-cards">
          {/* Luxury Wedding Catering */}
          <div className="project-card">
            <div className="card-content">
              <img
                src="https://img.freepik.com/premium-photo/amazing-catering-food-banquet-table-with-different-delicious-foods-luxury-celebration-wedding_1235831-80448.jpg" // Replace with your image path
                alt="Luxury Wedding Catering"
                className="card-image"
              />
              <div className="card-text">
                <h2>Luxury Wedding Catering</h2>
                <p>
                  We provided full-service catering for a luxury wedding, featuring a multi-course menu crafted by our top chefs.
                </p>
                <div className="project-details">
                  <p><strong>#</strong>  Client: Private Client</p>
                  <p><strong>#</strong>  Date: May 2023</p>
                  <p><strong>#</strong>  Service: Full-service catering</p>
                </div>
                <a
                  href="/luxury-wedding-catering"
                  
                  rel="noopener noreferrer"
                  className="view-details-btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <br/>

          {/* Corporate Gala Dinner */}
          <div className="project-card">
            <div className="card-content">
              <img
                src="https://foto.piletid.eu/konverents/varia/conference-expert-gala-dinner-table-white-tablecloth-r2.jpg" // Replace with your image path
                alt="Corporate Gala Dinner"
                className="card-image"
              />
              <div className="card-text">
                <h2>Corporate Gala Dinner</h2>
                <p>
                  Managed a corporate gala dinner for a leading tech company, showcasing our culinary expertise and event management skills.
                </p>
                <div className="project-details">
                  <p><strong>#</strong>  Client: Tech Innovations Ltd.</p>
                  <p><strong>#</strong>  Date: March 2023</p>
                  <p><strong>#</strong>  Service: Event management</p>
                </div>
                <a
                  href="/corporate-gala-dinner"
                  
                  rel="noopener noreferrer"
                  className="view-details-btn"
                >
                  View Details 
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
    <FAQChatbot/>
    <Footer/>
    </>
  );
};

export default Portfolio;