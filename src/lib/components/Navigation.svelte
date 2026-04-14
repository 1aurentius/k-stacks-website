<script lang="ts">
  import { onMount } from 'svelte';

  let mobileOpen = $state(false);

  onMount(() => {
    const handleScroll = () => {
      // keep for future use
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  $effect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  });

  function navClick(href: string) {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    mobileOpen = false;
  }
</script>

<nav class="main-nav" aria-label="Main navigation">
  <div class="nav-inner">
    <a href="/" class="nav-logo">Krister Alasaarela <span>/ K &amp; Stacks</span></a>

    <button
      class="nav-hamburger"
      onclick={() => (mobileOpen = !mobileOpen)}
      aria-label="Toggle menu"
      aria-expanded={mobileOpen}
    >
      <span></span><span></span><span></span>
    </button>

    <ul class="nav-links" role="list">
      <li><button onclick={() => navClick('#services')}>Services</button></li>
      <li><button onclick={() => navClick('#why')}>Why Me</button></li>
      <li><button onclick={() => navClick('#about')}>About</button></li>
      <li><button onclick={() => navClick('#contact')} class="nav-cta">Let's Talk</button></li>
    </ul>
  </div>

  <div class="nav-mobile {mobileOpen ? 'open' : ''}" role="menu">
    <button onclick={() => navClick('#services')}>Services</button>
    <button onclick={() => navClick('#why')}>Why Me</button>
    <button onclick={() => navClick('#about')}>About</button>
    <button onclick={() => navClick('#contact')} class="nav-cta">Let's Talk</button>
  </div>
</nav>

<style>
  .nav-links button, .nav-mobile button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    color: var(--text-secondary);
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.2s;
    padding: 0;
  }

  .nav-links button:hover, .nav-mobile button:hover {
    color: var(--text);
  }

  .nav-links button.nav-cta {
    background: var(--text);
    color: #fff;
    padding: 0.5rem 1.2rem;
    border-radius: 6px;
    font-size: 0.85rem;
    transition: all 0.2s;
  }

  .nav-links button.nav-cta:hover {
    background: var(--accent);
    color: #fff;
  }

  .nav-mobile button.nav-cta {
    background: var(--text);
    color: #fff;
    padding: 0.5rem 1.2rem;
    border-radius: 6px;
    font-size: 0.85rem;
    width: fit-content;
  }

  .nav-mobile button.nav-cta:hover {
    background: var(--accent);
  }
</style>
