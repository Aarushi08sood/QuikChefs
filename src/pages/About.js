import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";
import chefAnjali from "./../assets/chef_anjali.jpg"; // Import team member images
import rajivMehta from "./../assets/rajiv_mehta.jpg";
import Footer from "../components/Footer";

const About = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click
  const handleLearnMoreClick = () => {
    navigate("/services"); // Navigate to the Services page
  };
  return (
    <>
    <div className="about-page">
      {/* Our Culinary Mission Section */}
      <section className="culinary-mission">
        <h1>Our Culinary Mission</h1>
        <p>
        Quik Chefs by Rising CMG Pvt. Ltd. specializes in comprehensive culinary and hospitality services. From skilled chefs and kitchen teams to restaurant and café design, we bring expertise to every corner of the hospitality industry. Serving clients across India, we’re dedicated to quality, creativity, and seamless experiences for businesses and their guests.
        </p>
      </section>

      {/* Meet Our Team Section */}
      <section className="meet-our-team">
        <h2>Meet Our Team</h2>
        <p>Discover the talented chefs and staff dedicated to your culinary experience.</p>

        <div className="team-members">
          {/* Chef Anjali Sharma */}
          <div className="team-member">
            <img src={chefAnjali} alt="Chef Anjali Sharma" />
            <h3>Chef Anjali Sharma</h3>
            <p className="role">Head Chef</p>
            <p>
              With over 15 years of experience in the culinary field, Chef Anjali
              specializes in Indian and Italian cuisine, bringing creativity and
              passion to every dish.
            </p>
          </div>

          {/* Rajiv Mehta */}
          <div className="team-member">
            <img src={rajivMehta} alt="Rajiv Mehta" />
            <h3>Rajiv Mehta</h3>
            <p className="role">Operations Manager</p>
            <p>
              Rajiv oversees the operational aspects of Quik Chefs, ensuring that
              every event runs smoothly and meets our high standards.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-us">
        <h2>Join Us</h2>
        <p>Connect with our team to elevate your dining experience.</p>
        <button className="join-button" onClick={handleLearnMoreClick}>
            Learn More
          </button>
      </section>
    </div>

    <Footer/>
    </>
  );
};

export default About;