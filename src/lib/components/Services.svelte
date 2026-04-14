<script lang="ts">
  import ServiceItem from './ServiceItem.svelte';
  import { servicesData } from '$lib/data/servicesData';

  let activeServiceId: string | null = $state(null);

  function handleServiceClick(serviceId: string) {
    activeServiceId = activeServiceId === serviceId ? null : serviceId;
  }
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
        <ServiceItem
          {service}
          isActive={activeServiceId === service.id}
          onclick={handleServiceClick}
        />
      {/each}
    </div>
  </div>
</section>
