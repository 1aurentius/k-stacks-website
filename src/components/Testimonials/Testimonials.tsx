import React from "react";
import TestimonialItem from "./TestimonialItem";
import { testimonialsData } from "./testimonialsData";

const Testimonials = () => {
  return (
    <section
      className="testimonials-section-marzipan"
      id="testimonials-section"
    >
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-heading">
            Love letters <br />
            to Marzipan
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 785 525"
            fill="none"
            className="testimonials-svg"
          >
            <path
              d="M383 2V102"
              stroke="#034F46"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                strokeDashoffset: 0,
                strokeDasharray: "100px, 0.1px",
              }}
            />
            <path
              d="M546 101C546 75.8565 559.025 53.3813 563 29"
              stroke="#034F46"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                strokeDashoffset: 0,
                strokeDasharray: "74.2337px, 0.1px",
              }}
            />
            <path
              d="M634 138C644.156 128.056 655.728 119.802 666.185 110.183C669.924 106.743 675.729 103.675 678 99"
              stroke="#034F46"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                strokeDashoffset: 0,
                strokeDasharray: "58.9497px, 0.1px",
              }}
            />
            <path
              d="M706 253C716.647 253 728.358 246.026 737.807 242C748.683 237.366 759.454 233.08 770.029 227.877C773.23 226.301 781.482 222.987 783 220"
              stroke="#034F46"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                strokeDashoffset: 0,
                strokeDasharray: "84.4419px, 0.1px",
              }}
            />
            <path
              d="M722 381C742.831 381.982 794.123 420.282 779.376 405.688"
              stroke="#034F46"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                strokeDashoffset: 0,
                strokeDasharray: "70.8698px, 0.1px",
              }}
            />
            <path
              d="M583 401V458"
              stroke="#034F46"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                strokeDashoffset: 0,
                strokeDasharray: "57px, 0.1px",
              }}
            />
            <path
              d="M411 418C411 449.023 410.603 479.983 410 511"
              stroke="#034F46"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                strokeDashoffset: 0,
                strokeDasharray: "93.0069px, 0.1px",
              }}
            />
            <path
              d="M250 438C229.974 458.141 212.54 480.596 192.138 500.5C186.12 506.371 173.245 523 163 523"
              stroke="#034F46"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                strokeDashoffset: 0,
                strokeDasharray: "122.794px, 0.1px",
              }}
            />
            <path
              d="M77 386C52.0274 393.096 27.0333 400.106 2 407"
              stroke="#034F46"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                strokeDashoffset: 0,
                strokeDasharray: "39.1992px, 38.7855px",
              }}
            />
            <path
              d="M113 273C88.7129 260.066 68.3931 241.333 45.9359 225.722C35.4663 218.445 24.885 211.318 14.2052 204.344C11.5236 202.594 8.69889 201.52 7 199"
              stroke="#034F46"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                strokeDashoffset: 0.001,
                strokeDasharray: "0px, 999999px",
              }}
            />
            <path
              d="M226 128C219.65 120.591 213.451 109.47 210.933 99.8586C210.17 96.9432 210.384 87.264 208 86"
              stroke="#034F46"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                strokeDashoffset: 0.001,
                strokeDasharray: "0px, 999999px",
              }}
            />
          </svg>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <TestimonialItem key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
