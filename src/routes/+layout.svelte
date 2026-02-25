<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';

	let { children } = $props();
	let menuOpen = $state(false);
	let hidden = $state(false);
	let lastScrollY = 0;

	function onScroll() {
		const y = window.scrollY;
		hidden = y > lastScrollY && y > 50;
		if (hidden) menuOpen = false;
		lastScrollY = y;
	}
</script>

<svelte:window onscroll={onScroll} />

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Doxa Labs</title>
</svelte:head>

<div class="min-h-screen flex flex-col bg-parchment text-umber">
	<!-- Navigation -->
	<nav class="bg-parchment/80 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-50">
		<div class="max-w-[75rem] mx-auto px-6 h-16 flex items-center justify-between">
			<a href="/" class="text-umber font-semibold text-lg tracking-tight">doxa labs</a>
			<div class="flex items-center gap-8">
				<div class="hidden sm:flex gap-8 text-neutral-600 text-sm font-medium">
					<a href="/projects" class="hover:text-umber transition-colors duration-150">Projects</a>
					<a href="/blog" class="hover:text-umber transition-colors duration-150">Blog</a>
					<a href="/open-source" class="hover:text-umber transition-colors duration-150">Open Source</a>
				</div>
				<a
					href="https://github.com/doxalabs"
					target="_blank"
					rel="noopener noreferrer"
					class="text-neutral-500 hover:text-umber transition-colors duration-150"
					aria-label="GitHub"
				>
				<span class="icon-[mdi--github] size-5"></span>
				</a>
			</div>
		</div>
	</nav>

	<!-- Mobile floating nav button -->
	<div class="fixed bottom-6 right-6 z-50 sm:hidden flex flex-col items-end gap-3 transition-all duration-300 {hidden ? 'translate-y-24 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}">
		<!-- Slide-up links -->
		{#if menuOpen}
			<button
				class="fixed inset-0 z-[-1]"
				aria-label="Close menu"
				onclick={() => (menuOpen = false)}
			></button>
			<nav class="flex flex-col gap-1 items-end" aria-label="Mobile navigation">
				<a
					href="/projects"
					onclick={() => (menuOpen = false)}
					class="flex items-center gap-2 rounded-full px-4 py-2 bg-parchment/95 backdrop-blur-sm border border-neutral-200 shadow-md text-sm font-medium transition-colors duration-150 {page.url.pathname.startsWith('/projects') ? 'text-clay' : 'text-neutral-600 hover:text-umber'}"
				>
					<span class="icon-[lucide--folder] size-4"></span>
					Projects
				</a>
				<a
					href="/blog"
					onclick={() => (menuOpen = false)}
					class="flex items-center gap-2 rounded-full px-4 py-2 bg-parchment/95 backdrop-blur-sm border border-neutral-200 shadow-md text-sm font-medium transition-colors duration-150 {page.url.pathname.startsWith('/blog') ? 'text-clay' : 'text-neutral-600 hover:text-umber'}"
				>
					<span class="icon-[lucide--pen-line] size-4"></span>
					Blog
				</a>
				<a
					href="/open-source"
					onclick={() => (menuOpen = false)}
					class="flex items-center gap-2 rounded-full px-4 py-2 bg-parchment/95 backdrop-blur-sm border border-neutral-200 shadow-md text-sm font-medium transition-colors duration-150 {page.url.pathname.startsWith('/open-source') ? 'text-clay' : 'text-neutral-600 hover:text-umber'}"
				>
					<span class="icon-[lucide--code] size-4"></span>
					OSS
				</a>
			</nav>
		{/if}

		<!-- FAB toggle -->
		<button
			class="size-12 rounded-full bg-parchment/95 backdrop-blur-sm border border-neutral-200 shadow-lg flex items-center justify-center text-neutral-500 hover:text-umber transition-all duration-200 {menuOpen ? 'rotate-45' : 'rotate-0'}"
			aria-label="Toggle navigation"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class="icon-[lucide--plus] size-5"></span>
		</button>
	</div>

	<!-- Main content -->
	<main class="flex-1">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="border-t border-neutral-200 bg-neutral-50">
		<div class="max-w-[75rem] mx-auto px-6 py-12">
			<div class="flex flex-col sm:flex-row justify-between items-start gap-8">
				<div>
					<p class="text-umber font-semibold tracking-tight">doxa labs</p>
					<p class="text-neutral-500 text-sm mt-1">Built with intention.</p>
				</div>
				<div class="flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-500">
					<a href="/projects" class="hover:text-umber transition-colors duration-150">Projects</a>
					<a href="/blog" class="hover:text-umber transition-colors duration-150">Blog</a>
					<a href="/open-source" class="hover:text-umber transition-colors duration-150">Open Source</a>
					<a href="/careers" class="hover:text-umber transition-colors duration-150">Careers</a>
					<a href="https://github.com/doxalabs" target="_blank" rel="noopener noreferrer" class="hover:text-umber transition-colors duration-150">GitHub</a>
				</div>
			</div>
			<div class="mt-8 pt-8 border-t border-neutral-200 text-sm text-neutral-400">
				<p>&copy; {new Date().getFullYear()} Doxa Labs. Crafted, not assembled.</p>
			</div>
		</div>
	</footer>
</div>
