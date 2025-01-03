import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import project1 from "./../../assets/bh1.jpg";
import project2 from "./../../assets/bh2.jpg";
import project3 from "./../../assets/bh3.webp";
import project4 from "./../../assets/bh4.jpg";
import project5 from "./../../assets/bh5.jpg";
import project6 from "./../../assets/bh6.jpg";

const ProjectAndContact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease", // Easing option
      once: true, // Whether animation should happen only once
    });
  }, []);

  const projects = [
    { id: 1, img: project1, title: "Web Development", description: "Description of Web Development." },
    { id: 2, img: project2, title: "UI/UX Design", description: "Description of UI/UX Design." },
    { id: 3, img: project3, title: "React JS", description: "Description of React JS." },
    { id: 4, img: project4, title: "Python Programming", description: "Description of Python Programming." },
    { id: 5, img: project5, title: "Figma Development", description: "Description of Figma Development." },
    { id: 6, img: project6, title: "Git and GitHub", description: "Description of Git and GitHub." },
  ];

  return (
    <div className="container" id="project">
      {/* Projects Section */}
      <div className="section-title" data-aos="fade-up">
        <h1>Our Projects</h1>
        <p>Explore our latest projects and achievements.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            data-aos="fade"
            data-aos-delay={project.id * 100} // Delay based on project ID
          >
            <img src={project.img} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="contact-form" id="contact" data-aos="fade-up">
        <h1>Contact Us</h1>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Your Name" className="input-field" />
            <input type="email" placeholder="Your Email" className="input-field" />
            <input type="contact" placeholder="Your Contact" className="input-field" />
          </div>
          <textarea rows="5" placeholder="Your Message" className="input-field"></textarea>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectAndContact;
