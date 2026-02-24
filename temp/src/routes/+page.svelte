<script lang="ts">
  import logo from "$lib/assets/content.png";
  import { projects, tutorials } from "$lib/index";
</script>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-offwhite via-offwhite to-beige/30">
  <div class="relative max-w-5xl mx-auto text-center z-10">
    <!-- Logo with modern styling -->
    <div class="mb-12 mx-auto w-fit">
      <img src={logo} alt="The Artisans" class="size-20" />
    </div>

    <!-- Main heading with modern typography -->
    <h1
      class="font-serif text-6xl md:text-7xl lg:text-8xl text-beige mb-8 font-bold tracking-tight leading-none"
    >
      <span class="block text-primary">Building Tools.</span>
      <span class="block bg-clip-text">Sharing Knowledge.</span>
    </h1>

    <!-- Description with better spacing -->
    <div class="max-w-3xl mx-auto mb-12">
      <p class="font-sans text-xl md:text-2xl text-grayshadow leading-relaxed">
        Open source, SaaS, and community-driven collaboration for developers
        worldwide. Crafting solutions that empower builders and creators.
      </p>
    </div>

    <!-- Floating accent elements -->
    <div class="flex justify-center items-center space-x-8 md:space-x-12">
      <div class="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
      <div
        class="w-1 h-12 bg-gradient-to-b from-gold/50 to-transparent rounded-full"
      ></div>
      <div
        class="w-3 h-3 bg-brown/60 rounded-full animate-pulse delay-500"
      ></div>
      <div
        class="w-1 h-12 bg-gradient-to-b from-brown/50 to-transparent rounded-full"
      ></div>
      <div
        class="w-2 h-2 bg-gold/80 rounded-full animate-pulse delay-1000"
      ></div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <a href="#about" class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
  <div class="flex flex-col items-center text-grayshadow/60 hover:text-gold transition-colors">
  <div
  class="w-px h-12 bg-gradient-to-b from-transparent to-grayshadow/30 mb-2"
  ></div>
  <svg
  class="w-5 h-5 animate-bounce"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  >
  <path
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="2"
  d="M19 14l-7 7m0 0l-7-7m7 7V3"
  />
  </svg>
  </div>
  </a>
</section>

<!-- About Section -->
<section id="about" class="py-20 px-4 bg-white">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="font-serif text-4xl text-charcoal mb-6 font-bold">
      Crafting Tools Together
    </h2>
    <p
      class="font-sans text-lg text-grayshadow mb-6 leading-relaxed max-w-3xl mx-auto"
    >
      We believe in the power of collaboration and open knowledge. Our mission
      is to build practical tools, share learning resources, and create a
      community where developers can grow together.
    </p>
    <p
      class="font-sans text-lg text-grayshadow mb-12 leading-relaxed max-w-3xl mx-auto"
    >
      From SaaS products to open-source libraries, from tutorials to
      collaborative projects – we're here to empower builders with the resources
      they need to create amazing things.
    </p>
    <div class="flex justify-center items-center space-x-12 text-gold">
      <div class="text-center">
        <div class="font-serif text-3xl font-bold text-charcoal">50+</div>
        <div class="font-sans text-sm text-grayshadow">Projects</div>
      </div>
      <div class="text-center">
        <div class="font-serif text-3xl font-bold text-charcoal">1.2K+</div>
        <div class="font-sans text-sm text-grayshadow">Contributors</div>
      </div>
      <div class="text-center">
        <div class="font-serif text-3xl font-bold text-charcoal">10K+</div>
        <div class="font-sans text-sm text-grayshadow">Downloads</div>
      </div>
    </div>
  </div>
</section>

<!-- Projects Section -->
<section id="projects" class="py-20 px-4 bg-offwhite">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="font-serif text-4xl text-charcoal mb-6 font-bold">
        Our Projects
      </h2>
      <p
        class="font-sans text-xl text-grayshadow max-w-3xl mx-auto leading-relaxed"
      >
        From developer tools to SaaS platforms, we're building solutions that
        make development more efficient and enjoyable.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project}
        <article
          class="bg-white border border-grayshadow/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
        >
          <!-- Top accent bar -->
          <div
            class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-brown"
          ></div>

          <!-- Header with live link and github icon -->
          <div class="flex items-center justify-between mb-6">
            <a
              href="https://{project.title
                .toLowerCase()
                .replace(/\s+/g, '-')}.artisans.dev"
              class="inline-block px-4 py-2 text-xs font-semibold text-gold bg-gold/10 rounded-full border border-gold/20 hover:bg-gold/20 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/artisansco/{project.title}"
              class="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                class="w-6 h-6 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <span class="sr-only">{project.title}</span>
            </a>
          </div>

          <h3
            class="font-serif text-2xl text-charcoal mb-4 font-bold group-hover:text-brown transition-colors duration-300"
          >
            {project.title}
          </h3>

          <p
            class="font-sans text-grayshadow mb-6 leading-relaxed text-sm line-clamp-2"
          >
            {project.description}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-8">
            {#each project.tags as tag}
              <span
                class="px-3 py-1 text-xs font-medium text-charcoal bg-beige/50 rounded-full border border-beige/70 hover:bg-gold/10 transition-colors duration-200"
              >
                {tag}
              </span>
            {/each}
          </div>
        </article>
      {/each}
    </div>

    <div class="text-center mt-16">
      <a
        href="https://github.com/artisansco"
        class="inline-flex items-center font-sans font-semibold text-gold hover:text-brown transition-colors bg-gold/5 hover:bg-gold/10 px-6 py-3 rounded-xl border border-gold/20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg class="mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
        View all projects on GitHub
        <svg
          class="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  </div>
</section>

<!-- Learning Hub Section -->
<section class="py-20 px-4 bg-white">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="font-serif text-4xl text-charcoal mb-6 font-bold">
        Rewrites & Reimplementations
      </h2>
      <p
        class="font-sans text-xl text-grayshadow max-w-3xl mx-auto leading-relaxed"
      >
        Popular projects and tutorials rebuilt from scratch. Taking inspiration
        from YouTube, blogs, and courses to create improved versions with modern
        practices.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each tutorials as tutorial}
        <article
          class="bg-white border border-grayshadow/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
        >
          <!-- Top accent bar -->
          <div
            class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-brown"
          ></div>

          <!-- Header with live link and source icon -->
          <div class="flex items-center justify-between mb-6">
            <span
              class="inline-block px-4 py-2 text-xs font-semibold text-brown bg-brown/10 rounded-full border border-brown/20"
            >
              <a
                href="https://github.com/artisansco"
                class="text-xs text-grayshadow hover:text-gold transition-colors duration-200 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Original Source
                <svg
                  class="ml-1 w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </span>
            <span class="size-12 flex items-center justify-center">
              <svg
                class="w-6 h-6 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>

          <h3
            class="font-serif text-2xl text-charcoal mb-4 font-bold group-hover:text-brown transition-colors duration-300"
          >
            {tutorial.title}
          </h3>

          <div class="mb-6">
            <p class="font-sans text-sm text-grayshadow mb-3">Rebuilt with:</p>
            <div class="flex flex-wrap gap-2">
              {#each tutorial.languages as language}
                <span
                  class="px-3 py-1 text-xs font-medium text-charcoal bg-beige/50 rounded-full border border-beige/70 hover:bg-gold/10 transition-colors duration-200"
                >
                  {language}
                </span>
              {/each}
            </div>
          </div>
        </article>
      {/each}
    </div>

    <div class="text-center mt-16">
    <a
    href="https://github.com/artisansco/website"
    target="_blank"
      rel="noopener noreferrer"
    class="inline-flex items-center font-sans font-semibold text-gold hover:text-brown transition-colors bg-gold/5 hover:bg-gold/10 px-6 py-3 rounded-xl border border-gold/20"
    >
    <svg
    class="mr-3 w-5 h-5"
    fill="none"
      stroke="currentColor"
    viewBox="0 0 24 24"
    >
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
      stroke-width="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
    Suggest a project to rewrite
    <svg
    class="ml-2 w-4 h-4"
    fill="none"
      stroke="currentColor"
    viewBox="0 0 24 24"
    >
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
      stroke-width="2"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
        </svg>
      </a>
    </div>
    </div>
</section>

<!-- Community Section -->
<section id="community" class="py-20 px-4 bg-gold/5">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="font-serif text-4xl text-charcoal mb-6 font-bold">
      We're Stronger Together
    </h2>
    <p class="font-sans text-xl text-grayshadow mb-12 leading-relaxed">
      Join our community of builders, creators, and learners. Whether you're
      contributing code, sharing knowledge, or just getting started – there's a
      place for you here.
    </p>

    <div class="grid md:grid-cols-3 gap-8 mb-12">
      <div class="text-center">
        <div
          class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <svg
            class="w-8 h-8 text-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <h3 class="font-serif text-lg text-charcoal font-bold mb-2">
          Collaborate
        </h3>
        <p class="font-sans text-grayshadow text-sm">
          Work together on open source projects and share your expertise
        </p>
      </div>

      <div class="text-center">
        <div
          class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <svg
            class="w-8 h-8 text-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <h3 class="font-serif text-lg text-charcoal font-bold mb-2">Learn</h3>
        <p class="font-sans text-grayshadow text-sm">
          Access tutorials, guides, and resources created by the community
        </p>
      </div>

      <div class="text-center">
        <div
          class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <svg
            class="w-8 h-8 text-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h3 class="font-serif text-lg text-charcoal font-bold mb-2">Build</h3>
        <p class="font-sans text-grayshadow text-sm">
          Create tools and solutions that help developers worldwide
        </p>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="https://github.com/artisansco"
        class="border-2 border-gold text-gold px-8 py-4 rounded-lg font-semibold hover:text-charcoal hover:bg-gold/10 transition-all duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Organization
      </a>
    </div>
  </div>
</section>
