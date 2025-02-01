import React from 'react';
import './../styles/Footer.css'; // Assuming you will create a corresponding CSS file
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Explore</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Connect</h3>
                    <ul>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Stay Updated</h2>
                    <p>Subscribe to our newsletter for the latest updates and exclusive offers from Quik Chefs.</p>
                    <form>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Quik Chefs by Rising CMC Pvt. Ltd. All rights reserved.</p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/company/quik-chefs-by-rising-cmg-pvt-ltd/" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" alt="LinkedIn" />
                    </a>
                    <a href="https://www.facebook.com/people/Quik-chefs/61556554011930/" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/640px-Facebook_logo_%28square%29.png" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/_quikchefs/" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png" alt="Instagram" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;