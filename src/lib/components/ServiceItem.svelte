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
      <span class="service-category-visible">{service.catchphrase}</span>
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
          <div class="service-phase-card">
            <div class="service-phase-header">
              <span class="service-phase-label">{phase.label}</span>
              <span class="service-phase-name">{phase.name}</span>
            </div>
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
    font-size: 1rem;
    font-weight: 500;
    font-style: italic;
    color: #374151;
    margin: 0 0 0.25rem;
  }

  .service-phases {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  .service-phase-card {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding: 1rem 1.1rem;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    background: #ffffff;
  }

  .service-phase-header {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .service-phase-label {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #9ca3af;
    white-space: nowrap;
  }

  .service-phase-name {
    font-size: 0.875rem;
    font-weight: 600;
    color: #111827;
  }

  .service-phase-desc {
    font-size: 0.875rem;
    color: #6b7280;
    line-height: 1.65;
    margin: 0;
  }

  .service-items-list {
    list-style: none;
    padding: 0;
    margin: 0.25rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .service-items-list li {
    font-size: 0.9rem;
    color: #4b5563;
    padding-left: 1.25rem;
    position: relative;
  }

  .service-items-list li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: #9ca3af;
  }
</style>
