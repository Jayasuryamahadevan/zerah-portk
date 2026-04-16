# architecture.md — Zerah Lab Website

## 1) Overview (end-to-end in plain English)

The website is a static Single Page Application built with React and Vite. When a user visits the page, React renders the component tree, and GSAP (GreenSock) takes over to animate DOM elements based on scroll position and timeline events, delivering an immersive Apple-like storytelling experience.

## 2) Architecture Drivers

- Performance: Must achieve 60fps animations.
- Reliability: Static hosting ensures 99.99% uptime.
- Cost: Near-zero (static hosting like Vercel/Netlify/GitHub Pages).
- Scale: Can handle unlimited traffic as a CDN-cached static site.

## 3) Tech Stack

### Frontend

- React 18 — For modular component architecture.
- Vite — For rapid development and optimized bundling.
- Tailwind CSS v4 — For styling layout within strict B/W constraints without custom CSS bloat.
- GSAP & Anime.js — For advanced, performant animation choreography.
- Lucide React — For minimalist SVG icons.

### Infra / DevOps

- Hosting: Static CDN (TBD by user, e.g., Netlify/Vercel).

## 4) Components & Responsibilities

- Layout: Wraps pages, provides global navigation and footer.
- Hero Component: Initial viewport, heavy intro animations, logo display.
- ScrollStory Component: Manages pinning and horizontal/vertical scroll translation of content (services).
- Products Component: Manages horizontal scroll timeline (Apple style presentation).
- Research Component: Manages high-end list view with butter-smooth hover transitions (Gucci styling).
- Animation Providers/Hooks: Custom React hooks initializing GSAP ScrollTriggers to isolate animation logic from markup.

## 6) Security & Privacy

- Zero backend, no PII collected actively (besides generic email `mailto:` or static forms if added). No database threats.

## 7) Reliability & Observability

- Minimal dependencies limit points of failure.
- Testing involves local Dev viewing and Lighthouse performance audits.
