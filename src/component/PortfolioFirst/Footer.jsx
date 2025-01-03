import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Navigation Links */}
      <nav className="footer-nav">
        <a href="#about">About</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      
      </nav>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      {/* Footer Credits */}
      <div className="footer-credits">
        © {new Date().getFullYear()} Made with ❤️ by <a href="#about">Fakhar Bhatti</a>
      </div>
    </footer>
  );
};

export default Footer;
