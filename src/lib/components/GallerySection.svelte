<script lang="ts">
  import { galleryData } from '$lib/data/galleryData';
  import type { GalleryImage } from '$lib/types/index';

  const sortedImages = $derived(
    [...galleryData].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  );

  function distributeImages(images: GalleryImage[], columnCount: number) {
    const columns: GalleryImage[][] = Array.from(
      { length: columnCount },
      () => []
    );

    images.forEach((image, index) => {
      const columnIndex = index % columnCount;
      columns[columnIndex].push(image);
    });

    return columns;
  }

  const columns = $derived(distributeImages(sortedImages, 3));
</script>

<section class="gallery-section" id="gallery-section">
  <div class="gallery-container">
    <div class="gallery-responsive-grid">
      {#each columns as column, columnIndex}
        <div class="gallery-column">
          {#each column as image (image.id)}
            <div class="gallery-image-container">
              <img
                src={image.src}
                alt={image.alt}
                class="gallery-responsive-image"
                loading="lazy"
              />
              <div class="gallery-image-overlay">
                <h3 class="gallery-image-title">{image.title}</h3>
                <p class="gallery-image-story">{image.story}</p>
              </div>
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</section>
