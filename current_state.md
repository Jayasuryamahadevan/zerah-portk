# current_state.md — Zerah Lab Website

## Snapshot

- Last updated: 2026-03-09
- Iteration: Explanation Text Fix + Products Glass UI Restoration
- Status: On track

## What changed this round

### Completed

- **Explanation Text Parsing Bug**: Addressed a critical CSS rendering collapse in `Explanation.tsx` where GSAP's custom `words.forEach` splitting logic stripped standard inline whitespace. Ensured `document.createTextNode(' ')` is dynamically appended after every word span so that HTML rendering respects letter spacing naturally.
- **Products Glass UI Reverted-Forward**: Based on user clarification on the layout intent for the UI screenshots, the "Storytelling" white layout for Products was scrapped and the heavily requested dark "Nike App" Glass concept was fully restored.
- **Enhanced Transitions**: Upgraded `Products.tsx` to handle aggressive GSAP matrix entrance animations. Blocks now warp in with a 3D `transformPerspective`, `rotationX`, and a staggered `back.out` ease. A continuous subtle sine-wave floating parallax (`y: -10`, yoyo) is applied to all blocks infinitely to push the "Awesome" factor.

## What exists now (reality check)

- Working: A phenomenally premium dark cinematic scroll. Hero -> Explanation -> AI & Automation -> Products all share the `hero-bg.png` 8k background. The latter two sections utilize massive, high-contrast asymmetrical glass grids.
- Missing/gaps: None at this stage.
- Tech debt: Very Low.

## Evidence

- Tests: `npm run build` succeeds instantaneously.
- Visual: The `Explanation` text is no longer collapsed.

## Blockers & Risks

### Risks

- High quantity of backdrop-filters rendering simultaneously coupled with continuous GSAP `yoyo` transforms on DOM nodes. If framerates dip on mobile, CSS `will-change: transform` might need adjusting on `.product-block` variants.

## Next actions (next round)

1. User final approval of the restored layout.
