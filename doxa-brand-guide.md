# Doxa Labs — Brand & Developer Guide

---

## 1. The Name

**Doxa** (δόξα) — Ancient Greek for **"glory, radiance, splendor."**

Used extensively in the New Testament to describe divine brilliance and the weightiness of something excellent. The word carries a sense of inherent worth that shines outward — not loud or boastful, but undeniably present.

**Pronunciation:** DOK-sah (rhymes with "moxa")

**Tagline options:**

- "Built with intention."
- "Crafted, not assembled."
- "Glory in the details."
- "The work speaks."

**Origin story (for About pages, READMEs, etc.):**

> Doxa takes its name from the Greek word for "glory" — the kind found not in noise, but in craft. Inspired by the artisans of Exodus 31, who were filled with wisdom, understanding, and skill to build something worthy, Doxa is a collective of builders who believe great software is made with care, shared generously, and refined relentlessly.

---

## 1.1 GitHub Handle — Naming Decision

> **Status: DECIDED** — `doxalabs` is the chosen GitHub handle.
> `doxa` was taken on GitHub. After evaluating three candidates (`doxahq`, `doxadev`, `doxalabs`), `doxalabs` was selected. The reasoning is documented below for future reference.

### Context

The brand name is **Doxa**. That doesn't change — it's the name on the website, in conversation, on business cards. The GitHub org handle is a technical constraint, not the brand itself. Many well-known orgs have handles that differ from their brand name (Vercel was `vercel`, but their CLI package is `vercel`, their old GitHub was `zeit`). The goal is a handle that:

- Is easy to type in a URL bar or `git clone` command
- Doesn't look like a typo or a squatter workaround
- Feels intentional, not like a compromise
- Pairs well with a matching domain

---

### Option 1: `doxahq`

**The argument for:**

"HQ" stands for headquarters — it positions the GitHub org as the home base, the central hub where everything lives. This is the pattern used by established orgs that want to signal "this is where you come to find us."

- **Precedent:** `temporalhq` (Temporal), `redpaborern` → many serious infra orgs use the HQ suffix. It reads as professional and org-like, not hacky.
- **In conversation:** "Our code lives at github.com/doxahq" — sounds natural, like you're pointing someone to your headquarters.
- **In a clone command:** `git clone github.com/doxahq/some-tool` — clean, no confusion.
- **Domain pairing:** `doxahq.dev` or `doxahq.com` — both work. But you could also use `doxa.dev` for the website (if the domain is available) and `doxahq` only on GitHub. The handle and domain don't have to match exactly.
- **Length:** 6 characters. Short enough.
- **Tone:** Professional, grounded, says "we're an organization." Fits the "quiet confidence" brand personality.

**The argument against:**

The "HQ" suffix is safe but not distinctive. It doesn't add meaning — it's purely functional. Some might see it as the "we couldn't get the real name" fallback. It also slightly dilutes the simplicity of "doxa" by tacking on two letters.

**Best if:** You want the GitHub handle to feel like an established organization from day one. No ambiguity, no explaining needed.

---

### Option 2: `doxadev`

**The argument for:**

"Dev" signals exactly what you are — developers who build things. For a collective that makes tools, platforms, and open-source projects, having "dev" in the name is a declaration of identity, not just a suffix.

- **Precedent:** `sveltejs` puts "js" in their handle to signal the ecosystem. `doxadev` does the same — it says "this is Doxa, and we're developers."
- **In conversation:** "Check out doxadev on GitHub" — immediately tells people what to expect before they even visit.
- **In a clone command:** `git clone github.com/doxadev/some-tool` — reads well, the `dev` suffix feels natural in a terminal context.
- **Domain pairing:** `doxadev.com` or `doxadev.dev` (though `doxadev.dev` has a redundant "dev" — `doxadev.com` or `.org` is better). Alternatively, use a separate domain like `doxa.dev` for the website.
- **Length:** 7 characters. Still short.
- **Tone:** Builder energy. Approachable. Says "we make things" without being pretentious. Aligns with the brand voice of "senior dev talking to a peer."

**The argument against:**

"Dev" suffixes are extremely common in the GitHub/tech space (`verceldev`, `stripedev`, etc.). It's clear but not unique. Also, if Doxa ever expands beyond pure development (design tools, educational content, community), the "dev" label could feel limiting.

**Best if:** You want the handle to immediately communicate "this is a developer collective" and you're confident the org will stay dev-focused.

---

### Option 3: `doxalabs`

**The argument for:**

"Labs" carries a specific energy — experimentation, exploration, building things that don't exist yet. It's the most ambitious of the three options. Labs implies a place where ideas are tested, prototypes are built, and new things emerge.

- **Precedent:** `hashicorp` started as HashiCorp Labs energy. `vercel` has a "labs" feel. Many respected dev orgs use "labs" to signal innovation — `oxidecomputer`, `astral-sh`, etc. even if not literally in the name, the vibe is there.
- **In conversation:** "We're Doxa Labs" — sounds like an entity that _creates_. It has weight. People lean in when they hear "labs" because it implies something interesting is happening.
- **In a clone command:** `git clone github.com/doxalabs/some-tool` — clean, professional.
- **Domain pairing:** `doxalabs.dev`, `doxalabs.com`, or `doxalabs.io` — all work well. "Labs" pairs naturally with any tech TLD.
- **Length:** 8 characters. Slightly longer but still clean.
- **Tone:** Ambitious, experimental, forward-looking. Fits the "part open-source workshop, part product studio, part learning community" identity described in this brand guide. A lab is exactly where artisans experiment before they ship.
- **Narrative fit:** Exodus 31 describes craftsmen who were filled with _wisdom, understanding, and knowledge_. A lab is where wisdom is applied, understanding is tested, and knowledge produces something real. It's not just building — it's building with intention and discovery.

**The argument against:**

"Labs" can sometimes feel like "we're not a real company yet, we're still experimenting." If you want Doxa to feel established and production-ready from the start, "labs" might undercut that. It also implies a certain informality that may not match the "refined" and "premium" brand tone.

**Best if:** You want the handle to reflect that Doxa is a place of creation and experimentation — where open-source tools are forged, tutorials are reimagined, and new ideas are constantly being explored.

---

### Head-to-Head Comparison

| Factor               | `doxahq`               | `doxadev`                | `doxalabs`                        |
| -------------------- | ---------------------- | ------------------------ | --------------------------------- |
| **Length**           | 6 chars                | 7 chars                  | 8 chars                           |
| **Clarity**          | "This is our HQ"       | "We're developers"       | "We experiment & build"           |
| **Tone**             | Professional, grounded | Builder, approachable    | Ambitious, creative               |
| **Uniqueness**       | Medium — HQ is common  | Low — dev is very common | High — labs feels distinctive     |
| **Future-proof**     | Yes — HQ is neutral    | Slightly limiting        | Yes — labs can encompass anything |
| **Domain options**   | doxahq.dev             | doxadev.com              | doxalabs.dev                      |
| **First impression** | "An organization"      | "A dev team"             | "A creative workshop"             |
| **Brand alignment**  | Quiet confidence       | Warm & approachable      | Refined + generous                |

---

### Deep Dive: `doxalabs` vs `doxahq`

After narrowing to two finalists, here is the detailed head-to-head that led to the final decision.

#### The Name Test

Say these out loud in real scenarios:

| Scenario                          | `doxalabs`                        | `doxahq`                        |
| --------------------------------- | --------------------------------- | ------------------------------- |
| Introducing yourself              | "We're Doxa Labs"                 | "We're Doxa HQ"                 |
| Telling someone where to find you | "It's on GitHub at doxalabs"      | "It's on GitHub at doxahq"      |
| In a README                       | `github.com/doxalabs/toolkit`     | `github.com/doxahq/toolkit`     |
| On a T-shirt                      | Works as a standalone name        | Feels like it needs context     |
| Someone Googling you              | "doxalabs" — specific, searchable | "doxahq" — specific, searchable |

**Verdict:** `doxalabs` works as a name _and_ a handle. `doxahq` only works as a handle — you'd never say "Welcome to Doxa HQ" on a landing page. You'd say "Welcome to Doxa." That slight disconnect matters.

#### What Each Name Communicates

**`doxalabs`** says: _"We're a workshop. Things are being built here. Come see what we're making."_

- Labs = creation, experimentation, output
- It answers "what do you do?" in the name itself
- People expect to find **projects, tools, experiments** when they visit
- It has an identity on its own — "Doxa Labs" is a complete name

**`doxahq`** says: _"This is our home base. The official place."_

- HQ = location, authority, centralization
- It answers "where are you?" not "what do you do?"
- People expect to find **an organization** when they visit, but no hint of what kind
- It's a pointer to Doxa, not an identity in itself — "Doxa HQ" isn't a name, it's a description

#### The Identity Question

> If someone only sees the GitHub handle and nothing else, what do they assume?

- `doxalabs` → "Some kind of dev shop or open-source collective that builds things." They're curious.
- `doxahq` → "The GitHub page for something called Doxa." They need more info.

`doxalabs` **pulls people in**. `doxahq` **points people somewhere else**.

#### Longevity

| Growth scenario                    | `doxalabs`                                | `doxahq`                                  |
| ---------------------------------- | ----------------------------------------- | ----------------------------------------- |
| You ship 20 open-source tools      | "Labs ships a lot" — fits perfectly       | "HQ has a lot of repos" — fine but flat   |
| You start a blog/learning platform | "Labs is sharing knowledge" — natural     | "HQ has a blog" — feels bolted on         |
| You launch a paid product          | "Doxa Labs built this product" — credible | "Doxa HQ has a product" — awkward         |
| You grow to 10+ contributors       | "Join Doxa Labs" — inviting               | "Join Doxa HQ" — sounds like an office    |
| You rebrand or pivot               | Labs adapts to anything                   | HQ stays neutral but also stays invisible |

#### The Honest Downsides

**`doxalabs` risks:**

- "Labs" can imply "not production-ready" to some people. Companies like Google famously ship "Labs" products that get killed. If you want to feel established from day one, this _could_ undercut that. Counter-argument: for an open-source collective, "labs" energy is a feature, not a bug.
- 8 characters vs 6. Minor, but it's there.

**`doxahq` risks:**

- It's forgettable. "HQ" is so common it becomes invisible — `anythingHQ` is a pattern people scroll past.
- It creates a two-name problem: the brand is "Doxa" but the handle is "doxahq." You'll always need to explain "our GitHub is doxahq" separately from the brand. With `doxalabs`, the handle _is_ a name.
- "HQ" implies a physical/corporate structure. For a small collective of builders, it can feel like wearing a suit to a hackathon.

#### The Domain Factor

| Handle     | Best domain pairings                  | Notes                                                                                                   |
| ---------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `doxalabs` | `doxalabs.dev`, `doxalabs.com`        | Handle and domain match perfectly — zero confusion                                                      |
| `doxahq`   | `doxa.dev`, `doxa.com` (if available) | You'd want the domain to be "doxa" not "doxahq" — which means your domain and GitHub handle don't match |

With `doxalabs`, everything is consistent: the GitHub org, the domain, the name people say. With `doxahq`, you'd likely want a different domain, which means people have to remember two things.

#### Final Verdict

|                                      | `doxalabs`                    | `doxahq`                             |
| ------------------------------------ | ----------------------------- | ------------------------------------ |
| **Is it a name or just a handle?**   | A name                        | Just a handle                        |
| **Does it tell people what you do?** | Yes — you build things        | No — it's a location                 |
| **Does it stand alone?**             | Yes — "Doxa Labs" is complete | No — it needs "Doxa" to have meaning |
| **Does it scale?**                   | To anything                   | Neutrally, but adds nothing          |
| **Is it memorable?**                 | More so                       | Less so                              |
| **Is it shorter?**                   | 8 chars                       | 6 chars                              |

> **`doxahq` is the safer choice. `doxalabs` is the better one.**
>
> The 2-character savings of `doxahq` doesn't outweigh the fact that `doxalabs` actually works as an identity. You'll never have to explain it — people hear "Doxa Labs" and already have a picture in their head.

### Decision: `doxalabs`

**Chosen handle:** `doxalabs`
**Display name:** Doxa Labs
**GitHub:** `github.com/doxalabs`
**Recommended domain:** `doxalabs.dev`

The name was chosen because it functions as a complete identity — not just a GitHub handle, but a name that stands alone, communicates what the org does, scales to any future direction, and ties back to the Exodus 31 origin of craftsmen working in a place of wisdom and skill. A lab is where artisans experiment before they ship.

---

## 2. Brand Identity

### Who Doxa Is

Doxa is a builder collective — part open-source workshop, part product studio, part learning community. We build developer tools and platforms, rebuild tutorials in modern frameworks, create products (free and paid), and share what we learn.

### Brand Personality

| Trait                | What it means                       | What it doesn't mean              |
| -------------------- | ----------------------------------- | --------------------------------- |
| **Intentional**      | Every decision is deliberate        | Not slow or overthought           |
| **Warm**             | Approachable, human, inviting       | Not casual or unserious           |
| **Quiet confidence** | The work speaks for itself          | Not loud, flashy, or performative |
| **Refined**          | Polished and considered             | Not pretentious or exclusive      |
| **Generous**         | Open-source first, knowledge shared | Not naive or unprofessional       |

### Brand Voice

- **Write like a senior dev talking to a peer.** Clear, direct, no filler.
- **Be warm, not corporate.** "We built this because we needed it" > "Our solution leverages..."
- **Show, don't boast.** Ship the work. Let people discover the quality.
- **Short sentences. Simple words.** If a word has a simpler synonym, use it.

**Examples:**

```
Good: "Doxa is a collective of builders. We make tools, share code, and learn in public."
Bad:  "Doxa is a cutting-edge innovation hub leveraging modern paradigms to deliver solutions."

Good: "This started as a weekend project. Now it handles 10k requests/sec."
Bad:  "Our enterprise-grade platform provides unparalleled scalability."
```

---

## 3. Color System

The palette is rooted in natural earth tones — clay, sand, warm stone. It communicates craftsmanship, warmth, and quiet sophistication without being cold or sterile.

### Primary Colors

| Name          | Hex       | RGB           | Usage                                                    |
| ------------- | --------- | ------------- | -------------------------------------------------------- |
| **Clay**      | `#B08968` | 176, 137, 104 | Primary brand color. Buttons, links, active states, logo |
| **Umber**     | `#3E2C20` | 62, 44, 32    | Dark backgrounds, headings, primary text on light        |
| **Sand**      | `#DDB892` | 221, 184, 146 | Secondary highlights, hover states, accent borders       |
| **Linen**     | `#F5EDE4` | 245, 237, 228 | Light backgrounds, cards, surface areas                  |
| **Parchment** | `#FDFAF6` | 253, 250, 246 | Page background (lightest)                               |

### Neutral Scale (Warm-toned)

Every gray has warmth. Never use pure gray (#808080) or pure black (#000000).

| Token         | Hex       | Usage                             |
| ------------- | --------- | --------------------------------- |
| `neutral-950` | `#1C1612` | Near-black. Dark mode backgrounds |
| `neutral-900` | `#2A231C` | Dark mode surfaces                |
| `neutral-800` | `#4A3F35` | Primary text (dark mode)          |
| `neutral-700` | `#5E5245` | Headings on light backgrounds     |
| `neutral-600` | `#7A6E62` | Body text                         |
| `neutral-500` | `#968A7E` | Secondary text, placeholders      |
| `neutral-400` | `#AEA498` | Muted text, icons                 |
| `neutral-300` | `#CCC4B8` | Borders, dividers                 |
| `neutral-200` | `#E0D8CE` | Subtle backgrounds, hover states  |
| `neutral-100` | `#F0ECE6` | Card backgrounds, surfaces        |
| `neutral-50`  | `#F9F6F2` | Page background alternative       |

### Accent Colors

Use sparingly. These support the core palette for functional states.

| Name           | Hex       | RGB           | Usage                                             |
| -------------- | --------- | ------------- | ------------------------------------------------- |
| **Rust**       | `#C07040` | 192, 112, 64  | CTAs, important actions, warm emphasis            |
| **Sage**       | `#7D8B75` | 125, 139, 117 | Success states, positive feedback, natural accent |
| **Stone Blue** | `#6B7B8D` | 107, 123, 141 | Info states, links in dark mode, cool contrast    |
| **Ember**      | `#B85C38` | 184, 92, 56   | Error states, destructive actions, warnings       |

### Dark Mode

Invert the surface hierarchy, keep the warmth. Never go full black.

| Element        | Light Mode            | Dark Mode             |
| -------------- | --------------------- | --------------------- |
| Page bg        | `#FDFAF6` Parchment   | `#1C1612` neutral-950 |
| Surface/Card   | `#F0ECE6` neutral-100 | `#2A231C` neutral-900 |
| Border         | `#CCC4B8` neutral-300 | `#4A3F35` neutral-800 |
| Primary text   | `#3E2C20` Umber       | `#F0ECE6` neutral-100 |
| Secondary text | `#7A6E62` neutral-600 | `#968A7E` neutral-500 |
| Brand accent   | `#B08968` Clay        | `#DDB892` Sand        |

---

## 4. Typography

### Font Recommendations

**Primary — Headings:**
Choose ONE:

- **Inter** — Clean, modern, widely used in dev tools. Free. Safe choice.
- **DM Sans** — Geometric, warm, slightly more personality. Free. Recommended.
- **Outfit** — Modern, friendly, excellent weight range. Free.
- **Satoshi** — Premium feel, geometric, distinctive. Free (Fontshare).

**Secondary — Body:**

- Use the same font as headings at regular weight, OR
- **Source Serif 4** — Warm serif for long-form content (blog posts, docs). Pairs beautifully with any of the above sans-serifs.

**Monospace — Code:**

- **JetBrains Mono** — Ligatures, excellent readability. Free.
- **Berkeley Mono** — Premium, beautiful. Paid.
- **Geist Mono** — Clean, modern. Free (Vercel).

### Type Scale

Use a modular scale based on `1rem = 16px` with a ratio of `1.25` (Major Third):

```
xs:   0.64rem  (10.24px) — Fine print, labels
sm:   0.8rem   (12.8px)  — Captions, metadata
base: 1rem     (16px)    — Body text
lg:   1.25rem  (20px)    — Large body, subheadings
xl:   1.563rem (25px)    — Section headings (h3)
2xl:  1.953rem (31.25px) — Page headings (h2)
3xl:  2.441rem (39px)    — Hero headings (h1)
4xl:  3.052rem (48.8px)  — Display text
```

### Font Weights

| Weight | Name     | Usage                                      |
| ------ | -------- | ------------------------------------------ |
| 400    | Regular  | Body text, descriptions                    |
| 500    | Medium   | Subheadings, emphasis                      |
| 600    | Semibold | Headings, buttons                          |
| 700    | Bold     | Hero text, strong emphasis (use sparingly) |

---

## 5. Design Principles

### 5.1 "Let it breathe"

Generous whitespace. Content should never feel cramped. When in doubt, add more space.

```
Spacing scale (rem):
0.25 | 0.5 | 0.75 | 1 | 1.5 | 2 | 3 | 4 | 6 | 8 | 12
```

- Section padding: `4rem–6rem` vertical minimum
- Card padding: `1.5rem–2rem`
- Paragraph max-width: `65ch` (optimal reading length)

### 5.2 "Warm, not sterile"

- Rounded corners: `0.5rem` (8px) for cards, `0.375rem` (6px) for buttons, `0.25rem` (4px) for inputs
- Never use sharp corners (0px radius)
- Never use overly round (999px pill shapes) except for tags/badges
- Shadows should be warm-tinted, not pure black:

```css
/* Light mode shadows */
--shadow-sm: 0 1px 2px rgba(62, 44, 32, 0.05);
--shadow-md: 0 4px 12px rgba(62, 44, 32, 0.08);
--shadow-lg: 0 12px 32px rgba(62, 44, 32, 0.12);
```

### 5.3 "Quiet confidence"

- No gratuitous animations. Transitions should be subtle (150–200ms ease).
- No gradients on backgrounds — use flat, solid colors.
- If something moves, it should have a reason (feedback, state change, drawing attention).
- Hover states: subtle shift (background lightens/darkens), not dramatic transforms.

### 5.4 "Craft in the details"

- Consistent icon style (recommend: Lucide, Phosphor, or Tabler icons — all stroke-based, clean)
- Favicon and Open Graph images should always be up to date
- Loading states should feel considered, not lazy (skeleton screens > spinners)
- Micro-interactions on form inputs: gentle border color transition on focus

---

## 6. Logo Direction

### Concept

The logo should be a **wordmark** ("doxa labs" or "doxalabs" styled as the logo). A monogram ("d" or "dl") can serve as a compact mark for favicons and avatars.

### Principles

- **Lowercase.** `doxa labs` not `DOXA LABS` or `Doxa Labs` in the wordmark. Lowercase feels approachable and modern.
- **Custom letterforms or a refined geometric sans.** The "o" and "a" can share visual rhythm. The space between "doxa" and "labs" should be intentional — either a clear word gap or a subtle weight/color shift.
- **No icons baked into the wordmark.** Keep it typographic. Let the name carry the weight.
- The monogram/icon mark can be a stylized `d` or `dl` in a square or rounded-square container.

### Logo Colors

| Context              | Color                    |
| -------------------- | ------------------------ |
| On light backgrounds | `#3E2C20` Umber          |
| On dark backgrounds  | `#F5EDE4` Linen          |
| Brand color variant  | `#B08968` Clay           |
| Monochrome/print     | Pure black or pure white |

### Clear Space

Maintain a minimum clear space around the logo equal to the height of the "d" in the wordmark on all sides.

---

## 7. Developer Implementation Guide

### 7.1 Tech Stack Recommendations

For a brand like Doxa Labs, these align with the values of craft, performance, and modern tooling:

| Layer      | Recommendation                     | Why                                        |
| ---------- | ---------------------------------- | ------------------------------------------ |
| Framework  | **SvelteKit**                      | Fast, minimal JS, great DX                 |
| Styling    | **Tailwind CSS v4**                | Utility-first, design tokens map perfectly |
| Fonts      | **Fontsource** or self-hosted      | No Google Fonts latency/privacy            |
| Icons      | **Lucide** or **MDI** for brands   | Clean, consistent, tree-shakeable          |
| Animation  | **CSS transitions only**           | No JS animation libraries needed           |
| Deployment | **Vercel** or **Cloudflare Pages** | Fast, free tier, global CDN                |

### 7.2 Tailwind CSS Configuration

```js
// tailwind.config.js (v4 uses CSS-based config, but this shows the token mapping)
export default {
	theme: {
		extend: {
			colors: {
				// Brand
				clay: '#B08968',
				umber: '#3E2C20',
				sand: '#DDB892',
				linen: '#F5EDE4',
				parchment: '#FDFAF6',
				rust: '#C07040',
				sage: '#7D8B75',
				'stone-blue': '#6B7B8D',
				ember: '#B85C38',

				// Warm neutrals (replace default grays)
				neutral: {
					50: '#F9F6F2',
					100: '#F0ECE6',
					200: '#E0D8CE',
					300: '#CCC4B8',
					400: '#AEA498',
					500: '#968A7E',
					600: '#7A6E62',
					700: '#5E5245',
					800: '#4A3F35',
					900: '#2A231C',
					950: '#1C1612'
				}
			},

			fontFamily: {
				sans: ['DM Sans', 'system-ui', 'sans-serif'],
				serif: ['Source Serif 4', 'Georgia', 'serif'],
				mono: ['JetBrains Mono', 'Fira Code', 'monospace']
			},

			borderRadius: {
				DEFAULT: '0.5rem',
				sm: '0.25rem',
				md: '0.375rem',
				lg: '0.5rem',
				xl: '0.75rem'
			},

			boxShadow: {
				sm: '0 1px 2px rgba(62, 44, 32, 0.05)',
				DEFAULT: '0 4px 12px rgba(62, 44, 32, 0.08)',
				lg: '0 12px 32px rgba(62, 44, 32, 0.12)'
			},

			maxWidth: {
				prose: '65ch'
			}
		}
	}
};
```

### 7.3 Tailwind CSS v4 (CSS-based config)

```css
/* app.css */
@import 'tailwindcss';

@theme {
	/* Brand Colors */
	--color-clay: #b08968;
	--color-umber: #3e2c20;
	--color-sand: #ddb892;
	--color-linen: #f5ede4;
	--color-parchment: #fdfaf6;
	--color-rust: #c07040;
	--color-sage: #7d8b75;
	--color-stone-blue: #6b7b8d;
	--color-ember: #b85c38;

	/* Warm Neutrals */
	--color-neutral-50: #f9f6f2;
	--color-neutral-100: #f0ece6;
	--color-neutral-200: #e0d8ce;
	--color-neutral-300: #ccc4b8;
	--color-neutral-400: #aea498;
	--color-neutral-500: #968a7e;
	--color-neutral-600: #7a6e62;
	--color-neutral-700: #5e5245;
	--color-neutral-800: #4a3f35;
	--color-neutral-900: #2a231c;
	--color-neutral-950: #1c1612;

	/* Typography */
	--font-sans: 'DM Sans', system-ui, sans-serif;
	--font-serif: 'Source Serif 4', Georgia, serif;
	--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

	/* Shadows (warm-tinted) */
	--shadow-sm: 0 1px 2px rgba(62, 44, 32, 0.05);
	--shadow-md: 0 4px 12px rgba(62, 44, 32, 0.08);
	--shadow-lg: 0 12px 32px rgba(62, 44, 32, 0.12);

	/* Radius */
	--radius-sm: 0.25rem;
	--radius-md: 0.375rem;
	--radius-lg: 0.5rem;
	--radius-xl: 0.75rem;
}
```

### 7.4 CSS Custom Properties (framework-agnostic)

```css
:root {
	/* Brand */
	--doxalabs-clay: #b08968;
	--doxalabs-umber: #3e2c20;
	--doxalabs-sand: #ddb892;
	--doxalabs-linen: #f5ede4;
	--doxalabs-parchment: #fdfaf6;
	--doxalabs-rust: #c07040;
	--doxalabs-sage: #7d8b75;
	--doxalabs-stone-blue: #6b7b8d;
	--doxalabs-ember: #b85c38;

	/* Semantic tokens */
	--color-bg: var(--doxalabs-parchment);
	--color-surface: var(--doxalabs-linen);
	--color-border: #ccc4b8;
	--color-text: var(--doxalabs-umber);
	--color-text-muted: #7a6e62;
	--color-accent: var(--doxalabs-clay);
	--color-accent-hover: #96744c;
	--color-cta: var(--doxalabs-rust);
}

[data-theme='dark'] {
	--color-bg: #1c1612;
	--color-surface: #2a231c;
	--color-border: #4a3f35;
	--color-text: #f0ece6;
	--color-text-muted: #968a7e;
	--color-accent: var(--doxalabs-sand);
	--color-accent-hover: #e8c8a0;
	--color-cta: #d4844c;
}
```

### 7.5 Component Patterns

**Button (primary):**

```html
<button
	class="rounded-md bg-clay px-5 py-2.5 font-medium text-parchment transition-colors duration-150 hover:bg-clay/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
>
	Get started
</button>
```

**Button (secondary/outline):**

```html
<button
	class="rounded-md border border-neutral-300 px-5 py-2.5 font-medium text-neutral-700 transition-colors duration-150 hover:bg-neutral-100"
>
	Learn more
</button>
```

**Card:**

```html
<div
	class="rounded-lg border border-neutral-200 bg-neutral-100 p-6 shadow-sm transition-shadow duration-200 hover:shadow"
>
	<h3 class="text-lg font-semibold text-neutral-700">Title</h3>
	<p class="mt-2 text-neutral-600">Description text here.</p>
</div>
```

**Navigation:**

```html
<nav class="border-b border-neutral-200 bg-parchment/80 backdrop-blur-sm">
	<div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
		<a href="/" class="text-lg font-semibold tracking-tight text-umber">doxa labs</a>
		<div class="flex gap-8 text-sm font-medium text-neutral-600">
			<a href="/projects" class="transition-colors hover:text-umber">Projects</a>
			<a href="/tools" class="transition-colors hover:text-umber">Tools</a>
			<a href="/about" class="transition-colors hover:text-umber">About</a>
		</div>
	</div>
</nav>
```

---

## 8. Website Structure

### Recommended Pages

```
/                  — Home (hero + featured projects + value prop)
/projects          — All projects/tools (grid layout)
/projects/[slug]   — Individual project page
/about             — Origin story, team, values
/blog              — Posts, tutorials, build logs (optional)
/open-source       — OSS contributions, philosophy
```

### Home Page Sections

1. **Hero** — Name + tagline + one CTA. No clutter. Let the whitespace set the tone.
2. **Featured work** — 3–4 highlighted projects. Cards with name, one-line desc, tech tags.
3. **What we do** — Short copy: tools, platforms, open-source, rebuilt tutorials.
4. **Values/philosophy** — 3 pillars (e.g., "Crafted with care," "Open by default," "Built to last").
5. **Footer** — GitHub link, socials, "Built by Doxa Labs" tagline.

### Page Layout Rules

- Max content width: `1200px` (75rem)
- Prose/text max width: `65ch`
- Side padding: `1.5rem` (mobile), `3rem` (desktop)
- Section spacing: `6rem` (mobile), `8rem` (desktop)

---

## 9. Assets & Social

### GitHub Organization

- **Handle:** `doxalabs`
- **Display name:** Doxa Labs
- **URL:** `github.com/doxalabs`
- **Bio:** "Crafted, not assembled. Open-source tools and platforms."
- **Avatar:** Monogram mark (stylized `d` or `dl`) on `#3E2C20` background in `#F5EDE4`

### Open Graph / Social Cards

- **Dimensions:** 1200x630px
- **Background:** `#3E2C20` (Umber)
- **Text:** `#F5EDE4` (Linen)
- **Accent line or mark:** `#B08968` (Clay)
- **Font:** Same as site headings (DM Sans or chosen font)
- Keep it minimal: logo/name + page title. No busy patterns.

### Favicon

- **Format:** SVG preferred (with PNG fallback at 32x32, 192x192, 512x512)
- **Design:** Monogram `d` or `dl` — Umber on transparent, or Clay on Umber for dark contexts

---

## 10. Do's and Don'ts

### Do

- Use generous whitespace
- Keep the warm neutral palette — every surface should feel warm
- Use Clay (`#B08968`) as the signature color — it should be recognizable
- Write concise, human copy
- Self-host fonts for performance
- Test contrast ratios (WCAG AA minimum: 4.5:1 for text)

### Don't

- Use pure black (`#000`) or pure white (`#FFF`) — always use the warm variants
- Use more than 2 accent colors on a single page
- Add animations that don't serve a purpose
- Use stock photos — illustrations, code snippets, or nothing
- Use ALL CAPS for body text (headings only, sparingly)
- Add gradients to the browns — they'll look muddy

---

## 11. Accessibility Checklist

| Check                         | Target                                                                      |
| ----------------------------- | --------------------------------------------------------------------------- |
| Text contrast on Parchment bg | Umber `#3E2C20` on `#FDFAF6` = **14.8:1** (AAA)                             |
| Text contrast on Linen bg     | Umber on `#F5EDE4` = **12.1:1** (AAA)                                       |
| Clay on Parchment (links)     | `#B08968` on `#FDFAF6` = **4.1:1** (use on large text, or darken for small) |
| Clay on Umber (dark mode)     | `#B08968` on `#3E2C20` = **3.6:1** (use Sand `#DDB892` instead = **6.8:1**) |
| Focus indicators              | Always visible, 2px outline in Clay                                         |
| Keyboard navigation           | All interactive elements reachable via Tab                                  |
| Reduced motion                | Respect `prefers-reduced-motion` — disable transitions                      |

> **Note:** Clay on light backgrounds may not pass WCAG AA for small text (needs 4.5:1). For small body links, use a darkened variant `#8B6E4E` which hits **5.6:1** on Parchment.

---

## 12. Quick Reference — Color Palette

```
BRAND
  Clay ━━━━━━━━━━  #B08968  ▓▓▓▓▓  Primary brand color
  Sand ━━━━━━━━━━  #DDB892  ▓▓▓▓▓  Secondary / highlight
  Umber ━━━━━━━━━  #3E2C20  ▓▓▓▓▓  Dark anchor
  Linen ━━━━━━━━━  #F5EDE4  ▓▓▓▓▓  Light surface
  Parchment ━━━━━  #FDFAF6  ▓▓▓▓▓  Page background

ACCENTS
  Rust ━━━━━━━━━━  #C07040  ▓▓▓▓▓  CTA / warm emphasis
  Sage ━━━━━━━━━━  #7D8B75  ▓▓▓▓▓  Success / natural
  Stone Blue ━━━━  #6B7B8D  ▓▓▓▓▓  Info / cool contrast
  Ember ━━━━━━━━━  #B85C38  ▓▓▓▓▓  Error / warning

NEUTRALS (warm)
  50 ━━  #F9F6F2    300 ━━  #CCC4B8    700 ━━  #5E5245
  100 ━  #F0ECE6    400 ━━  #AEA498    800 ━━  #4A3F35
  200 ━  #E0D8CE    500 ━━  #968A7E    900 ━━  #2A231C
                    600 ━━  #7A6E62    950 ━━  #1C1612
```

---

_This guide is a living document. Update it as the brand evolves._
