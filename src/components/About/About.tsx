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

  const aboutText = `I'm Krister Alasaarela, the founder of K & Stacks Oy.
    I build AI infrastructure for companies — from data foundations to deployed agents.
    With a Bachelor's in Computer Science and deep experience in agentic systems,
    I help organizations set up the AI systems that actually transform how they work.`;

  return (
    <section className="aboutus-section-marzipan" id="aboutus-section">
      <div className="services-intro-text-container">
        <div className="services-intro-text">About me —</div>
        <p>
          I started K & Stacks after years of building products, growing
          companies, and going deep on AI. A few moments from the journey below.
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
            I'm Krister Alasaarela, founder of K & Stacks Oy. I have a
            Bachelor's in Computer Science and I've been building with AI
            tools since they first became capable enough to matter. Context
            engineering is at the core of everything I do — making sure AI
            systems truly understand your business before you scale. I don't
            just advise — I'm an engineer who writes code, designs
            architectures, and ships products. For larger projects, I bring
            in a close-knit network of exceptional product and engineering
            talent I've worked with and trust. I work with companies across
            the Nordics — from venture builders and investment firms to event
            technology platforms, media companies, and sustainability
            consultancies. The common thread: a real business problem and an
            opportunity to solve it with AI infrastructure built to last.
            Based in Helsinki.
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
