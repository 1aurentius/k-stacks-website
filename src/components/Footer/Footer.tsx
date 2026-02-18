import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Using global styles from index.css

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const scrollingTextItems = [
    "K & STACKS",
    "AI TRANSFORMATION",
    "PRODUCT DEVELOPMENT",
    "AI CONSULTING",
    "K & STACKS",
    "AI TRANSFORMATION",
    "PRODUCT DEVELOPMENT",
    "AI CONSULTING",
  ];

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer-marzipan" id="contact">
      <div className="footer-content-container">
        <div className="footer-main-content">
          <div className="footer-links-column">
            <div className="footer-link-group">
              <p className="footer-link-heading">MY MISSION</p>
              <p className="footer-mission-text">
                Help companies build the AI infrastructure to go from pilots to
                production — with context engineering at the core.
              </p>
            </div>

            <div className="footer-link-group">
              <p className="footer-link-heading">THE COMPANY</p>K & Stacks Oy —
              AI transformation, product development, and consulting. Helsinki,
              Finland.
            </div>
          </div>
        </div>

        <div className="footer-contact-info">
          <p className="footer-contact-prompt">
            Ready to talk about AI transformation?
          </p>
          <a href="https://calendar.app.google/VSL5R4En4SjyGSfR7" className="">
            <button type="button" className="nav-button-contact">
              Book a discovery call
            </button>
          </a>
        </div>
        <p className="footer-copyright">
          &copy; {currentYear} K & Stacks Oy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
