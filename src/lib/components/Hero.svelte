<script lang="ts">
  import { onMount } from 'svelte';

  let isVisible = $state(false);

  onMount(() => {
    const timer = setTimeout(() => {
      isVisible = true;
    }, 100);

    return () => clearTimeout(timer);
  });
</script>

<section class="hero-section-marzipan" aria-labelledby="main-heading">
  <div class="hero-content-container" role="region">
    <h1 id="main-heading" class="hero-main-heading">
      <span class="hero-heading-line">
        {" "}Your partner for AI ventures{" "}
      </span>
    </h1>
    <p class="hero-description">
      I work with startups to build products people love and adopt AI with
      purpose. My approach is fast, affordable, and free of unnecessary
      complexity.
    </p>
  </div>
  <div class="hero-banner-container">
    <div
      id="banner"
      class="hero-banner-content"
      role="region"
      aria-label="Call to action section"
    >
      <div class="hero-banner-background" aria-hidden="true"></div>
      <a
        href="https://calendar.app.google/VSL5R4En4SjyGSfR7"
        class="hero-banner-cta-link"
      >
        <button
          class="hero-banner-cta-button"
          aria-label="Get started with our services"
        >
          <p>Get started today</p>
        </button>
      </a>
    </div>
  </div>
</section>
