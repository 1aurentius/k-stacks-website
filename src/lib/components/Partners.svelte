<script lang="ts">
  import type { Partner } from '$lib/types/index';

  const partners: Partner[] = [
    {
      name: 'Elias Ylonen',
      company: 'Ylonen Consulting',
      role: 'AI Consulting',
      description: 'Elias runs systematic AI transformation programs — mapping workflows, calculating business impact, and deploying tools at scale. Together we cover the full spectrum: founder-level strategy and rapid prototyping (me) to enterprise-grade process transformation (Elias).',
      url: 'https://ylonenconsulting.com',
    },
  ];
</script>

<section class="partners-section" id="partners-section">
  <div class="partners-header">
    <span class="section-label">Network —</span>
    <h2 class="partners-heading">Partners</h2>
    <p class="partners-intro">
      I work with a trusted network of specialists for larger or more complex engagements.
    </p>
  </div>

  <div class="partners-grid">
    {#each partners as partner (partner.name)}
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        class="partner-card"
      >
        <div class="partner-card-inner">
          <div class="partner-info">
            <h3 class="partner-name">{partner.name}</h3>
            <span class="partner-company">{partner.company}</span>
            <span class="partner-role">{partner.role}</span>
          </div>
          <p class="partner-description">{partner.description}</p>
          <span class="partner-link-text">Visit website &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</section>
