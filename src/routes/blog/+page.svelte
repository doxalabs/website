<script lang="ts">
	import { posts, formatDate } from '$lib/posts';
</script>

<svelte:head>
	<title>Blog — Doxa Labs</title>
	<meta
		name="description"
		content="Build logs, technical deep-dives, and lessons learned from the Doxa Labs team."
	/>
</svelte:head>

<section class="px-6 pt-24 pb-12 sm:pt-32 sm:pb-16">
	<div class="mx-auto max-w-[75rem]">
		<div class="max-w-2xl">
			<p class="mb-4 text-sm font-medium tracking-wide text-clay uppercase">Blog</p>
			<h1 class="text-4xl leading-tight font-bold tracking-tight text-umber sm:text-5xl">
				Build logs & lessons
			</h1>
			<p class="mt-6 max-w-prose text-lg leading-relaxed text-neutral-600">
				What we're building, why we made the choices we did, and what we learned along the way.
			</p>
		</div>
	</div>
</section>

<section class="px-6 py-12 pb-24">
	<div class="mx-auto max-w-[75rem]">
		<div class="max-w-2xl space-y-12">
			{#each posts as post (post.slug)}
				<article>
					<div class="mb-3 flex items-center gap-3 text-sm text-neutral-400">
						<time datetime={post.date}>{formatDate(post.date)}</time>
						<span class="h-1 w-1 rounded-full bg-neutral-300"></span>
						<span>{post.readingTime}</span>
					</div>
					<a href="/blog/{post.slug}" class="group block">
						<h2
							class="text-xl leading-snug font-semibold text-umber transition-colors duration-150 group-hover:text-clay sm:text-2xl"
						>
							{post.title}
						</h2>
						<p class="mt-3 leading-relaxed text-neutral-500">
							{post.excerpt}
						</p>
						<span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-clay">
							Read more
							<span class="icon-[lucide--chevron-right] size-4"></span>
						</span>
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>
