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
        {service.startingPrice > 0 ? `Starting at ${service.startingPrice}€` : 'Get in touch'}
      </span>
    </div>
    <div class="service-item-hidden">
      <span class="service-name">{service.name}</span>
      <span class="service-read-more">Read More</span>
    </div>
  </div>
  <div class="service-description">
    <p class="service-tagline">{service.tagline}</p>
    <div class="service-description-text">{service.description}</div>

    {#if service.phases && service.phases.length > 0}
      <div class="service-phases">
        {#each service.phases as phase}
          <div class="service-phase">
            <div class="service-phase-label">{phase.label}: {phase.name}</div>
            <p class="service-phase-desc">{phase.description}</p>
          </div>
        {/each}
      </div>
    {/if}

    {#if service.items && service.items.length > 0}
      <ul class="service-items-list">
        {#each service.items as item}
          <li>{item}</li>
        {/each}
      </ul>
    {/if}

    <div class="service-description-button-container">
      <a href="https://calendar.app.google/VSL5R4En4SjyGSfR7">
        <button type="button" class="nav-button-contact">
          Book a discovery call
        </button>
      </a>
    </div>
  </div>
</div>

<style>
  .service-tagline {
    font-weight: 600;
    font-size: 1rem;
    color: var(--text, #1a1a2e);
    margin-bottom: 0.5rem;
    font-style: italic;
  }

  .service-phases {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .service-phase {
    padding: 0.65rem 0.9rem;
    border-left: 2px solid currentColor;
    opacity: 0.85;
  }

  .service-phase-label {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 0.2rem;
  }

  .service-phase-desc {
    font-size: 0.88rem;
    line-height: 1.55;
    margin: 0;
    opacity: 0.9;
  }

  .service-items-list {
    margin-top: 0.9rem;
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .service-items-list li {
    font-size: 0.9rem;
    padding-left: 1rem;
    position: relative;
  }

  .service-items-list li::before {
    content: '—';
    position: absolute;
    left: 0;
    opacity: 0.5;
  }
</style>
