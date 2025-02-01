import React from "react";
import "./Contact.css";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="contact-page">
        {/* Get in Touch Section */}
        <section className="get-in-touch">
          <h1>Get in Touch</h1>
          <p>
            Reach out to us for any culinary inquiries or assistance. Our team is
            ready to provide exceptional service and support.
          </p>
        </section>

        {/* Contact Info and Form Section */}
        <section className="map-and-form">
          {/* Contact Info Section */}
          <div className="contact-info-container">
            <h2>Contact Information</h2>
            <p>We're here to assist you with any questions or requests.</p>
            <div className="contact-details">
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <h3>Phone No.</h3>
                <p>9990999811</p>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <h3>Email</h3>
                <p>quikchefs0001@gmail.com</p>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                <h3>Address</h3>
                <p>BH-203 2nd Floor, Puri Business Hub, Sector 81, Faridabad, Haryana 121002</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="form-container">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you!</p>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Type your message"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;