import { useEffect, useRef, useState } from "react";
import { GalleryItemProps } from "../../types/index";
import React from "react";
// Using global styles from index.css

const GalleryItem = ({ image, size }: GalleryItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  return (
    <article
      ref={itemRef}
      className={`gallery-item ${size} ${isVisible ? "visible" : ""}`}
      data-date={image.date}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="gallery-image-container">
        <img
          src={image.src}
          alt={image.alt}
          className="gallery-image"
          loading="lazy"
        />
        <div className={`gallery-overlay ${isHovered ? "active" : ""}`}>
          <div className="gallery-content">
            <h3 className="gallery-item-title">{image.title}</h3>
            <p className="gallery-item-story">{image.story}</p>
            <time className="gallery-item-date">{formatDate(image.date)}</time>
          </div>
        </div>
      </div>
    </article>
  );
};

export default GalleryItem;
