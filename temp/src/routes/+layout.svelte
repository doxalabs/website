<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
<link rel="icon" href={favicon} />
<title>The Artisans - Building Tools, Sharing Knowledge</title>
<meta
name="description"
content="Open source, SaaS, and community-driven collaboration for developers worldwide. Crafting solutions that empower builders and creators."
/>
  <meta name="keywords" content="open source, SaaS, developers, community, tools, collaboration, knowledge sharing" />
  <meta name="author" content="The Artisans" />
  <meta property="og:title" content="The Artisans - Building Tools, Sharing Knowledge" />
  <meta property="og:description" content="Open source, SaaS, and community-driven collaboration for developers worldwide." />
  <meta property="og:image" content="{favicon}" />
  <meta property="og:url" content="https://artisans.dev" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="The Artisans - Building Tools, Sharing Knowledge" />
  <meta name="twitter:description" content="Open source, SaaS, and community-driven collaboration for developers worldwide." />
  <meta name="twitter:image" content="{favicon}" />
  <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "The Artisans",
      "url": "https://artisans.dev",
      "logo": "{favicon}",
      "description": "Open source, SaaS, and community-driven collaboration for developers worldwide.",
      "sameAs": [
        "https://github.com/artisansco"
      ]
    }}
  </script>
</svelte:head>

<main class="min-h-screen bg-offwhite">
  {@render children?.()}
</main>

<!-- Minimal Footer -->
<footer class="bg-charcoal text-offwhite py-8">
  <div class="max-w-6xl mx-auto px-4 text-center">
    <div class="flex justify-center items-center mb-4">
      <span class="font-serif text-xl font-bold">The Artisans</span>
  </div>
<p class="font-sans text-sm text-offwhite/80">
  &copy; {new Date().getFullYear()} The Artisans. All rights reserved.
</p>
</div>
</footer>
