# 🎨 The Artisans Design Guide

## ✨ Brand Essence
- **Identity**: Builders, creators, and collaborators. Inspired by craftsmanship (the hand and hammer) and technology.  
- **Tone**: Practical, empowering, open, and community-driven.  
- **Audience**: Developers, learners, contributors, and potential partners/investors.  

---

## 🎨 Colors (Tailwind Config)
```ts
// tailwind.config.js
theme: {
  extend: {
    colors: {
      gold: "#C59A4A",
      beige: "#D6B884",
      charcoal: "#2E2A26",
      offwhite: "#F5F0E6",
      brown: "#8A5A2F",
      grayshadow: "#6E6B66",
    }
  }
}
```

---

## ✍️ Typography
- **Headings** → Serif (`font-serif`)  
  - Suggested: `Merriweather`, `Cinzel`, `Cormorant Garamond`  
- **Body** → Sans-serif (`font-sans`)  
  - Suggested: `Inter`, `Work Sans`, `Roboto`  
- **Code snippets** → `font-mono`  
  - Suggested: `Fira Code`, `JetBrains Mono`  

Example usage:
```html
<h1 class="font-serif text-charcoal text-4xl font-bold tracking-wide">
  Crafting Tools Together
</h1>
<p class="font-sans text-grayshadow text-lg leading-relaxed">
  Building SaaS, open-source projects, and knowledge for developers worldwide.
</p>
```

---

## 🖼️ Layout & Sections

### Hero Section
- Background: `bg-offwhite` (paper-like feel).  
- Headline: Bold serif, centered.  
- CTA Buttons:  
  - Primary: Gold background, Charcoal text.  
  - Secondary: Gold border, transparent background.  

```html
<section class="bg-offwhite py-20 text-center">
  <h1 class="font-serif text-5xl text-charcoal mb-4">
    Building Tools. Sharing Knowledge.
  </h1>
  <p class="font-sans text-grayshadow max-w-2xl mx-auto">
    Open source, SaaS, and community-driven collaboration.
  </p>
  <div class="mt-8 flex justify-center gap-4">
    <a class="bg-gold text-charcoal px-6 py-3 rounded-lg font-semibold hover:bg-brown transition">Explore Projects</a>
    <a class="border border-gold text-gold px-6 py-3 rounded-lg font-semibold hover:text-charcoal hover:bg-gold/10 transition">Contribute</a>
  </div>
</section>
```

---

### About Section
- Two-column layout.  
- Left: Mission text.  
- Right: Logo or illustration.  

---

### Projects Section
- Grid layout (3 cols desktop, 1 col mobile).  
- Project cards: `bg-offwhite border border-grayshadow/20 rounded-xl shadow-sm hover:shadow-md transition`.  

---

### Learning Hub
- Tutorials re-built in different languages.  
- Use tags/filters for languages (Python, Go, Rust, etc.).  

---

### Community Section
- Invitation to join collaboration (Discord, GitHub, etc.).  
- Tone: *“We’re stronger together. Come build with us.”*  

---

## 🦶 Footer (Simple)
Minimal and subtle footer, no links.

```html
<footer class="bg-charcoal text-offwhite py-6">
  <div class="max-w-6xl mx-auto px-4 flex justify-center items-center">
    <p class="font-sans text-sm">&copy; {new Date().getFullYear()} The Artisans. All rights reserved.</p>
  </div>
</footer>
```

---

## 🪄 Overall Vibe
- **Subtle** → neutral tones, whitespace, calm layout.  
- **Encouraging** → warm gold highlights feel like opportunity.  
- **Trustworthy** → serif headings (authority) + clean sans-serif body (clarity).  

- Developers → feel encouraged (clean, professional, easy to navigate).  
- Investors & Partners → feel trust and confidence (balance of warmth + professionalism).  
