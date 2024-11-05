import React from 'react';
import './Footer.css'; // Import your custom CSS file
import logo from '../../Assets/gallery/IISD.png'
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Logo and Social Media */}
          <div className="col-md-3 mb-3">
            <img src={logo} alt="Logo" className="footer-logo" />
            <div className="social-icons">
              <a href="#" className='footer-icons'><i className="fab fa-facebook"></i></a>
              <a href="#" className='footer-icons'><i className="fab fa-twitter"></i></a>
              <a href="#" className='footer-icons'><i className="fab fa-linkedin"></i></a>
              <a href="#" className='footer-icons'><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          
          {/* About Us Section */}
          <div className="col-md-3">
            <h4>ABOUT US</h4>
            <ul className="footer-links">
              <li><a href="#"><i class="bi bi-arrow-right-short"></i> Message From Management</a></li>
              <li><a href="#"><i class="bi bi-arrow-right-short"></i> Organization Profile</a></li>
              <li><a href="#"><i class="bi bi-arrow-right-short"></i> Mission and Vision</a></li>
              <li><a href="#"><i class="bi bi-arrow-right-short"></i> Our Associates</a></li>
            </ul>
          </div>

          {/* Skill Training Programs */}
          <div className="col-md-4">
            <h4>SKILL TRAINING PROGRAMS</h4>
            <ul className="footer-links">
              <li><a href="#"><i class="bi bi-arrow-right-short"></i> Computer Science and IT</a></li>
              <li><a href="#"><i class="bi bi-arrow-right-short"></i> Teacher Training</a></li>
              <li><a href="#"><i class="bi bi-arrow-right-short"></i> Hospital and Health Management</a></li>
              <li><a href="#"><i class="bi bi-arrow-right-short"></i> Beauty, Wellness and Cosmetics</a></li>
              <li><a href="#"><i class="bi bi-arrow-right-short"></i> Arts and Paintings</a></li>
              <li><a href="#"><i class="bi bi-arrow-right-short"></i> Tailoring</a></li>
              <li><a href="#"><i class="bi bi-arrow-right-short"></i> Business Management</a></li>
              <li><a href="#"><i class="bi bi-arrow-right-short"></i> Safety Management</a></li>
              <li><a href="#"><i class="bi bi-arrow-right-short"></i> Industrial Trade Skills</a></li>
              <li><a href="#"><i class="bi bi-arrow-right-short"></i> Technical Trade Skills</a></li>
              <li><a href="#"><i class="bi bi-arrow-right-short"></i> Hotel, Hospitality, Tour and Travels</a></li>
              <li><a href="#"><i class="bi bi-arrow-right-short"></i> Designing</a></li>
            </ul>
          </div>

          {/* Franchisee */}
          <div className="col-md-2">
            <h4>FRANCHISEE</h4>
            <ul className="footer-links">
              <li><a href="#"><i class="bi bi-arrow-right-short"></i> Apply for New Center</a></li>
              <li><a href="#"><i class="bi bi-arrow-right-short"></i> Approval Process</a></li>
              <li><a href="#"><i class="bi bi-arrow-right-short"></i> Center Renewal</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
