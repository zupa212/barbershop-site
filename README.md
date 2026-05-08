# Barbershop Site

A Vite + React + TypeScript single-page site for a barbershop business. Includes home/landing page, per-location shop pages, franchise page, blog, contact form, and a Three.js virtual tour.

## Tech stack

- **Vite 5** + **React 18** + **TypeScript**
- **Tailwind CSS** + **shadcn-ui** (Radix UI primitives)
- **react-router-dom** for routing
- **react-helmet** for per-route SEO meta tags
- **react-hook-form** + **zod** for forms
- **@emailjs/browser** for the contact form
- **three** for the virtual tour
- **embla-carousel** for galleries
- **@vercel/analytics**

## Project structure

```
public/
  favicon.ico
  robots.txt
  sitemap.xml
  uploads/          all site images (logos, gallery, team, locations, etc.)
src/
  components/       shared UI + section components, plus franchise/, blog/, ui/
  pages/            Index, PanoramaShop, ThermiShop, KalamariaShop, Franchise, Blog, BlogPost
  contexts/         language / theme contexts
  data/             static data (e.g. blogPosts.ts)
  hooks/
  lib/
  translations/
  types/
index.html          root document with SEO meta + schema.org placeholders
vite.config.ts
vercel.json         SPA rewrite config for Vercel
```

## Setup

```sh
# install deps (bun or npm)
bun install
# or
npm install

# create .env from the template and fill in EmailJS credentials
cp .env.example .env
```

`.env` keys (see [.env.example](.env.example)):

| Key | Description |
|-----|-------------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID for the contact forms |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |

## Run

```sh
bun run dev      # dev server at http://localhost:8080
bun run build    # production build to dist/
bun run preview  # preview the production build
bun run lint     # eslint
```

## Deployment

The repo includes a [vercel.json](vercel.json) with a SPA rewrite (all routes → `index.html`). Deploying to Vercel works out of the box:

1. Import the repo in Vercel.
2. Set the same env vars from `.env` in the Vercel project settings.
3. Deploy.

Any other static host (Netlify, Cloudflare Pages, etc.) works the same way as long as the SPA fallback is configured.

## Branding / SEO checklist

The repo is delivered **brand-neutral**: SEO meta values, schema.org fields, sitemap URLs, OG images, and contact emails are empty strings or placeholders so they cannot be confused with the previous owner. Before going live, fill in the following:

- [ ] [index.html](index.html) — `<title>`, `meta description/keywords/author`, canonical, OG/Twitter (URL/title/description/image), `og:locale`, `geo.region/placename`, schema.org `BarberShop` (name, description, url, logo, image, telephone, sameAs, addresses, openingHoursSpecification), schema.org `Organization` (name, alternateName, url, logo, image, description, sameAs)
- [ ] [src/pages/Index.tsx](src/pages/Index.tsx) — `<Helmet>` block (title, description, keywords, OG, canonical, geo)
- [ ] [src/pages/Blog.tsx](src/pages/Blog.tsx) — `<Helmet>` block
- [ ] [src/pages/BlogPost.tsx](src/pages/BlogPost.tsx) — `<Helmet>` canonical
- [ ] [src/pages/PanoramaShop.tsx](src/pages/PanoramaShop.tsx), [ThermiShop.tsx](src/pages/ThermiShop.tsx), [KalamariaShop.tsx](src/pages/KalamariaShop.tsx) — per-location `<Helmet>` blocks
- [ ] [public/sitemap.xml](public/sitemap.xml) — fill in `<loc>` values with the production domain
- [ ] [public/robots.txt](public/robots.txt) — set the `Sitemap:` URL
- [ ] [public/uploads/](public/uploads/) — replace logo / OG / favicon assets if you want a new visual identity. The favicon currently points to `/favicon.ico` ([index.html](index.html)); replace that file too if needed
- [ ] Body content: visible text in [src/pages/Index.tsx](src/pages/Index.tsx) and the location/team/store-hours components still contains the old brand wording and Greek copy (location names, headings, descriptions). Search the codebase for the old brand strings and replace with your own copy
- [ ] Internal route paths in [src/App.tsx](src/App.tsx) (e.g. `/kings-barbershop-panorama`) — rename to your own slugs and update any `<Link to=...>` references that match
- [ ] Booking URLs hardcoded in [src/components/ContactForm.tsx](src/components/ContactForm.tsx) (Fresha) — replace with your own booking provider links
- [ ] Verify Google Search Console once the new domain is live (drop the verification HTML file into `public/` and add a matching rewrite to [vercel.json](vercel.json) if needed)

## Image assets

All images live under [public/uploads/](public/uploads/) and are referenced in code as `/uploads/<filename>`. Replace files in place (keep the same filenames) or rename + update the references — the source is the single source of truth.

## Notes

- The dev server runs on **port 8080** (configured in [vite.config.ts](vite.config.ts)).
- Path alias `@/*` is mapped to `src/*` (see [tsconfig.json](tsconfig.json)).
- shadcn-ui components are in [src/components/ui/](src/components/ui/) and configured via [components.json](components.json).
