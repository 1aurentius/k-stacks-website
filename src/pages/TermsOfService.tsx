import React from "react";

const TermsOfService = () => {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1 className="legal-title">Terms of Service</h1>
        <p className="legal-last-updated">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="legal-section">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using Marzipan's services, you accept and agree to
            be bound by the terms and provision of this agreement. If you do not
            agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Services</h2>
          <p>
            Marzipan provides custom software development, AI transformation
            consulting, conversational agents, and AI automation services. All
            services are provided on a project basis as agreed upon in
            individual contracts.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Payment Terms</h2>
          <p>
            Payment terms will be specified in individual project agreements.
            Generally, payments are due according to project milestones or as
            otherwise agreed upon in writing.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Intellectual Property</h2>
          <p>
            Upon full payment, clients will own the custom software developed
            specifically for their project. Marzipan retains rights to general
            methodologies, frameworks, and pre-existing intellectual property.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Confidentiality</h2>
          <p>
            Marzipan agrees to maintain confidentiality of all client
            information and will not disclose any proprietary information
            without written consent, except as required by law.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Limitation of Liability</h2>
          <p>
            Marzipan's liability is limited to the amount paid for services. We
            are not liable for any indirect, incidental, or consequential
            damages arising from the use of our services.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Termination</h2>
          <p>
            Either party may terminate services with written notice. Upon
            termination, payment is due for all work completed up to the
            termination date.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Governing Law</h2>
          <p>
            These terms are governed by the laws of the jurisdiction where
            Marzipan operates. Any disputes will be resolved through binding
            arbitration.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us at:{" "}
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

export default TermsOfService;
