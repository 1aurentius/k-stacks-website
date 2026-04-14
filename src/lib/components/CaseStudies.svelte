<script lang="ts">
  import { writingsData } from '$lib/data/writingsData';

  const featured = writingsData.filter(w => w.featured).slice(0, 3);

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
</script>

<section class="case-studies-section" id="case-studies-section">
  <div class="case-studies-header">
    <span class="section-label">Recent Work</span>
    <h2 class="case-studies-heading">Case Studies</h2>
    <p class="case-studies-intro">
      A look at recent partnerships and the outcomes we achieved together.
    </p>
  </div>

  <div class="case-studies-grid">
    {#each featured as writing, i (writing.slug)}
      <a href="/writings" class="case-study-card">
        <div class="case-study-card-inner">
          <div class="case-study-number">{String(i + 1).padStart(2, '0')}</div>
          <div class="case-study-meta">
            <span class="case-study-type">{typeLabel(writing.type)}</span>
            <span class="case-study-date">{formatDate(writing.date)}</span>
          </div>
          <h3 class="case-study-title">{writing.title}</h3>
          <p class="case-study-excerpt">{writing.excerpt}</p>
          {#if writing.client}
            <span class="case-study-client">{writing.client}</span>
          {/if}
          <span class="case-study-read-more">Read more &rarr;</span>
        </div>
      </a>
    {/each}
  </div>

  <div class="case-studies-cta">
    <a href="/writings" class="view-all-link">View all writings &rarr;</a>
  </div>
</section>
