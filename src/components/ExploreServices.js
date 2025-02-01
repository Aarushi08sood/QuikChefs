import React from "react";
import "./../styles/ExploreServices.css";

import ServiceSection from "./ServiceSection";

const ExploreServices = () => {
  return (
    <div className="explore-services">
      <div className="heading-and-para">
        <h1>Explore Our Culinary and Hospitality Services</h1>
        <p>
          At Quik Chefs, we offer a wide range of culinary and hospitality
          services designed to meet the diverse needs of our clients. From
          providing skilled chefs for private events to designing exquisite
          restaurant interiors, our services are tailored to ensure exceptional
          experiences. Discover how we can elevate your culinary ventures with
          our expertise and creativity.
        </p>
      </div>
      <div className="service-sections">
        <ServiceSection
          image="chef-staff.jpg"
          title="Chef Staff Provider & 360 Services"
          description="Our Chef Staff Provider & 360 Services offers a variety of services that help us build on the existing needs. We provide highly skilled chefs for employees, including international dining experience."
        />
        <ServiceSection
          image="restaurant-design.jpg"
          title="Restaurant Design Excellence"
          description="Transform your dining space with our expert design recommendations. We encourage you to explore new amenities such as shopping and kitchen/room for your guests."
        />
        <ServiceSection
          image="event-catering.jpg"
          title="Event Catering Mastery"
          description="From intimate gatherings to grand celebrations, our event catering services deliver excellent cuisine and administration, making every occasion unforgettable."
        />
      </div>
    </div>
  );
};

export default ExploreServices;
