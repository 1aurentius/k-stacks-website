<script lang="ts">
  import type { Service } from '$lib/types/index';

  let { service, isActive, onclick }: {
    service: Service;
    isActive: boolean;
    onclick: (id: string) => void;
  } = $props();

  function handleClick() {
    onclick(service.id);
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="service-item {isActive ? 'active' : ''}"
  data-id={service.id}
  onclick={handleClick}
>
  <div class="service-item-content">
    <div class="service-item-visible">
      <span class="service-name">{service.name}</span>
      <span class="service-category-visible">
        Starting at {service.startingPrice}€
      </span>
    </div>
    <div class="service-item-hidden">
      <span class="service-name">{service.name}</span>
      <span class="service-read-more">Read More</span>
    </div>
  </div>
  <div class="service-description">
    <div class="service-description-text">{service.description}</div>
    <div class="service-description-button-container">
      <a href="https://calendar.app.google/VSL5R4En4SjyGSfR7">
        <button type="button" class="nav-button-contact">
          Book a discovery call
        </button>
      </a>
    </div>
  </div>
</div>
