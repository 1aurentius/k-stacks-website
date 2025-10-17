import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-last-updated">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="legal-section">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you
            contact us for services, send us an email, or communicate with us in
            any other way.
          </p>
          <ul className="legal-list">
            <li>Contact information (name, email address, phone number)</li>
            <li>Project requirements and business information</li>
            <li>Communication records and correspondence</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="legal-list">
            <li>Provide, maintain, and improve our services</li>
            <li>Communicate with you about projects and services</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you technical notices and security alerts</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as
            described in this policy. We may share information:
          </p>
          <ul className="legal-list">
            <li>With your explicit consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and safety</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Data Retention</h2>
          <p>
            We retain your information for as long as necessary to provide
            services and fulfill the purposes outlined in this policy, unless a
            longer retention period is required by law.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="legal-list">
            <li>Access and update your personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to processing of your personal information</li>
            <li>Request data portability</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>7. Cookies and Tracking</h2>
          <p>
            Our website may use cookies and similar tracking technologies to
            improve user experience. You can control cookie settings through
            your browser preferences.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Third-Party Services</h2>
          <p>
            Our website may contain links to third-party services. We are not
            responsible for the privacy practices of these external sites.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new policy on this page with an
            updated "Last updated" date.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:{" "}
            <a
              href="mailto:krister.alasaarela@gmail.com"
              className="legal-link"
            >
              krister.alasaarela@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
