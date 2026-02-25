<svelte:head>
	<title>Projects — Doxa Labs</title>
	<meta name="description" content="Open-source tools, SDKs, and rewrites from Doxa Labs. Built with Zig, Go, TypeScript, and Svelte." />
</svelte:head>

<section class="px-6 pt-24 pb-12 sm:pt-32 sm:pb-16">
	<div class="max-w-[75rem] mx-auto">
		<div class="max-w-2xl">
			<p class="text-clay font-medium text-sm tracking-wide uppercase mb-4">Projects</p>
			<h1 class="text-4xl sm:text-5xl font-bold text-umber leading-tight tracking-tight">
				What we're building
			</h1>
			<p class="mt-6 text-lg text-neutral-600 max-w-prose leading-relaxed">
				Tools, SDKs, and rewrites — all open source. We build things we need, then share them.
			</p>
		</div>
	</div>
</section>

<!-- Tools & Libraries -->
<section class="px-6 py-12 sm:py-16">
	<div class="max-w-[75rem] mx-auto">
		<h2 class="text-sm font-medium text-neutral-400 uppercase tracking-wide mb-6">Tools & Libraries</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
			<!-- flags.zig -->
			<a href="https://github.com/doxalabs/flags.zig" target="_blank" rel="noopener noreferrer" class="bg-parchment border border-neutral-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 group block">
				<div class="flex items-center justify-between mb-4">
					<div class="flex items-center gap-2">
						<div class="w-8 h-8 rounded-md bg-clay/10 flex items-center justify-center">
							<svg class="w-4 h-4 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
							</svg>
						</div>
						<span class="text-xs font-medium text-neutral-400 uppercase tracking-wide">Library</span>
					</div>
					<svg class="w-4 h-4 text-neutral-300 group-hover:text-neutral-500 transition-colors duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
					</svg>
				</div>
				<h3 class="text-neutral-700 font-semibold text-lg group-hover:text-umber transition-colors duration-150">flags.zig</h3>
				<p class="text-neutral-500 mt-2 text-sm leading-relaxed">A type-safe command-line argument parser for Zig. Inspired by Rust's clap and TigerBeetle's flags — zero runtime overhead, comptime parsing, subcommands via union(enum), and zero dependencies.</p>
				<div class="mt-4 flex flex-wrap gap-2">
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">Zig</span>
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">CLI</span>
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">Parser</span>
				</div>
			</a>

			<!-- monimejs -->
			<a href="https://github.com/doxalabs/monimejs" target="_blank" rel="noopener noreferrer" class="bg-parchment border border-neutral-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 group block">
				<div class="flex items-center justify-between mb-4">
					<div class="flex items-center gap-2">
						<div class="w-8 h-8 rounded-md bg-sage/15 flex items-center justify-center">
							<svg class="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
							</svg>
						</div>
						<span class="text-xs font-medium text-neutral-400 uppercase tracking-wide">SDK</span>
					</div>
					<svg class="w-4 h-4 text-neutral-300 group-hover:text-neutral-500 transition-colors duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
					</svg>
				</div>
				<h3 class="text-neutral-700 font-semibold text-lg group-hover:text-umber transition-colors duration-150">monimejs</h3>
				<p class="text-neutral-500 mt-2 text-sm leading-relaxed">Lightweight TypeScript SDK for the Monime payments API. Full type safety, retry logic with exponential backoff, idempotency keys, and 12 resource modules. Published on npm.</p>
				<div class="mt-4 flex flex-wrap gap-2">
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">TypeScript</span>
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">npm</span>
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">Payments</span>
				</div>
			</a>

			<!-- tip -->
			<a href="https://github.com/doxalabs/tip" target="_blank" rel="noopener noreferrer" class="bg-parchment border border-neutral-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 group block">
				<div class="flex items-center justify-between mb-4">
					<div class="flex items-center gap-2">
						<div class="w-8 h-8 rounded-md bg-rust/10 flex items-center justify-center">
							<svg class="w-4 h-4 text-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
							</svg>
						</div>
						<span class="text-xs font-medium text-neutral-400 uppercase tracking-wide">Tool</span>
					</div>
					<svg class="w-4 h-4 text-neutral-300 group-hover:text-neutral-500 transition-colors duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
					</svg>
				</div>
				<h3 class="text-neutral-700 font-semibold text-lg group-hover:text-umber transition-colors duration-150">tip</h3>
				<p class="text-neutral-500 mt-2 text-sm leading-relaxed">A self-hosted password manager and task manager built with Zig. Offline-first, with architecture docs and a clear development roadmap.</p>
				<div class="mt-4 flex flex-wrap gap-2">
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">Zig</span>
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">Security</span>
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">Self-hosted</span>
				</div>
			</a>
		</div>
	</div>
</section>

<!-- Rewrites -->
<section class="px-6 py-12 sm:py-16">
	<div class="max-w-[75rem] mx-auto">
		<h2 class="text-sm font-medium text-neutral-400 uppercase tracking-wide mb-6">Rewrites & Reimplementations</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
			<!-- microblog -->
			<a href="https://github.com/doxalabs/microblog" target="_blank" rel="noopener noreferrer" class="bg-parchment border border-neutral-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 group block">
				<div class="flex items-center justify-between mb-4">
					<div class="flex items-center gap-2">
						<div class="w-8 h-8 rounded-md bg-stone-blue/15 flex items-center justify-center">
							<svg class="w-4 h-4 text-stone-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
							</svg>
						</div>
						<span class="text-xs font-medium text-neutral-400 uppercase tracking-wide">Rewrite</span>
					</div>
					<svg class="w-4 h-4 text-neutral-300 group-hover:text-neutral-500 transition-colors duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
					</svg>
				</div>
				<h3 class="text-neutral-700 font-semibold text-lg group-hover:text-umber transition-colors duration-150">microblog</h3>
				<p class="text-neutral-500 mt-2 text-sm leading-relaxed">The Flask Mega-Tutorial by Miguel Grinberg, reimplemented with a modern stack — SvelteKit frontend, Go API with chi router, and SQLite with sqlx.</p>
				<div class="mt-4 flex flex-wrap gap-2">
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">Go</span>
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">SvelteKit</span>
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">SQLite</span>
				</div>
			</a>
		</div>
	</div>
</section>

<!-- Older Work -->
<section class="px-6 py-12 sm:py-16 pb-24">
	<div class="max-w-[75rem] mx-auto">
		<h2 class="text-sm font-medium text-neutral-400 uppercase tracking-wide mb-6">Older Work</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
			<!-- campus-gist -->
			<a href="https://github.com/doxalabs/campus-gist" target="_blank" rel="noopener noreferrer" class="bg-parchment border border-neutral-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 group block">
				<div class="flex items-center justify-between mb-4">
					<div class="flex items-center gap-2">
						<div class="w-8 h-8 rounded-md bg-neutral-500/10 flex items-center justify-center">
							<svg class="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
							</svg>
						</div>
						<span class="text-xs font-medium text-neutral-400 uppercase tracking-wide">Platform</span>
					</div>
					<svg class="w-4 h-4 text-neutral-300 group-hover:text-neutral-500 transition-colors duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
					</svg>
				</div>
				<h3 class="text-neutral-700 font-semibold text-lg group-hover:text-umber transition-colors duration-150">campus-gist</h3>
				<p class="text-neutral-500 mt-2 text-sm leading-relaxed">A social platform for students to share ideas, find solutions, attend events, and connect across institutions. Built with SvelteKit and MongoDB.</p>
				<div class="mt-4 flex flex-wrap gap-2">
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">Svelte</span>
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">Node.js</span>
					<span class="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-500">MongoDB</span>
				</div>
			</a>
		</div>
	</div>
</section>
