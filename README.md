# Os' Lab — Decision Intelligence Platform

Minimalist, Palantir-style marketing site scaffold (React + TS + Vite + Tailwind).

## Run locally

```bash
npm install
npm run dev
```

Vite will print the local URL (default: http://127.0.0.1:5173).

## Structure

Pages (routing):

- `/` Home
- `/platform` Platform
- `/capabilities` Capabilities
- `/systems` Systems
- `/technology` Technology
- `/use-cases` Use Cases
- `/about` About

## i18n (EN/JP)

- Default: **English**
- Toggle: **EN / JP** in the top navigation
- Dictionary-based copy lives here:

`src/content/site.ts`

The i18n provider is here:

`src/i18n/I18nProvider.tsx`

## Components

- `src/components/TopNav.tsx` (nav + language toggle)
- `src/components/PageShell.tsx` (layout)
- `src/components/Reveal.tsx` (subtle scroll fade-in)

