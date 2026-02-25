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
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
					</svg>
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
