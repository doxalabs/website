---
title: 'Design System Guide'
excerpt: 'A complete, token-driven design system for Doxa products: foundations, components, accessibility, and governance.'
---

## Purpose

This guide defines how we design and build interfaces at Doxa so products feel coherent, accessible, and maintainable as the team scales.

The design system is not a UI kit alone. It is:

- Visual language (color, type, spacing, motion, shape)
- Interaction standards (states, feedback, navigation patterns)
- Implementation constraints (tokens, utility usage, component API)
- Governance (ownership, versioning, testing, rollout)

## Stack Baseline

- Framework: SvelteKit
- Styling: Tailwind CSS v4 (`@theme` variables as source of truth)
- Icons: Iconify plugin, Lucide for product UI, MDI only for brand/service marks
- Typography: self-hosted font assets by default
- Content docs: mdsvex pages in the same repo as code

## Core Principles

1. Token First
Every visual decision maps to a token before it maps to a class.

2. Utility Constrained
Tailwind utilities are our implementation detail, not a license for one-off styling.

3. Accessibility By Default
Keyboard, focus, contrast, and reduced motion are default requirements.

4. Composition Over Special Cases
Use composable primitives and shared patterns before creating bespoke components.

5. Predictable Evolution
Deprecate intentionally, migrate with guidance, and keep change logs human-readable.

## Token Architecture

The token hierarchy follows four levels:

1. `primitive` tokens: raw values (`neutral-600`, `space-4`, `radius-md`)
2. `semantic` tokens: role-based aliases (`text-default`, `surface-muted`, `border-strong`)
3. `component` tokens: mapped usage (`button-primary-bg`, `input-focus-ring`)
4. `context` tokens: scoped overrides (dark mode, campaign, partner brand)

Rules:

- New components consume semantic tokens, not primitive values directly.
- Product branding only overrides context tokens or a defined accent set.
- No hardcoded hex values in Svelte markup.
- No custom spacing values unless added to token scale first.

## Foundations

### Color

Color system has three groups:

- Brand: `clay`, `umber`, `sand`, `linen`, `parchment`, `rust`, `sage`, `stone-blue`, `ember`
- Neutrals: `neutral-50` to `neutral-950` for surface and text hierarchy
- Status: `success`, `warning`, `error`, `info` (project-level extension)

Usage policy:

- Body background uses warm-light surfaces (`parchment`/`neutral-50`)
- Body text uses `umber` or `neutral-800+`
- Accent usage should stay under 20% of viewport area per screen
- Status colors must pass contrast requirements against both light and dark containers

### Typography

Scale intent:

- Display: hero and page-level statements only
- Heading: section grouping and page structure
- Body: long-form readability target 65 to 80 characters line length
- Label/meta: controls, badges, hints

Standards:

- Default typeface: DM Sans
- Font loading: self-hosted with `font-display: swap`
- Minimum body size: `16px`
- Tight tracking only for large headings, not for paragraphs
- Recommended modular scale baseline: Major Third (`1.25`)
- Recommended prose line length: `65ch`
- Body weight defaults to `400`; headings/buttons generally use `600`

### Spacing and Layout

Spacing scale is 4-based with selected larger steps for sections.

- Component padding: use tokenized steps only
- Vertical rhythm: sections should maintain predictable top/bottom cadence
- Max content width: prose stays around `max-w-prose` to protect readability
- Grid breakpoints are tokenized and unchanged unless explicitly versioned

### Radius, Border, Shadow

- Radius tiers (`sm`, `md`, `lg`, `xl`) map to intent, not preference
- Borders are preferred over heavy shadows for surface separation
- Shadows are warm and subtle, reserved for elevation states (dropdown, modal, toast)

### Motion

- Duration: `150ms` to `200ms` for standard state change
- Easing: emphasize readability over flair
- Motion must communicate cause and effect (open/close/focus/feedback)
- Respect `prefers-reduced-motion` globally
- Avoid decorative gradients in core UI backgrounds; prefer clean, warm solids

## Component System

Each component spec should include anatomy, variants, sizes, states, accessibility, and anti-patterns.

### Buttons

- Variants: `primary`, `secondary`, `ghost`, `destructive`
- Sizes: `sm`, `md`, `lg`
- States: default, hover, focus-visible, active, disabled, loading
- Rules: primary is reserved for one dominant action per region
- Rules: disabled state changes affordance, not just color
- Rules: focus-visible ring must be visible at 200% zoom

### Inputs and Forms

- Every input needs an associated label
- Helper text explains format before errors happen
- Error text is specific, not generic
- Required indicator must be text+visual, not color-only
- Validation timing: immediate for format constraints
- Validation timing: on submit for completeness

### Cards

- Use cards for grouped metadata and actions, not as generic containers for everything
- Card hierarchy: title
- Card hierarchy: optional description
- Card hierarchy: meta row
- Card hierarchy: action region
- Avoid mixed card paddings in a single grid

### Navigation

- Active state must be obvious in desktop and mobile
- Current location should be visible without hover
- Keyboard nav should preserve logical order across collapsed menus

### Feedback Components

- Toasts are for non-blocking updates
- Banners are for persistent, context-wide alerts
- Modals are for high-friction confirmation or multi-step critical tasks
- Never stack modal over modal

## Accessibility Standards

This is a release gate, not a suggestion.

- Contrast: normal text meets WCAG AA minimum
- Contrast: UI controls and focus indicators meet visible contrast requirements
- Interaction: all interactive controls are reachable by keyboard
- Interaction: no keyboard trap
- Interaction: focus order follows reading order
- Semantics: native elements are preferred (`button`, `input`, `nav`, `main`, `table`)
- Semantics: ARIA is added only when native semantics are insufficient
- Motion: reduced-motion behavior is provided for animations and transitions

## Theming and Multi-Brand Strategy

Primary model: one canonical system, lightweight brand overlays.

- Canonical tokens stay stable across products
- Brand packages only override accent and a constrained semantic surface layer
- Runtime theming via CSS variables is preferred over separate compiled builds
- Campaign or marketing pages that diverge from system must be isolated and documented

## Brand Notes (From Doxa Brand Guide)

These are brand-level constraints that the component system should enforce.

### Source of Truth Boundary

- Canonical brand foundations come from `doxa-brand-guide.md` sections `3` through `7`
- Section `7.1` and everything after it are project implementation details
- Those implementation sections can be reused as defaults, but this design system remains the governing standard for Doxa project UI decisions

### Visual Character

- "Let it breathe": generous whitespace is the default
- "Warm, not sterile": warm neutrals and softened geometry
- "Quiet confidence": subtle interactions, no performative motion
- "Craft in the details": consistent iconography and polished loading/focus states

### Logo and Marks

- Primary logo is a typographic wordmark (`doxa labs` / `doxalabs`)
- Use lowercase treatment for the wordmark
- Keep icons out of the wordmark itself
- Monogram (`d`/`dl`) is for compact contexts (favicon, avatar, social)
- Preserve clear space around logo equal to the wordmark "d" height

### Page Structure Defaults

- Standard page max width: `1200px` (`75rem`)
- Standard prose width: `65ch`
- Side padding target: `1.5rem` mobile, `3rem` desktop
- Section spacing target: `6rem` mobile, `8rem` desktop
- Home page composition baseline:
- Hero (single clear CTA)
- Featured work (3-4 projects)
- Capabilities/value proposition
- Values/philosophy
- Footer

### Social and Asset Standards

- Keep favicon and Open Graph assets current with current wordmark/monogram
- Preferred OG composition: minimal hierarchy, no busy patterns
- Social card baseline: dark umber background, linen text, clay accent

### Non-Negotiables

- No pure black (`#000`) or pure white (`#FFF`) in default surfaces
- No sharp corners (`0px`) in primary product UI
- No mixing icon families in one interface without a documented reason
- No one-off visual styling that bypasses token governance

## Implementation Rules (Tailwind + Svelte)

1. Tokens live in `@theme` in `src/routes/layout.css`.
2. Utility usage in components must map to tokenized values.
3. Repeated utility groups should become component classes or primitives.
4. Class composition should remain readable; avoid utility soup.
5. New reusable UI should be added as a documented shared component.

Example token mapping pattern:

```css
@theme {
  --color-text-default: var(--color-umber);
  --color-surface-default: var(--color-parchment);
  --color-border-default: var(--color-neutral-200);
}
```

Example component policy:

```svelte
<button
  class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium
  bg-clay text-white hover:bg-clay-dark focus-visible:outline focus-visible:outline-2
  focus-visible:outline-clay disabled:opacity-50 disabled:pointer-events-none"
>
  Save
</button>
```

## Governance and Ownership

### Ownership Model

- Design System Owners: approve token, primitive, and pattern changes
- Product Teams: implement within constraints and propose improvements
- Reviewers: block one-off deviations without documented exception

### Change Process

1. Submit proposal with rationale, impacted components, migration scope
2. Validate accessibility and regression risk
3. Approve with version tag (`major`, `minor`, `patch`)
4. Publish migration notes and code examples

### Versioning

- `major`: breaking token/component API changes
- `minor`: additive variants, new components, non-breaking token additions
- `patch`: bug fixes and documentation clarifications

## Testing and Quality Gates

Minimum release checks:

- Lint + type checks pass
- Visual regression snapshots for changed components
- Accessibility checks for key interaction flows
- Mobile + desktop validation for layout and interaction
- Dark-mode or brand-override sanity checks where applicable

## Documentation Requirements

Every component page should include:

- Purpose and when to use
- Anatomy diagram or slot map
- Variant matrix
- State behavior
- Accessibility notes
- Do/Do not examples
- Migration notes (if updated)

## Migration Playbook

For teams moving from ad hoc CSS or legacy component styles:

1. Audit top 20 reused patterns and map to canonical components
2. Map legacy values to tokens (color, space, radius, type)
3. Migrate page by page with dual-run period for high-risk surfaces
4. Remove deprecated utilities only after usage reaches zero

## Anti-Patterns

- Direct hex values in component markup
- Multiple primary actions in the same action group
- Inconsistent spacing between sibling components
- Decorative motion without functional meaning
- Component APIs that expose purely visual implementation details

## My Practical View

The most common failure mode is treating Tailwind classes as the design system. They are only the transport layer. The actual system is token governance, interaction standards, and disciplined component APIs.

For Doxa specifically:

- Keep the warm, editorial tone as a stable signature
- Be strict on token usage in product UI
- Allow controlled experimentation in marketing contexts
- Invest in migration notes, not just release notes

That balance keeps the interface distinctive while still letting teams ship quickly.
