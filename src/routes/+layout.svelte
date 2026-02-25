<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	import { fly } from 'svelte/transition';

	let { children } = $props();
	let menuOpen = $state(false);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Doxa Labs</title>
</svelte:head>

<div class="flex min-h-screen flex-col bg-parchment text-umber">
	<!-- Navigation -->
	<nav class="sticky top-0 z-50 border-b border-neutral-200 bg-parchment/80 backdrop-blur-sm">
		<div class="mx-auto flex h-16 max-w-[75rem] items-center justify-between px-6">
			<a href="/" class="text-lg font-semibold tracking-tight text-umber">doxa labs</a>
			<div class="flex items-center gap-8">
				<div class="hidden gap-8 text-sm font-medium text-neutral-600 sm:flex">
					<a href="/projects" class="transition-colors duration-150 hover:text-umber">Projects</a>
					<a href="/blog" class="transition-colors duration-150 hover:text-umber">Blog</a>
					<a href="/open-source" class="transition-colors duration-150 hover:text-umber"
						>Open Source</a
					>
				</div>
				<a
					href="https://github.com/doxalabs"
					target="_blank"
					rel="noopener noreferrer"
					class="text-neutral-500 transition-colors duration-150 hover:text-umber"
					aria-label="GitHub"
				>
					<span class="icon-[mdi--github] size-5"></span>
				</a>
			</div>
		</div>
	</nav>

	<!-- Mobile floating nav button -->
	<div class="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3 sm:hidden">
		<!-- Slide-up links -->
		{#if menuOpen}
			<button
				class="fixed inset-0 z-[-1]"
				aria-label="Close menu"
				onclick={() => (menuOpen = false)}
			></button>
			<nav class="flex flex-col items-end gap-1" aria-label="Mobile navigation">
				<a
					href="/projects"
					onclick={() => (menuOpen = false)}
					class="flex items-center gap-2 rounded-full bg-umber px-4 py-2 text-sm font-medium shadow-md transition-colors duration-150 {page.url.pathname.startsWith(
						'/projects'
					)
						? 'text-sand'
						: 'text-parchment hover:text-sand'}"
					in:fly={{ y: 16, duration: 250, delay: 100 }}
					out:fly={{ y: 16, duration: 150 }}
				>
					<span class="icon-[lucide--folder] size-4"></span>
					Projects
				</a>
				<a
					href="/blog"
					onclick={() => (menuOpen = false)}
					class="flex items-center gap-2 rounded-full bg-umber px-4 py-2 text-sm font-medium shadow-md transition-colors duration-150 {page.url.pathname.startsWith(
						'/blog'
					)
						? 'text-sand'
						: 'text-parchment hover:text-sand'}"
					in:fly={{ y: 16, duration: 250, delay: 50 }}
					out:fly={{ y: 16, duration: 150 }}
				>
					<span class="icon-[lucide--pen-line] size-4"></span>
					Blog
				</a>
				<a
					href="/open-source"
					onclick={() => (menuOpen = false)}
					class="flex items-center gap-2 rounded-full bg-umber px-4 py-2 text-sm font-medium shadow-md transition-colors duration-150 {page.url.pathname.startsWith(
						'/open-source'
					)
						? 'text-sand'
						: 'text-parchment hover:text-sand'}"
					in:fly={{ y: 16, duration: 250 }}
					out:fly={{ y: 16, duration: 150 }}
				>
					<span class="icon-[lucide--code] size-4"></span>
					OSS
				</a>
			</nav>
		{/if}

		<!-- FAB toggle -->
		<button
			class="flex size-12 items-center justify-center rounded-full border border-neutral-200 bg-umber text-parchment shadow-lg transition-all duration-200 hover:text-sand {menuOpen
				? 'rotate-45'
				: 'rotate-0'}"
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
		<div class="mx-auto max-w-[75rem] px-6 py-12">
			<div class="flex flex-col items-start justify-between gap-8 sm:flex-row">
				<div>
					<p class="font-semibold tracking-tight text-umber">doxa labs</p>
					<p class="mt-1 text-sm text-neutral-500">Built with intention.</p>
				</div>
				<div class="flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-500">
					<a href="/projects" class="transition-colors duration-150 hover:text-umber">Projects</a>
					<a href="/blog" class="transition-colors duration-150 hover:text-umber">Blog</a>
					<a href="/open-source" class="transition-colors duration-150 hover:text-umber"
						>Open Source</a
					>
					<a href="/careers" class="transition-colors duration-150 hover:text-umber">Careers</a>
					<a
						href="https://github.com/doxalabs"
						target="_blank"
						rel="noopener noreferrer"
						class="transition-colors duration-150 hover:text-umber">GitHub</a
					>
				</div>
			</div>
			<div class="mt-8 border-t border-neutral-200 pt-8 text-sm text-neutral-400">
				<p>
					&copy; {new Date().getFullYear()} Doxa Labs. Crafted, not assembled.
				</p>
			</div>
		</div>
	</footer>
</div>
