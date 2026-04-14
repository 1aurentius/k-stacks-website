<script lang="ts">
  import { servicesData } from '$lib/data/servicesData';
</script>

<section class="border-top" id="services">
  <div class="section-inner">
    <div class="section-label">Services</div>
    <h2 class="section-title">My work is always scoped clearly.</h2>
    <p class="section-subtitle">We align on goals first, then move. Every engagement starts with a discovery call. Prices are starting points; final quotes are tailored to your situation.</p>

    <div class="service-cards">
      {#each servicesData as service (service.id)}
        <div class="service-card">
          <div class="service-number">{service.number}</div>
          <h3>{service.name}</h3>
          <div class="service-for">{service.for}</div>
          <p>{service.description}</p>
          <ul class="service-list">
            {#each service.items as item}
              <li>{item}</li>
            {/each}
          </ul>
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
