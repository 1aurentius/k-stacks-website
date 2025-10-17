import { useEffect, useState } from "react";
import GallerySection from "../Gallery/GallerySection";
// Using public folder image path
const kristerImage = "/kstacks_krister_image.jpeg";
import React from "react";
// Using global styles from index.css

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("aboutus-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const aboutText = `Hey! I'm Krister Alasaarela, the founder and sole developer behind Marzipan. 
    I specialize in creating custom software solutions that help businesses transform their operations 
    through AI and automation. With years of experience in full-stack development and a passion for 
    cutting-edge technology, I work closely with each client to understand their unique challenges 
    and build tailored solutions that drive real results. 
    
    My approach is rooted in trust, integrity, and transparency - every project begins with a 
    collaborative session where we align on goals and scope. I believe in creating software that 
    not only solves problems but also empowers businesses to thrive in an increasingly digital world.`;

  return (
    <section className="aboutus-section-marzipan" id="aboutus-section">
      <div className="services-intro-text-container">
        <div className="services-intro-text">About me —</div>
        <p>
          I wanted to share a few moments and thoughts from my journey below. If
          my story resonates with yours, I'd love to connect and hear about it.
        </p>
      </div>

      <div className="aboutus-content-container">
        <div className="aboutus-iamge-column">
          <img
            src={kristerImage}
            alt="Krister Alasaarela"
            className="aboutus-image"
          />
        </div>
        <div className="aboutus-title-column">
          <p className="aboutus-description">
            My work begins with presence. It isn't just a practice; it's the
            commitment that ensures everything we create together is
            intentional, purposeful, and built on a bedrock of trust. This
            belief was shaped by my own journey, a fun mix of influences from
            the creative chaos of Berlin to the forward-thinking energy of the
            Bay Area. Through it all, life's most beautiful lesson has been to
            find clarity in the noise through a simple, happy pursuit: exploring
            how to be a more present and loving human being. This is how I work.
            I lead with my heart, bring my full self to every project, and
            partner with people who are ready to do the same. Working
            intuitively allows us to have the honest conversations needed to
            focus on what truly matters, making the process of change and growth
            both smooth and rewarding. Let's build something meaningful, and
            enjoy the journey of getting there.
          </p>

          <div className="aboutus-social-links">
            <a
              href="https://linkedin.com/in/kristeralasaarela"
              className="social-link"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="https://x.com/1aurentius"
              className="social-link"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>

            <a
              href="mailto:krister.alasaarela@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.82L12 11.64l8.545-7.819h1.82c.904 0 1.636.732 1.636 1.636z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Gallery Section as part of About */}
      <GallerySection />
    </section>
  );
};

export default About;
