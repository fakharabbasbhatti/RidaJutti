import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import homepic from './../../assets/rid.png';
import aboutpic from './../../assets/rid.png';

// Combined Home and About Component
const HomeAndAbout = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      easing: "ease", // Easing option
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      {/* Home Section */}
      <div className="hero-container" style={{ overflow: "hidden" }}>
        {/* Left Side */}
        <div className="hero-content" data-aos="fade-right">
          <h1 className="hero-heading">FRONTEND DEVELOPER</h1>
          <p className="hero-description">
            It's Rida Jutti specializes in creating user-friendly interfaces for websites and applications using HTML, CSS, JavaScript, and frameworks like React. They ensure seamless design, responsiveness, and interactive user experiences.
          </p>
          <button className="hero-button" data-aos="zoom-in">Contact Me</button>
        </div>

        {/* Right Side */}
        <div className="hero-image" data-aos="fade-left" style={{ overflow: "hidden" }}>
          <img
            src={homepic}
            alt="Hero"
            className="image"
            style={{ transformOrigin: "center", transition: "transform 0.3s ease-in-out" }}
          />
        </div>
      </div>

      {/* About Section */}
      <div className="about-container" id="about" style={{ overflow: "hidden" }}>
        {/* Centered Heading */}
        <h1 className="about-heading" data-aos="fade-up">Get to Know Me</h1>

        {/* Content Section */}
        <div className="about-content">
          {/* Left Side: Picture */}
          <div className="about-image" data-aos="zoom-in" style={{ overflow: "hidden" }}>
            <img
              src={aboutpic}
              alt="My Picture"
              className="image"
              style={{ transformOrigin: "center", transition: "transform 0.3s ease-in-out" }}
            />
          </div>

          {/* Right Side: Description */}
          <div className="about-description" data-aos="fade-up">
            <p>
              I am a passionate Frontend Developer skilled in HTML, CSS, JavaScript, and React. I create responsive, user-friendly websites that provide great experiences. Let’s build something amazing together!
            </p>

            {/* Button */}
            <button className="about-button" data-aos="zoom-in">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAndAbout;
