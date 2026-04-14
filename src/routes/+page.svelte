<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Services from '$lib/components/Services.svelte';
  import ClientLogos from '$lib/components/ClientLogos.svelte';
  import About from '$lib/components/About.svelte';
</script>

<Hero />

<!-- Problem -->
<section class="border-top">
  <div class="section-inner">
    <div class="problem-content">
      <div class="section-label">The Problem</div>
      <h2 class="section-title">Most companies are stuck at "we tried a chatbot."</h2>
      <p>
        You've seen what AI can do. Maybe you've run a pilot, built a prototype, or watched a demo.
        But turning that into real transformation — agents that work across your organization, data
        that's structured for AI, teams that know how to leverage these tools — that's a different
        challenge entirely.
      </p>
      <p class="problem-highlight">The gap isn't the AI model. It's the infrastructure.</p>
    </div>
  </div>
</section>

<Services />

<!-- Why -->
<section class="border-top" id="why">
  <div class="section-inner">
    <div class="section-label">Why Work With Me</div>
    <h2 class="section-title">What sets this apart.</h2>
    <div class="why-grid">
      <div class="why-item">
        <h4>Context engineering at the core</h4>
        <p>
          I don't just deploy tools. I make sure your AI systems understand your business. The same
          model produces vastly different results depending on context. Getting this right is what
          separates a demo from a deployed system.
        </p>
      </div>
      <div class="why-item">
        <h4>I build, not just advise</h4>
        <p>
          I'm an engineer. I write code, design architectures, and ship products. When I say I'll
          build your AI infrastructure, I mean I'll build it.
        </p>
      </div>
      <div class="why-item">
        <h4>Presence and dedication</h4>
        <p>
          I work closely with every client. Not managing from a distance — in the codebase, in the
          conversations, in the details that matter.
        </p>
      </div>
      <div class="why-item">
        <h4>A network when you need it</h4>
        <p>
          For larger projects, I bring in exceptional product and engineering talent I've worked with
          and trust. Scaled to the problem, not to a billing target.
        </p>
      </div>
    </div>
  </div>
</section>

<About />

<ClientLogos />
