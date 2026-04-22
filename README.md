# k&stacks Website

Personal website for Krister Alasaarela — custom software solutions for startups and small businesses.

## Tech Stack

- **Framework**: SvelteKit with Svelte 5
- **Language**: TypeScript
- **Build Tool**: Vite
- **Adapter**: `@sveltejs/adapter-static` (prerendered static site)
- **Styling**: Custom CSS
- **Deployment**: Render.com Static Site

## Project Structure

```
.
├── src/
│   ├── lib/
│   │   ├── components/   # Svelte components (Hero, Services, Gallery, Testimonials, ...)
│   │   ├── data/         # Content data (servicesData, galleryData, testimonialsData)
│   │   └── types/        # Shared TypeScript types
│   ├── routes/           # SvelteKit routes (+page, +layout, /privacy, /terms)
│   ├── assets/styles/    # Global stylesheets
│   └── app.html          # HTML template
├── static/               # Static assets (images, favicon, robots.txt, sitemap.xml, _redirects)
├── svelte.config.js      # Static adapter config (outputs to dist/)
├── vite.config.ts
└── tsconfig.json
```

## Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
npm install
npm run dev
```

Vite's dev server starts at `http://localhost:5173` by default.

### Scripts

- `npm run dev` — start the dev server
- `npm run build` — build the static site to `dist/`
- `npm run preview` — preview the production build locally
- `npm run check` — run `svelte-check` with the TS config
- `npm run check:watch` — same, in watch mode

## Deployment (Render.com)

Deployed as a static site on Render.

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18+

The static adapter outputs to `dist/` with a `200.html` fallback for client-side routing. `static/_redirects` is copied into the build for Render's routing.

## Content

To update site content, edit the data files in `src/lib/data/`:

- **Services**: `src/lib/data/servicesData.ts`
- **Gallery**: `src/lib/data/galleryData.ts` (images live in `static/`)
- **Testimonials**: `src/lib/data/testimonialsData.ts`

Other copy (Hero, About, Footer, Client logos) lives directly in the matching component under `src/lib/components/`.

## SEO

- Meta tags and Open Graph / Twitter Card tags in `src/app.html` and layouts
- `static/robots.txt` and `static/sitemap.xml`
- Prerendered pages for fast first paint and crawler friendliness

## License

MIT

## Contact

- **Email**: krister.alasaarela@gmail.com
- **LinkedIn**: [linkedin.com/in/kristeralasaarela](https://linkedin.com/in/kristeralasaarela)
- **X**: [@1aurentius](https://x.com/1aurentius)
