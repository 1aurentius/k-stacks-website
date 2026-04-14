<script lang="ts">
  import { servicesData } from '$lib/data/servicesData';
</script>

<section class="border-top" id="services">
  <div class="section-inner">
    <div class="section-label">What I Do</div>
    <h2 class="section-title">Three ways I work with companies.</h2>
    <p class="section-subtitle">Every engagement starts with understanding your specific context. That's what makes AI work.</p>

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
