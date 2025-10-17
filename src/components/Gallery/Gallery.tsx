import { useEffect, useState } from "react";
import GalleryItem from "./GalleryItem";
import { galleryData } from "./galleryData";
import { GalleryImage } from "../../types/index";
import React from "react";
// Using global styles from index.css

const Gallery = () => {
  const [sortedImages, setSortedImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    // Sort images by date (most recent first) and assign sizes
    const sorted = [...galleryData].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    setSortedImages(sorted);
  }, []);

  const getSizeClass = (
    index: number,
    totalItems: number
  ): "featured" | "large" | "medium" | "small" => {
    if (index === 0 && totalItems >= 3) return "featured";
    if (index === 1 && totalItems >= 3) return "large";
    if (index === 2 && totalItems >= 4) return "medium";
    return "small";
  };

  return (
    <div className="gallery-page">
      {/* Gallery Header Section */}
      <section className="gallery-header-section">
        <div className="gallery-header-container">
          <h1 className="gallery-title">Personal Gallery</h1>
          <p className="gallery-subtitle">
            A collection of moments, stories, and experiences that shape my
            journey
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="gallery-section" id="gallery-section">
        <div className="gallery-container">
          <div className="gallery-grid" id="gallery-grid">
            {sortedImages.map((image, index) => (
              <GalleryItem
                key={image.id}
                image={image}
                size={getSizeClass(index, sortedImages.length)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
