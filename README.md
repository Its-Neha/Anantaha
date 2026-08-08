# Anantaha — landing page

Next.js implementation of `mockup.png`. Infinite by purpose.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4

Fonts are self-hosted through `next/font/google`:

| Role | Family | Used for |
| --- | --- | --- |
| Display | Bodoni Moda | Wordmark, headlines, figures — high-contrast Didone |
| Sans | Jost | Body copy, wide-tracked uppercase labels |
| Mono | IBM Plex Mono | The process code panel |

## Where things live

```
app/
  globals.css          design tokens (@theme) + .eyebrow / .display / .copy
  layout.tsx           fonts, metadata
  page.tsx             section composition
components/
  site-header.tsx      floating nav pill (client — mobile disclosure)
  site-footer.tsx
  ui.tsx               Container, eyebrows, buttons
  wordmark.tsx
  capability-icons.tsx gold line-art marks (inline SVG)
  code-panel.tsx       hand-tinted code block
  sections/            hero · stats · capabilities · process · cta
lib/content.ts         all marketing copy
public/                sculpture artwork
```

Every string on the page comes from [lib/content.ts](lib/content.ts) — edit copy there,
not in the section components.

## Design tokens

Defined once in [app/globals.css](app/globals.css) as Tailwind v4 `@theme` variables, so
they are available as normal utilities (`bg-cream`, `text-ink`, `border-gold-soft/35`).

| Token | Value | Role |
| --- | --- | --- |
| `cream` / `cream-deep` | `#fcf5eb` / `#f9f1e3` | Warm ivory ground |
| `ink` / `ink-deep` | `#2e1b57` / `#261451` | Royal indigo, the primary ink |
| `gold` / `gold-soft` / `gold-faint` | `#b0873a` / `#cb9e52` / `#e4c49b` | Accent only — emphasis words, hairlines, iconography |
| `body` / `label` | `#4b4340` / `#7a6f63` | Copy and metadata |

Sections are separated by gold hairlines rather than boxes or borders, and layouts stay
asymmetric with 40–60% negative space.

## Artwork

`public/anantaha-logo.png` is the brand logo (`logo_transparent.png`) trimmed to its alpha
bounds — 1017×161, indigo Didone caps threaded by the gold infinity ribbon. It is placed by
height only (`h-6 sm:h-7` in the nav, `h-8 sm:h-9` in the footer) so the ratio is never
distorted. `app/icon.png` and `app/favicon.ico` are the logo's leading **A** on cream.

`public/hero-infinity.png` and `public/cta-infinity.png` were extracted from `mockup.png`,
so they carry the mockup's own cream ground, leaf shadows and gold circuit traces. They are
composited with feathered `mask-image` gradients so that ground reads as continuous with the
page. Replace them with higher-resolution renders of the same framing and nothing else needs
to change.
