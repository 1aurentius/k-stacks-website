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
        <div className="services-intro-text">How I work —</div>
        <p>
          Every engagement starts with understanding your specific context —
          your data, your workflows, your team. That's what makes AI work. I
          offer three ways to work together, each grounded in the same principle:
          build the right foundation first, then scale with confidence.
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
