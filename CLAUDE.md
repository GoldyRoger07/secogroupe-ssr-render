# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start              # dev server (ng serve)
npm run build          # production build → dist/secogroupe-ssr/
npm run watch          # dev build with watch mode
npm test               # run tests with vitest via ng test
npm run serve:ssr:secogroupe-ssr  # run the built SSR server (Express)
```

Prettier is configured (printWidth 100, singleQuote, angular HTML parser). There is no explicit lint script; the Angular build catches TypeScript errors.

## Architecture

Angular 21 SSR app for SECO GROUPE (facility management company). Uses Express 5 for the server layer and is deployed on Netlify (`@netlify/angular-runtime`).

### Bootstrap & Config

- `src/main.ts` — browser bootstrap
- `src/main.server.ts` — server bootstrap
- `src/server.ts` — Express entry point
- `src/app/app.config.ts` — app-level providers: router (with scroll restoration), PrimeNG, ngx-translate, HttpClient, client hydration with event replay
- `src/app/app.config.server.ts` — merges server rendering config on top of `appConfig`
- `src/app/app.routes.server.ts` — render modes: nearly all routes use `RenderMode.Client` (CSR); only `/apply-now` is `Prerender`

### Routing

All routes are lazy-loaded via `loadComponent`. Active routes in `src/app/app.routes.ts`:
- `/` → home, `/about-us`, `/services`, `/contact`, `/request-a-quote`, `/apply-now`

Pages that exist in `src/app/pages/` but are **not yet wired to routes** include: careers, faq, blog, terms-and-conditions, locations (usa/canada/bahamas/brazil/haiti), industries (hospitality/commercial/healthcare/residential), cookie-policy, notfound, privacy-policy, hiring, and `services-country` (which takes a `:pays` param and is navigated to from the home page map).

### Key Service

`FilialeService` (`src/app/services/filiale-service.ts`) is the single source of truth for all subsidiary data. It holds:
- `filiales[]` — all company subsidiaries (Seco Security, Optimal Staffing, etc.)
- `filialesPays[]` — maps subsidiaries to countries (usa, canada, bahamas, haiti, bresil)
- Methods: `getFilialesByPays(pays)`, `getFilialeByName(name)`, `getFilialeByNameAndPays(name, pays)`

### Components

Shared components live in `src/app/components/`:
- `Navbar` (selector `v4-navbar`) — accepts `[isTransparent]` and `[textWhite]` inputs
- `Footer`, `Container`
- `V4Slider` — crossfade image slider using Angular signals and `setInterval`
- `InfiniteHorizontalScroll` — CSS marquee for client/partner logos
- `V4Home` — home hero section

### Styling

- **TailwindCSS 4** (PostCSS-based, imported via `@import "tailwindcss"` in `src/styles.css`)
- **PrimeNG 21** with a custom Aura preset defined in `src/app/mypreset.ts` — primary color is mapped to yellow
- **CSS custom properties** defined in `:root` (in `src/styles.css`):
  - `--my-prim-bg: #0d6efd` (blue), `--my-sec-bg: #fbad19` (gold)
  - `--v4-prim-bg: #faaf3b`, `--v4-sec-bg: #0c73ba`
- **Self-hosted fonts** in `public/fonts/`: Josefin Sans and Raleway
- **Scroll animation classes**: `.fade-up`, `.fade-right`, `.fade-left`, `.blur-up` become visible when `.active` is added. The `animateOnScroll` directive (`src/app/directives/animate-on-scroll.ts`) adds `.active` via `IntersectionObserver`. Always guard `IntersectionObserver` / DOM access with `isPlatformBrowser(platformId)` for SSR compatibility.

### i18n

Translation files in `public/i18n/` (`en.json`, `fr.json`). Loaded at runtime via `ngx-translate` HTTP loader with prefix `/i18n/` and suffix `.json`. Default and fallback language is `'en'`. Use `TranslatePipe` in templates and inject `TranslateService` for programmatic access.

### Models

- `Filiale` — subsidiary entity (id, name, services, images, logos)
- `FilialeDetails` — text content (title, description, slogan) for a filiale section
- `FilialePays` — maps a `filialeName` to a `pays` (country string)
- `CardDetails` / `CardDetailsInfos` — generic card content
- `SelectType` — `{ name, code }` for dropdown options
