<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.meta.title} — Doxa Labs</title>
	<meta name="description" content={data.meta.excerpt} />
</svelte:head>

<article class="px-6 pt-24 pb-24 sm:pt-32">
	<div class="mx-auto max-w-[75rem]">
		<div class="max-w-2xl">
			<a
				href="/careers"
				class="mb-8 inline-flex items-center gap-1 text-sm text-neutral-400 transition-colors duration-150 hover:text-umber"
			>
				<span class="icon-[lucide--chevron-left] size-4"></span>
				All positions
			</a>

			<div class="mb-4 flex flex-wrap gap-2">
				{#each data.meta.tags as tag}
					<span class="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600"
						>{tag}</span
					>
				{/each}
			</div>

			<h1 class="text-3xl leading-tight font-bold tracking-tight text-umber sm:text-4xl">
				{data.meta.title}
			</h1>

			<div
				class="prose mt-10 max-w-none prose-neutral
				prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-umber
				prose-h2:mt-10 prose-h2:mb-3 prose-h2:text-lg
				prose-p:leading-relaxed prose-p:text-neutral-600
				prose-a:text-clay prose-a:underline prose-a:decoration-clay/30 hover:prose-a:decoration-clay
				prose-ul:space-y-2
				prose-li:my-0 prose-li:text-neutral-600"
			>
				{#if data.content}
					{@const Content = data.content}
					<Content />
				{/if}
			</div>

			<div class="mt-12">
				<a
					href="mailto:hello@doxalabs.com?subject={encodeURIComponent(data.meta.title)}"
					class="inline-flex items-center gap-2 rounded-md bg-clay px-5 py-2.5 font-medium text-parchment transition-colors duration-150 hover:bg-clay/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
				>
					Apply for this role
				</a>
			</div>
		</div>
	</div>
</article>
