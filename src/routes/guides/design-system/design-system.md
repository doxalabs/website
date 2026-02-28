---
title: 'Design System Guide'
excerpt: "Implementation standards and do/don't rules for building Doxa projects consistently."
---

## Stack Baseline

- Framework: SvelteKit.
- Styling: Tailwind CSS v4.
- Icons: Iconify plugin with Lucide and MDI icon sets.
- Typography: self-hosted fonts whenever possible.

## Do

- Use local `@font-face` or bundled font files before external font CDNs.
- Keep design tokens in Tailwind v4 `@theme` variables.
- Prefer Lucide for UI icons and MDI for brand/service icons.
- Use warm neutrals and the Doxa palette for all core surfaces.
- Keep spacing generous and typography readable.
- Keep transitions subtle (`150ms` to `200ms`) and purpose-driven.
- Ship accessible states: visible focus, semantic structure, strong contrast.
- Document project-specific deviations from this baseline in the repo.

## Don't

- Do not use Google Fonts by default if self-hosting is feasible.
- Do not mix icon systems without a documented reason.
- Do not introduce one-off colors outside the token system.
- Do not use pure black surfaces for default themes.
- Do not rely on heavy animation or novelty effects for core UX.
- Do not create custom component styles that bypass shared tokens.
- Do not skip mobile layout validation before shipping.

## Component Behavior

- Buttons: clear primary/secondary variants with consistent radius and spacing.
- Cards: warm border, subtle shadow, concise metadata, predictable padding.
- Forms: explicit labels, input help text where useful, and visible error states.
- Navigation: active state should be obvious and consistent across desktop/mobile.

## Change Policy

When a project needs exceptions, keep the foundation and document what changed, why it changed, and where the override lives.
