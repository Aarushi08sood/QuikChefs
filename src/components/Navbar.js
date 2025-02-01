import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import Button from "./Button";
import "./../styles/Navbar.css";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get the current route location

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Only add scroll event listener if not on the About page
    if (location.pathname !== "/about" && location.pathname !== "/contact" &&location.pathname!=="/services" &&location.pathname!=="/portfolio" && location.pathname!=="/luxury-wedding-catering" && location.pathname!=="/corporate-gala-dinner" && location.pathname!=="/experience" && location.pathname!=="/terms-and-conditions" && location.pathname!=="/privacy-policy") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]); // Re-run effect when the route changes

  // Define the logo URLs
  const defaultLogo =
    "https://quikchefs.com/wp-content/uploads/2024/10/WhatsApp_Image_2024-08-21_at_3.24.10_PM-removebg-preview-1-300x172.png";
  const aboutLogo = "https://quikchefs.com/wp-content/uploads/2024/10/WhatsApp_Image_2024-08-21_at_3.24.10_PM-removebg-preview-1-300x172.png";
  const contactLogo = "https://quikchefs.com/wp-content/uploads/2024/10/WhatsApp_Image_2024-08-21_at_3.24.10_PM-removebg-preview-1-300x172.png"; // Replace with the actual URL of the About page logo
const servicesLogo="https://quikchefs.com/wp-content/uploads/2024/10/WhatsApp_Image_2024-08-21_at_3.24.10_PM-removebg-preview-1-300x172.png";
const portfolioLogo="https://quikchefs.com/wp-content/uploads/2024/10/WhatsApp_Image_2024-08-21_at_3.24.10_PM-removebg-preview-1-300x172.png"

  return (
    <nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""} ${
        location.pathname === "/about" || location.pathname === "/contact" || location.pathname==="/services" || location.pathname==="/portfolio"  || location.pathname==="/luxury-wedding-catering" || location.pathname==="/corporate-gala-dinner" || location.pathname==="/experience" || location.pathname==="/terms-and-conditions" || location.pathname==="/privacy-policy"? "navbar-about" : ""
        
      }`}
    >
      <Link to="/">
        <img
          width="130"
          height="60"
          src={
            location.pathname === "/about"
              ? aboutLogo
              : location.pathname === "/contact"
              ? contactLogo
              :location.pathname==="/services"
              ?servicesLogo
              :location.pathname==="/portfolio"
              ?portfolioLogo
              :location.pathname==="/luxury-wedding-catering"
              ?portfolioLogo
              :location.pathname==="/corporate-gala-dinner"
              ?portfolioLogo
              :location.pathname==="/experience"
              ?portfolioLogo
              :location.pathname==="/terms-and-conditions"
              ?portfolioLogo
              :location.pathname==="/privacy-policy"
              ?portfolioLogo
              : defaultLogo
          } 
          className="attachment-fullage-10290"
          alt="QuikChefs"
        />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <Link to="/contact">Contact </Link>
        </li>
      </ul>
      {/* <div className="buttons">
        <Button text="Our Services" type="btn-outline" />
        <Button text="Contact Us" type="btn-primary" />
      </div> */}
    </nav>
  );
};

export default Navbar;