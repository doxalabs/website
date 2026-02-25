<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

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
