# R & R Rebuilders

Marketing site for R & R Rebuilders, an owner-run roofing and home repairs business.

Built with **Next.js 16 (App Router)**, React 19, TypeScript and Tailwind CSS 4. Every route is statically
prerendered, so it deploys to Vercel with zero configuration.

## Getting started

Requires Node.js 22.13+ (Vercel defaults to Node 24).

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # lint + typecheck + production build (run before every deploy)
npm start          # serve the production build
```

## Deploying to Vercel

1. Push the repository to GitHub/GitLab/Bitbucket and import it in Vercel, or run `npx vercel` from this folder.
2. Framework preset: **Next.js** (auto-detected; `vercel.json` pins `npm ci` as the install command).
3. Optional: set `NEXT_PUBLIC_SITE_URL` to the custom domain (e.g. `https://www.rrrebuilders.com`). Without it,
   the canonical URL falls back to Vercel's production domain.

Search indexing is **on for the production deployment only** (`VERCEL_ENV=production`). Preview deployments and
local builds send `noindex` and a disallow-all `robots.txt`.

## Project structure

```
app/
  layout.tsx            Root layout, fonts, metadata, Organization JSON-LD
  page.tsx              Home
  services/             Services index + [slug] detail pages (SSG)
  about/ contact/       About and contact pages
  privacy/ terms/       Legal pages
  not-found.tsx         404 page
  error.tsx             Error boundary with retry + call fallback
  robots.ts, sitemap.ts, manifest.ts
  icon.svg, apple-icon.tsx   Favicon and generated Apple touch icon
  globals.css           Design tokens (Tailwind @theme) and a few global styles
components/site/        Header, footer, sections, enquiry form, primitives
content/
  site.ts               Business details, navigation, value props, process steps, FAQs
  services.ts           Service copy and imagery
lib/
  env.ts                Site URL + indexing rules
  ui.ts                 Button style helper
public/images/          Photography
```

## Editing content

- Phone, email, navigation, FAQs: `content/site.ts`
- Service copy, bullet points and photos: `content/services.ts`
- Colors, fonts, motion: `app/globals.css` (`@theme` block)

## Design system

Concept: an architect's drawing set. Dirty-white ("bone") paper printed in forest-green ink, hairline rules, sharp
corners and a 12-column editorial grid. Key facts are set in a **title block** (`TitleBlock` in
`components/site/primitives.tsx`), the bordered info grid from the corner of a construction drawing.

Type is one family, Archivo, driven by its variable width axis: condensed for headlines (`font-display`), expanded
for the wordmark (`font-wide`), regular for body. IBM Plex Mono sets the small spec labels (`mono-label`). Both are
self-hosted via `next/font`.

Motion is deliberate and minimal: headlines rise from behind a mask, photography settles from a slight zoom, links
retract their underline on hover. All of it is disabled under `prefers-reduced-motion`.

| Token        | Hex       | Use                               |
| ------------ | --------- | --------------------------------- |
| `bone-100`   | `#F2EFE7` | Page background                   |
| `bone-50`    | `#FAF8F3` | Cards and surfaces                |
| `bone-300`   | `#D8D1C1` | Borders                           |
| `forest-950` | `#0F1D14` | Headings, body text, footer       |
| `forest-800` | `#233F2A` | Primary buttons, brand panel      |
| `forest-600` | `#3D663F` | Accent text and links             |
| `forest-200` | `#BFD3AC` | Sage accents on dark green        |
| `forest-100` | `#DCE7D1` | Icon chips, active nav            |
| `muted`      | `#55645A` | Secondary text (5.4:1 on bone)    |

## Enquiries

The contact form needs no backend or API keys. It validates input, builds an email draft in the browser, and offers
"Open in email app" (mailto) and "Copy message". Nothing is sent or stored by the site. Links from a service page
(`/contact?service=roofing`) preselect the service.

## Notes

- Photography is illustrative stock, not a portfolio of completed work. Replace `public/images/` with real project
  photos when available.
- Security headers (CSP, HSTS, etc.) are set in `next.config.ts`. Preview deployments also allow the Vercel toolbar.
