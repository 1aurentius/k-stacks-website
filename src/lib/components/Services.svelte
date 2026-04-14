<script lang="ts">
  import ServiceItem from './ServiceItem.svelte';
  import { servicesData } from '$lib/data/servicesData';
</script>

<section class="services-section-marzipan" id="services-section">
  <div class="services-intro-text-container">
    <div class="services-intro-text">Services —</div>
    <p>
      My work is grounded in presence to ensure every project is approached
      with clear intention and purpose. Every partnership is built on trust
      and transparency, and every engagement begins with a deep alignment
      session to define the scope and vision together.
    </p>
  </div>

  <div class="services-list-container">
    <div class="services-list" id="services-list-items">
      {#each servicesData as service (service.id)}
        <ServiceItem {service} />
      {/each}
    </div>
  </div>
</section>
