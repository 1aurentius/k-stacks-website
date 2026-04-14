<script lang="ts">
  import type { Service } from '$lib/types/index';

  let { service }: { service: Service } = $props();
</script>

<div class="service-item" data-id={service.id}>
  <div class="service-item-header">
    <h3 class="service-name">{service.name}</h3>
    <span class="service-catchphrase">{service.catchphrase}</span>
  </div>

  <p class="service-tagline">{service.tagline}</p>

  <p class="service-description-text">{service.description}</p>

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

  <div class="service-cta">
    <a href="https://calendar.app.google/VSL5R4En4SjyGSfR7" class="service-cta-link">
      Book a discovery call →
    </a>
  </div>
</div>

<style>
  .service-item {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 2.5rem 0;
    border-bottom: 1px solid #e5e7eb;
    width: 100%;
  }

  .service-item-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .service-name {
    font-size: 1.375rem;
    font-weight: 600;
    color: #111827;
    margin: 0;
  }

  .service-catchphrase {
    font-size: 0.8rem;
    color: #6b7280;
    white-space: nowrap;
    font-style: italic;
  }

  .service-tagline {
    font-size: 1rem;
    font-weight: 500;
    color: #374151;
    margin: 0;
    font-style: italic;
  }

  .service-description-text {
    font-size: 0.9375rem;
    color: #4b5563;
    line-height: 1.65;
    margin: 0;
  }

  .service-phases {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.25rem;
  }

  .service-phase {
    padding: 0.6rem 0.875rem;
    border-left: 2px solid #e5e7eb;
    background: #f9fafb;
  }

  .service-phase-label {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #374151;
    margin-bottom: 0.2rem;
  }

  .service-phase-desc {
    font-size: 0.875rem;
    color: #6b7280;
    line-height: 1.55;
    margin: 0;
  }

  .service-items-list {
    list-style: none;
    padding: 0;
    margin: 0.25rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
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

  .service-cta {
    margin-top: 0.5rem;
  }

  .service-cta-link {
    font-size: 0.875rem;
    font-weight: 500;
    color: #111827;
    text-decoration: none;
    border-bottom: 1px solid #111827;
    padding-bottom: 1px;
    transition: opacity 0.15s;
  }

  .service-cta-link:hover {
    opacity: 0.6;
  }
</style>
