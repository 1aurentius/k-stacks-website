import React from "react";
import { TestimonialItemProps } from "../../types/index";

const TestimonialItem = ({ testimonial }: TestimonialItemProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`testimonial-star ${index < rating ? "filled" : ""}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="testimonial-item">
      <div className="testimonial-content">
        <div className="testimonial-rating">
          {renderStars(testimonial.rating)}
        </div>
        <blockquote className="testimonial-quote">
          "{testimonial.content}"
        </blockquote>
        <div className="testimonial-author">
          <div className="testimonial-name">{testimonial.name}</div>
          <div className="testimonial-company">
            {testimonial.role} at {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
