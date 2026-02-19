<script lang="ts">
  import type { GalleryImage } from '$lib/types/index';

  let { image, size }: {
    image: GalleryImage;
    size: 'featured' | 'large' | 'medium' | 'small';
  } = $props();

  let isVisible = $state(false);
  let isHovered = $state(false);

  function observe(node: HTMLElement) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible = true;
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return {
      destroy() {
        observer.unobserve(node);
      }
    };
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  }
</script>

<article
  use:observe
  class="gallery-item {size} {isVisible ? 'visible' : ''}"
  data-date={image.date}
  onmouseenter={() => isHovered = true}
  onmouseleave={() => isHovered = false}
>
  <div class="gallery-image-container">
    <img
      src={image.src}
      alt={image.alt}
      class="gallery-image"
      loading="lazy"
    />
    <div class="gallery-overlay {isHovered ? 'active' : ''}">
      <div class="gallery-content">
        <h3 class="gallery-item-title">{image.title}</h3>
        <p class="gallery-item-story">{image.story}</p>
        <time class="gallery-item-date">{formatDate(image.date)}</time>
      </div>
    </div>
  </div>
</article>
