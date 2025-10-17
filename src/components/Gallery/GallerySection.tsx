import { useEffect, useState } from "react";
import { galleryData } from "./galleryData";
import { GalleryImage } from "../../types/index";
// Using global styles from index.css

const GallerySection = () => {
  const [sortedImages, setSortedImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    // Sort images by date (most recent first)
    const sorted = [...galleryData].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    setSortedImages(sorted);
  }, []);

  // Distribute images across columns for responsive grid
  const distributeImages = (images: GalleryImage[], columnCount: number) => {
    const columns: GalleryImage[][] = Array.from(
      { length: columnCount },
      () => []
    );

    // Better distribution - fill columns more evenly
    images.forEach((image, index) => {
      const columnIndex = index % columnCount;
      columns[columnIndex].push(image);
    });

    return columns;
  };

  const columns = distributeImages(sortedImages, 3); // 3 columns maximum

  return (
    <section className="gallery-section" id="gallery-section">
      <div className="gallery-container">
        <div className="gallery-responsive-grid">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="gallery-column">
              {column.map((image) => (
                <div key={image.id} className="gallery-image-container">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery-responsive-image"
                    loading="lazy"
                  />
                  <div className="gallery-image-overlay">
                    <h3 className="gallery-image-title">{image.title}</h3>
                    <p className="gallery-image-story">{image.story}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
