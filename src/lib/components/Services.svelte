<script lang="ts">
  import { servicesData } from '$lib/data/servicesData';
</script>

<section class="border-top" id="services">
  <div class="section-inner">
    <div class="section-label">What I Do</div>
    <h2 class="section-title">Four ways I work with companies.</h2>
    <p class="section-subtitle">Every engagement starts with understanding your specific context. That's what makes AI work.</p>

    <div class="service-cards">
      {#each servicesData as service (service.id)}
        <div class="service-card">
          <div class="service-number">{service.number}</div>
          <h3>{service.name}</h3>
          <div class="service-for">{service.for}</div>
          <p>{service.description}</p>

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

          {#if service.items.length > 0}
            <ul class="service-list">
              {#each service.items as item}
                <li>{item}</li>
              {/each}
            </ul>
          {/if}

          {#each service.examples as example}
            <div class="service-example">
              <div class="service-example-label">Example</div>
              <p>{example.text}</p>
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .service-phases {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .service-phase {
    padding: 0.75rem 1rem;
    border-left: 2px solid var(--border);
    background: var(--bg-warm);
    border-radius: 0 6px 6px 0;
  }

  .service-phase-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--accent);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 0.3rem;
  }

  .service-phase-desc {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
  }
</style>
