import React from "react";
import { ServiceItemProps } from "../../types/index";
// Using global styles from index.css

const ServiceItem = ({ service, isActive, onClick }: ServiceItemProps) => {
  const handleClick = () => {
    onClick(service.id);
  };

  return (
    <div
      className={`service-item ${isActive ? "active" : ""}`}
      data-id={service.id}
      onClick={handleClick}
    >
      <div className="service-item-content">
        <div className="service-item-visible">
          <span className="service-name">{service.name}</span>
          <span className="service-category-visible">
            Starting at {service.startingPrice}€
          </span>
        </div>
        <div className="service-item-hidden">
          <span className="service-name">{service.name}</span>
          <span className="service-read-more">Read More</span>
        </div>
      </div>
      <div className="service-description">
        <div className="service-description-text">{service.description}</div>
        <div className="service-description-button-container">
          <a href="https://calendar.app.google/VSL5R4En4SjyGSfR7" className="">
            <button type="button" className="nav-button-contact">
              Book a discovery call
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
