import React from "react";
import { FaInstagram, FaWhatsapp, FaTwitter,FaPhone } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footerhome">
      <div className="footer-content">
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <div className="footer-icons">
          <a href="tel:+1234567890" rel="noopener noreferrer">
          <FaPhone /></a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
         
          <p>Email: info@beachresort.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Beachfront Ave, Beach City</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="footer-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
          <div className="social-links">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Beach Resort. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
