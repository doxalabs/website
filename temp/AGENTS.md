# Agent Commands & Guidelines

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check and Svelte validation

## Architecture
- **Framework**: SvelteKit 2.x with Svelte 5, TypeScript, static adapter
- **Styling**: Tailwind CSS v4 with custom theme (gold/beige/charcoal/offwhite/brown/grayshadow)
- **Structure**: Single-page site with hero/about/projects/learning/community sections
- **Data**: Static arrays in `$lib/index.ts` (no database)

## Code Style
- **Types**: Strict TypeScript, no implicit any
- **Components**: `<script lang="ts">` blocks, standard SvelteKit patterns
- **Typography**: Serif headings, sans-serif body, monospace code
- **Naming**: CamelCase for components, kebab-case for files
- **Imports**: Absolute paths with `$lib/` alias
- **Layout**: Mobile-first responsive design with Tailwind classes
