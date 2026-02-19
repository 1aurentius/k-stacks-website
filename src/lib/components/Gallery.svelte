<script lang="ts">
  import GalleryItem from './GalleryItem.svelte';
  import { galleryData } from '$lib/data/galleryData';

  const sortedImages = $derived(
    [...galleryData].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  );

  function getSizeClass(
    index: number,
    totalItems: number
  ): 'featured' | 'large' | 'medium' | 'small' {
    if (index === 0 && totalItems >= 3) return 'featured';
    if (index === 1 && totalItems >= 3) return 'large';
    if (index === 2 && totalItems >= 4) return 'medium';
    return 'small';
  }
</script>

<div class="gallery-page">
  <section class="gallery-header-section">
    <div class="gallery-header-container">
      <h1 class="gallery-title">Personal Gallery</h1>
      <p class="gallery-subtitle">
        A collection of moments, stories, and experiences that shape my
        journey
      </p>
    </div>
  </section>

  <section class="gallery-section" id="gallery-section">
    <div class="gallery-container">
      <div class="gallery-grid" id="gallery-grid">
        {#each sortedImages as image, index (image.id)}
          <GalleryItem
            {image}
            size={getSizeClass(index, sortedImages.length)}
          />
        {/each}
      </div>
    </div>
  </section>
</div>
