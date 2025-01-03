import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left Side: Logo */}
      <div className="navbar-logo">JUTTI</div>

      {/* Right Side: Links */}
      <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <a href="#about" className="navbar-link">
        About
        </a>
        <a href="#project" className="navbar-link">
          Project
        </a>
        <a href="#contact" className="navbar-link">
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="navbar-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
