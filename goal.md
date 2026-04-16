# goal.md — Zerah Lab Website

## 1) One-liner

A highly immersive, futuristic, Apple-styled portfolio website for Zerah Lab strictly adhering to a 60% white / 40% black theme, showcasing expertise in AI, Automation, and Agentic AI.

## 2) User Intent

### Target user(s)

- Enterprise clients looking for top-tier AI and Automation solutions.
- Tech leaders seeking Agentic AI integration.

### Core problem

- Zerah Lab needs a digital presence that perfectly reflects the high-tech, advanced nature of their services. A standard corporate website doesn't convey the "cutting-edge" feeling of Agentic AI.

### Desired outcome

- The user is wowed by smooth, cinematic scrolling and transitions (GSAP/Anime.js) and perceives Zerah Lab as a premium, elite technology partner.

## 3) Scope

### In-scope (must-haves)

- Futuristic, premium minimalist design (60% White, 40% Black).
- Advanced GSAP and Anime.js transition effects.
- Sections for: Hero, About, AI & Automation Services, Products (horizontal scroll), Agentic AI Solutions, Research (Gucci-style editorial list), Contact.
- Integration of the provided company logo (`ZerahhlogoFinal.png`).
- Fully responsive on mobile and desktop.

### Out-of-scope (non-goals)

- Backend databases or complex user authentication.
- E-commerce functionality.
- Blogs or heavy CMS platforms.

## 4) Success Criteria (measurable/testable)

- Functional: Site loads offline/locally via Vite dev server without console errors. Animations trigger reliably on scroll.
- Quality: Zero jank (60fps scrolling) on standard devices. Absolute adherence to the monochrome (black/white) futuristic theme.
- Cost/efficiency: Hosted as a static site (zero server cost).

## 5) Constraints & Assumptions

### Constraints

- Platform: Modern web browsers (Chrome, Safari, Firefox, Edge).
- Theme: Strictly 60% White, 40% Black.
- Stack: React, Vite, Tailwind, GSAP, Anime.js.

### Assumptions (explicit)

- The provided logo has a transparent background and works on dark/light surfaces, or we can adapt the background around it.
- A single-page application (SPA) scroll-based narrative is the preferred "storytelling" format.

## 6) Key User Journeys

1. User lands on Hero -> Sees logo animate intensely with GSAP -> Scrolls down.
2. User proceeds through Services -> ScrollTrigger pins sections and text fades/slides in.
3. User reaches Contact -> CTA is clear and minimalist.

## 7) Risks & Open Questions

### Risks

- Overusing animations can cause performance issues (jank) on low-end mobile devices.
- Keeping strictly to 60/40 Black/White might limit visual hierarchy if not executed with excellent typography.

### Open questions

- Are there specific copy/text paragraphs the user wants for the Services, or should we use high-quality placeholder text to be replaced later?
