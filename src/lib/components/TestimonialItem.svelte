<script lang="ts">
  import type { Testimonial } from '$lib/types/index';

  let { testimonial }: { testimonial: Testimonial } = $props();
</script>

<div class="testimonial-item">
  <div class="testimonial-content">
    <div class="testimonial-rating">
      {#each Array.from({ length: 5 }) as _, index}
        <span class="testimonial-star {index < testimonial.rating ? 'filled' : ''}">
          ★
        </span>
      {/each}
    </div>
    <blockquote class="testimonial-quote">
      "{testimonial.content}"
    </blockquote>
    <div class="testimonial-author">
      <div class="testimonial-name">{testimonial.name}</div>
      <div class="testimonial-company">
        {testimonial.role} at {testimonial.company}
      </div>
    </div>
  </div>
</div>
