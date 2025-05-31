import React from 'react';
import './Footer.css';
import logo from '../../anka.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo} alt="Ankaboot Games Logo" className="footer-logo" />
        </div>
        <div className="footer-links">
          <div className="links-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/games">Our Games</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="links-column">
            <h3>Support</h3>
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/support">Customer Support</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://twitter.com/ankabootgames" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com/ankabootgames" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com/ankabootgames" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ankaboot Games. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;