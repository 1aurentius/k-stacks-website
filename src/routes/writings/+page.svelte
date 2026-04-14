<script lang="ts">
  import { writingsData } from '$lib/data/writingsData';

  function formatDate(dateStr: string): string {
    const [year, month] = dateStr.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }

  function typeLabel(type: string): string {
    if (type === 'case-study') return 'Case Study';
    if (type === 'article') return 'Article';
    return 'Thought';
  }

  const caseStudies = writingsData.filter(w => w.type === 'case-study');
  const articles = writingsData.filter(w => w.type !== 'case-study');
</script>

<svelte:head>
  <title>Writings - Krister Alasaarela | K & Stacks</title>
  <meta name="description" content="Case studies, articles, and thoughts on AI transformation, product development, and building intelligent systems." />
</svelte:head>

<section class="writings-page">
  <div class="writings-hero">
    <h1 class="writings-title">Writings</h1>
    <p class="writings-subtitle">
      Case studies from client partnerships, thoughts on AI, and lessons learned building intelligent products.
    </p>
  </div>

  {#if caseStudies.length > 0}
    <div class="writings-section">
      <h2 class="writings-section-title">Case Studies</h2>
      <div class="writings-grid">
        {#each caseStudies as writing (writing.slug)}
          <article class="writing-card">
            <div class="writing-card-inner">
              <div class="writing-card-meta">
                <span class="writing-card-type">{typeLabel(writing.type)}</span>
                <span class="writing-card-date">{formatDate(writing.date)}</span>
              </div>
              <h3 class="writing-card-title">{writing.title}</h3>
              <p class="writing-card-excerpt">{writing.excerpt}</p>
              {#if writing.client}
                <span class="writing-card-client">{writing.client}</span>
              {/if}
              <div class="writing-card-tags">
                {#each writing.tags as tag}
                  <span class="writing-tag">{tag}</span>
                {/each}
              </div>
            </div>
          </article>
        {/each}
      </div>
    </div>
  {/if}

  {#if articles.length > 0}
    <div class="writings-section">
      <h2 class="writings-section-title">Articles & Thoughts</h2>
      <div class="writings-grid">
        {#each articles as writing (writing.slug)}
          <article class="writing-card">
            <div class="writing-card-inner">
              <div class="writing-card-meta">
                <span class="writing-card-type">{typeLabel(writing.type)}</span>
                <span class="writing-card-date">{formatDate(writing.date)}</span>
              </div>
              <h3 class="writing-card-title">{writing.title}</h3>
              <p class="writing-card-excerpt">{writing.excerpt}</p>
              <div class="writing-card-tags">
                {#each writing.tags as tag}
                  <span class="writing-tag">{tag}</span>
                {/each}
              </div>
            </div>
          </article>
        {/each}
      </div>
    </div>
  {/if}

  {#if writingsData.length === 0}
    <div class="writings-empty">
      <p>New writings coming soon.</p>
    </div>
  {/if}
</section>
