<script lang="ts">
  import '../assets/styles/index.css';
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();
</script>

<main class="site-main">
  <div class="background-shapes"></div>

  <Navigation />

  {@render children()}

  <Footer />
</main>
