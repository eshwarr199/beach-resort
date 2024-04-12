import React from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Help = () => {
  return (
    <div className="help-container">
      <div className="top-content">
        <h2>Need Help?</h2>
        <p>If you encounter any issues or have questions during your stay at Beach Resort, don't hesitate to contact us. Our team is dedicated to providing exceptional service and assistance to ensure your experience is nothing short of perfect.</p>
        <h3>Contact Information:</h3>
        <ul>
          <li>Phone: 1-800-BEACH-RESORT</li>
          <li>Email: info@beachresort.com</li>
          <li>Address: 123 Ocean View Drive, Beach City, Paradise</li>
        </ul>
        <p>Our friendly staff is available 24/7 to address any concerns and make your stay as comfortable and enjoyable as possible. Your satisfaction is our top priority!</p>
      </div>

      <footer className="footer">
        <div className="footer-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
        <div className="mobile-enquiry">
          <p>For mobile enquiries:</p>
          <p>Call: 1-800-BEACH-RESORT</p>
          <p>Email: mobile@beachresort.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Help;
