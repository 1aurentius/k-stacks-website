import { useEffect, useState } from "react";
import React from "react";
// Using global styles from index.css

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section-marzipan" aria-labelledby="main-heading">
      <div className="hero-content-container" role="region">
        <h1 id="main-heading" className="hero-main-heading">
          <span className="hero-heading-line">
            {" "}
            I build AI infrastructure for companies.{" "}
          </span>
        </h1>
        <p className="hero-description">
          From data foundations to deployed agents — I help companies set up the
          AI systems that actually transform how they work.
        </p>
      </div>
      <div className="hero-banner-container">
        <div
          id="banner"
          className="hero-banner-content"
          role="region"
          aria-label="Call to action section"
        >
          <div className="hero-banner-background" aria-hidden="true"></div>
          <a
            href="https://calendar.app.google/VSL5R4En4SjyGSfR7"
            className="hero-banner-cta-link"
          >
            <button
              className="hero-banner-cta-button"
              aria-label="Get started with our services"
            >
              <p>Get started today</p>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
