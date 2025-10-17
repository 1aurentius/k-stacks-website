import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Using global styles from index.css

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const scrollingTextItems = [
    "MARZIPAN",
    "SOFTWARE",
    "SOLUTIONS",
    "AI AUTOMATION",
    "MARZIPAN",
    "SOFTWARE",
    "SOLUTIONS",
    "AI AUTOMATION",
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
                Help intentional founders adopt AI with purpose and build
                products people love.
              </p>
            </div>

            <div className="footer-link-group">
              <p className="footer-link-heading">THE COMPANY</p>K & Stacks Oy is
              my personal consultancy company.
            </div>
          </div>
        </div>

        <div className="footer-contact-info">
          <p className="footer-contact-prompt">
            Interested in working with me?
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
