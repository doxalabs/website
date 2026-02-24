<svelte:head>
	<title>Doxa Labs — Built with intention</title>
	<meta name="description" content="Doxa Labs is a builder collective. We make tools, share code, and learn in public." />
</svelte:head>

<!-- Hero -->
<section class="px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
	<div class="max-w-[75rem] mx-auto">
		<div class="max-w-2xl">
			<p class="text-clay font-medium text-sm tracking-wide uppercase mb-4">Builder Collective</p>
			<h1 class="text-4xl sm:text-5xl font-bold text-umber leading-tight tracking-tight">
				Glory in the details.
			</h1>
			<p class="mt-6 text-lg text-neutral-600 max-w-prose leading-relaxed">
				Doxa Labs is a collective of builders who believe great software is made with care, shared generously, and refined relentlessly. We craft tools, platforms, and open-source projects.
			</p>
			<div class="mt-8 flex flex-wrap gap-4">
				<a
					href="https://github.com/doxalabs"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 bg-clay text-parchment px-5 py-2.5 rounded-md font-medium hover:bg-clay/85 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
				>
					<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
					</svg>
					View on GitHub
				</a>
				<a
					href="#work"
					class="inline-flex items-center border border-neutral-300 text-neutral-700 px-5 py-2.5 rounded-md font-medium hover:bg-neutral-100 transition-colors duration-150"
				>
					See our work
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Featured Work -->
<section id="work" class="px-6 py-20 sm:py-24 bg-neutral-50">
	<div class="max-w-[75rem] mx-auto">
		<div class="mb-12">
			<p class="text-clay font-medium text-sm tracking-wide uppercase mb-2">Featured Work</p>
			<h2 class="text-3xl font-semibold text-umber tracking-tight">What we're building</h2>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			<!-- Project Card 1 -->
			<div class="bg-parchment border border-neutral-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 group">
				<div class="flex items-center gap-2 mb-4">
					<div class="w-8 h-8 rounded-md bg-clay/10 flex items-center justify-center">
						<svg class="w-4 h-4 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
						</svg>
					</div>
					<span class="text-xs font-medium text-neutral-400 uppercase tracking-wide">Developer Tool</span>
				</div>
				<h3 class="text-neutral-700 font-semibold text-lg group-hover:text-umber transition-colors duration-150">CLI Toolkit</h3>
				<p class="text-neutral-500 mt-2 text-sm leading-relaxed">A collection of fast, composable command-line tools for modern development workflows.</p>
				<div class="mt-4 flex flex-wrap gap-2">
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">Rust</span>
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">CLI</span>
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">Open Source</span>
				</div>
			</div>

			<!-- Project Card 2 -->
			<div class="bg-parchment border border-neutral-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 group">
				<div class="flex items-center gap-2 mb-4">
					<div class="w-8 h-8 rounded-md bg-sage/15 flex items-center justify-center">
						<svg class="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
						</svg>
					</div>
					<span class="text-xs font-medium text-neutral-400 uppercase tracking-wide">Platform</span>
				</div>
				<h3 class="text-neutral-700 font-semibold text-lg group-hover:text-umber transition-colors duration-150">Component Library</h3>
				<p class="text-neutral-500 mt-2 text-sm leading-relaxed">Accessible, themeable UI components for Svelte with warm design tokens baked in.</p>
				<div class="mt-4 flex flex-wrap gap-2">
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">Svelte</span>
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">Tailwind</span>
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">a11y</span>
				</div>
			</div>

			<!-- Project Card 3 -->
			<div class="bg-parchment border border-neutral-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 group">
				<div class="flex items-center gap-2 mb-4">
					<div class="w-8 h-8 rounded-md bg-stone-blue/15 flex items-center justify-center">
						<svg class="w-4 h-4 text-stone-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
						</svg>
					</div>
					<span class="text-xs font-medium text-neutral-400 uppercase tracking-wide">Learning</span>
				</div>
				<h3 class="text-neutral-700 font-semibold text-lg group-hover:text-umber transition-colors duration-150">Modern Tutorials</h3>
				<p class="text-neutral-500 mt-2 text-sm leading-relaxed">Classic tutorials rebuilt from scratch with modern frameworks, best practices, and real-world patterns.</p>
				<div class="mt-4 flex flex-wrap gap-2">
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">SvelteKit</span>
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">TypeScript</span>
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">Education</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- What We Do -->
<section id="about" class="px-6 py-20 sm:py-24">
	<div class="max-w-[75rem] mx-auto">
		<div class="max-w-2xl">
			<p class="text-clay font-medium text-sm tracking-wide uppercase mb-2">About</p>
			<h2 class="text-3xl font-semibold text-umber tracking-tight">Crafted, not assembled.</h2>
			<div class="mt-6 space-y-4 text-neutral-600 leading-relaxed">
				<p>
					Doxa takes its name from the Greek word for "glory" — the kind found not in noise, but in craft. We're a small collective of builders who care deeply about the software we make.
				</p>
				<p>
					We build developer tools and platforms. We rebuild tutorials in modern frameworks. We create products — free and paid — and share what we learn along the way. Everything we ship is made with intention.
				</p>
				<p>
					Inspired by the artisans of Exodus 31, who were filled with wisdom, understanding, and skill to build something worthy, we believe the best software comes from treating code as craft.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Values -->
<section id="values" class="px-6 py-20 sm:py-24 bg-neutral-50">
	<div class="max-w-[75rem] mx-auto">
		<div class="mb-12">
			<p class="text-clay font-medium text-sm tracking-wide uppercase mb-2">Our Values</p>
			<h2 class="text-3xl font-semibold text-umber tracking-tight">What we believe</h2>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
			<!-- Value 1 -->
			<div>
				<div class="w-10 h-10 rounded-lg bg-clay/10 flex items-center justify-center mb-4">
					<svg class="w-5 h-5 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
					</svg>
				</div>
				<h3 class="text-umber font-semibold text-lg">Crafted with care</h3>
				<p class="text-neutral-500 mt-2 leading-relaxed text-sm">
					Every decision is deliberate. We sweat the details because the details are where quality lives. No shortcuts, no half-measures.
				</p>
			</div>

			<!-- Value 2 -->
			<div>
				<div class="w-10 h-10 rounded-lg bg-sage/15 flex items-center justify-center mb-4">
					<svg class="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
					</svg>
				</div>
				<h3 class="text-umber font-semibold text-lg">Open by default</h3>
				<p class="text-neutral-500 mt-2 leading-relaxed text-sm">
					We share our code, our process, and our lessons. Open source isn't a strategy — it's how we believe good software should be made.
				</p>
			</div>

			<!-- Value 3 -->
			<div>
				<div class="w-10 h-10 rounded-lg bg-stone-blue/15 flex items-center justify-center mb-4">
					<svg class="w-5 h-5 text-stone-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<h3 class="text-umber font-semibold text-lg">Built to last</h3>
				<p class="text-neutral-500 mt-2 leading-relaxed text-sm">
					We choose boring technology over hype. We write tests. We document. We build things that work today and still work a year from now.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="px-6 py-20 sm:py-24">
	<div class="max-w-[75rem] mx-auto text-center">
		<h2 class="text-2xl sm:text-3xl font-semibold text-umber tracking-tight">The work speaks.</h2>
		<p class="mt-4 text-neutral-500 max-w-md mx-auto">
			Follow our journey on GitHub. Star a repo, open an issue, or just say hello.
		</p>
		<a
			href="https://github.com/doxalabs"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center gap-2 mt-8 bg-umber text-linen px-6 py-3 rounded-md font-medium hover:bg-neutral-800 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-umber"
		>
			<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
			</svg>
			Follow Doxa Labs
		</a>
	</div>
</section>
