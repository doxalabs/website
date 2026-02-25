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
	<div class="max-w-[75rem] mx-auto">
		<div class="max-w-2xl">
			<!-- Back link -->
			<a href="/blog" class="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-umber transition-colors duration-150 mb-8">
				<span class="icon-[lucide--chevron-left] size-4"></span>
				All posts
			</a>

			<!-- Header -->
			<div class="flex items-center gap-3 text-sm text-neutral-400 mb-4">
				<time datetime={data.meta.date}>{formatDate(data.meta.date)}</time>
				<span class="w-1 h-1 rounded-full bg-neutral-300"></span>
				<span>{data.meta.readingTime}</span>
			</div>

			<h1 class="text-3xl sm:text-4xl font-bold text-umber leading-tight tracking-tight">
				{data.meta.title}
			</h1>

			<p class="mt-4 text-lg text-neutral-500 leading-relaxed">
				{data.meta.excerpt}
			</p>

			<!-- Content -->
			<div class="mt-12 prose prose-neutral max-w-none
				prose-headings:text-umber prose-headings:font-semibold prose-headings:tracking-tight
				prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
				prose-p:text-neutral-600 prose-p:leading-relaxed
				prose-a:text-clay prose-a:underline prose-a:decoration-clay/30 hover:prose-a:decoration-clay
				prose-strong:text-umber prose-strong:font-semibold
				prose-code:text-sm prose-code:bg-neutral-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-sm prose-code:text-neutral-700
				prose-pre:bg-neutral-900 prose-pre:text-neutral-100 prose-pre:rounded-lg prose-pre:text-sm
				prose-li:text-neutral-600
				prose-ul:my-4 prose-li:my-1">
				{#if data.content}
					{@const Content = data.content}
					<Content />
				{/if}
			</div>

			<!-- Footer -->
			<div class="mt-16 pt-8 border-t border-neutral-200">
				<a href="/blog" class="inline-flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-umber transition-colors duration-150">
					<span class="icon-[lucide--chevron-left] size-4"></span>
					Back to all posts
				</a>
			</div>
		</div>
	</div>
</article>
