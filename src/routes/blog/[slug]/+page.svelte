<script lang="ts">
	import { formatDate } from '$lib/posts';
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
			<!-- Back link -->
			<a
				href="/blog"
				class="mb-8 inline-flex items-center gap-1 text-sm text-neutral-400 transition-colors duration-150 hover:text-umber"
			>
				<span class="icon-[lucide--chevron-left] size-4"></span>
				All posts
			</a>

			<!-- Header -->
			<div class="mb-4 flex items-center gap-3 text-sm text-neutral-400">
				<time datetime={data.meta.date}>{formatDate(data.meta.date)}</time>
				<span class="h-1 w-1 rounded-full bg-neutral-300"></span>
				<span>{data.meta.readingTime}</span>
			</div>

			<h1 class="text-3xl leading-tight font-bold tracking-tight text-umber sm:text-4xl">
				{data.meta.title}
			</h1>

			<p class="mt-4 text-lg leading-relaxed text-neutral-500">
				{data.meta.excerpt}
			</p>

			<!-- Content -->
			<div
				class="prose mt-12 max-w-none prose-neutral
				prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-umber
				prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-xl
				prose-p:leading-relaxed prose-p:text-neutral-600
				prose-a:text-clay prose-a:underline prose-a:decoration-clay/30 hover:prose-a:decoration-clay
				prose-strong:font-semibold prose-strong:text-umber
				prose-code:rounded-sm prose-code:bg-neutral-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:text-neutral-700
				prose-pre:rounded-lg prose-pre:bg-neutral-900 prose-pre:text-sm prose-pre:text-neutral-100
				prose-ul:my-4
				prose-li:my-1 prose-li:text-neutral-600"
			>
				{#if data.content}
					{@const Content = data.content}
					<Content />
				{/if}
			</div>

			<!-- Footer -->
			<div class="mt-16 border-t border-neutral-200 pt-8">
				<a
					href="/blog"
					class="inline-flex items-center gap-1 text-sm font-medium text-neutral-500 transition-colors duration-150 hover:text-umber"
				>
					<span class="icon-[lucide--chevron-left] size-4"></span>
					Back to all posts
				</a>
			</div>
		</div>
	</div>
</article>
