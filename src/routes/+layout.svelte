<script lang="ts">
  import '../assets/styles/index.css';
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();
</script>

<Navigation />

{@render children()}

<Footer />
