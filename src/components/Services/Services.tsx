import { useState } from "react";
import ServiceItem from "./ServiceItem";
import { servicesData } from "./servicesData";
import React from "react";
// Using global styles from index.css

const Services = () => {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  const handleServiceClick = (serviceId: string) => {
    // Toggle the service - if it's already active, close it, otherwise open it
    setActiveServiceId(activeServiceId === serviceId ? null : serviceId);
  };

  return (
    <section className="services-section-marzipan" id="services-section">
      <div className="services-intro-text-container">
        <div className="services-intro-text">Services —</div>
        <p>
          My work is grounded in presence to ensure every project is approached
          with clear intention and purpose. Every partnership is built on trust
          and transparency, and every engagement begins with a deep alignment
          session to define the scope and vision together. The listed starting
          prices offer a baseline; a final quote will be tailored to your
          project's specific needs after our initial session.
        </p>
      </div>

      <div className="services-list-container">
        <div className="services-list" id="services-list-items">
          {servicesData.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              isActive={activeServiceId === service.id}
              onClick={handleServiceClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
