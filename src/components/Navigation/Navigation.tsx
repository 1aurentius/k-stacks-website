import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavigationLink } from "../../types/index";
import React from "react";
// Using global styles from index.css

const navigationLinks: NavigationLink[] = [
  { href: "#services-section", label: "Services" },
  { href: "#client-logos-section", label: "Clients" },
  { href: "#aboutus-section", label: "About Me" },
  { href: "#gallery-section", label: "Gallery" },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      // Handle anchor links
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const renderNavLink = (link: NavigationLink, isMobile = false) => {
    const baseClass = isMobile
      ? "mobile-menu-nav-link-text-marzipan"
      : "nav-link";
    const activeClass = location.pathname === link.href ? "active" : "";

    if (link.href.startsWith("#")) {
      return (
        <button
          key={link.href}
          type="button"
          role="link"
          className={`${baseClass} ${activeClass}`}
          onClick={() => handleNavClick(link.href)}
        >
          {link.label}
        </button>
      );
    }

    return (
      <Link
        key={link.href}
        to={link.href}
        className={`${baseClass} ${activeClass}`}
        onClick={() => handleNavClick(link.href)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`main-navbar ${isScrolled ? "scrolled" : ""}`}
      id="main-navbar"
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-link">
          <div className="navbar-logo-wrapper">
            <span className="logo-text">Krister Alasaarela</span>
          </div>
        </Link>

        <div
          role="navigation"
          aria-label="Primary links"
          className="navbar-links-desktop"
        >
          {navigationLinks.map((link) => renderNavLink(link))}
        </div>

        <a
          href="https://calendar.app.google/VSL5R4En4SjyGSfR7"
          className="navbar-contact-link-desktop"
        >
          <button type="button" className="nav-button-contact">
            Book a discovery call
          </button>
        </a>

        <div className="navbar-mobile-menu-button-wrapper">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-content"
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
          >
            <svg className="menu-icon" aria-hidden="true" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu-content"
        className={`mobile-menu-marzipan ${isMobileMenuOpen ? "active" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu-header-marzipan">
          <Link to="/" aria-label="Home" className="mobile-menu-logo-link">
            Krister Alasaarela
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            className="mobile-menu-close-button-marzipan"
            onClick={toggleMobileMenu}
          >
            <svg className="menu-icon" aria-hidden="true" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mobile-menu-main-content-marzipan">
          <div className="mobile-menu-cta-heading">
            Let's start creating together
          </div>
          <a href="https://calendar.app.google/VSL5R4En4SjyGSfR7">
            <button
              className="mobile-menu-contact-button-marzipan"
              aria-label="Contact us"
            >
              Book a discovery call
            </button>
          </a>
          <hr className="mobile-menu-divider-marzipan" aria-hidden="true" />
          <div className="mobile-menu-nav-links-marzipan" role="menu">
            {navigationLinks.map((link) => (
              <div
                key={link.href}
                role="menuitem"
                className="mobile-menu-link-item-marzipan"
              >
                <div className="mobile-menu-link-content">
                  {renderNavLink(link, true)}
                  <div
                    className="mobile-menu-link-line-marzipan"
                    aria-hidden="true"
                  ></div>
                  <span
                    className="mobile-menu-link-icon-marzipan"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
