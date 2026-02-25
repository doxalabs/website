<script lang="ts">
	import { projects, groupByCategory } from '$lib/projects';
	import type { Project } from '$lib/projects';

	const grouped = groupByCategory(projects);

	const colorClasses: Record<Project['color'], { bg: string; text: string }> = {
		clay: { bg: 'bg-clay/10', text: 'text-clay' },
		sage: { bg: 'bg-sage/15', text: 'text-sage' },
		rust: { bg: 'bg-rust/10', text: 'text-rust' },
		'stone-blue': { bg: 'bg-stone-blue/15', text: 'text-stone-blue' },
		neutral: { bg: 'bg-neutral-500/10', text: 'text-neutral-400' },
		ember: { bg: 'bg-ember/10', text: 'text-ember' }
	};
</script>

<svelte:head>
	<title>Projects — Doxa Labs</title>
	<meta
		name="description"
		content="Open-source tools, platforms, and products — everything we're building at Doxa Labs. Some open, some paid. All crafted with care."
	/>
</svelte:head>

<section class="px-6 pt-24 pb-12 sm:pt-32 sm:pb-16">
	<div class="mx-auto max-w-[75rem]">
		<div class="max-w-2xl">
			<p class="mb-4 text-sm font-medium tracking-wide text-clay uppercase">Projects</p>
			<h1 class="text-4xl leading-tight font-bold tracking-tight text-umber sm:text-5xl">
				What we're building
			</h1>
			<p class="mt-6 max-w-prose text-lg leading-relaxed text-neutral-600">
				Open-source tools, platforms, and products — everything we're building at Doxa Labs. Some
				open, some paid. All crafted with care.
			</p>
		</div>
	</div>
</section>

{#each grouped as [category, items], i (category)}
	<section class="px-6 py-12 sm:py-16" class:pb-24={i === grouped.length - 1}>
		<div class="mx-auto max-w-[75rem]">
			<h2 class="mb-6 text-sm font-medium tracking-wide text-neutral-400 uppercase">
				{category}
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
				{#each items as project (project.title)}
					{@const colors = colorClasses[project.color]}
					{#if project.link}
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							class="group block rounded-lg border border-neutral-200 bg-parchment p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
						>
							<div class="mb-4 flex items-center justify-between">
								<div class="flex items-center gap-2">
									<div class="h-8 w-8 rounded-md {colors.bg} flex items-center justify-center">
										<span class="{project.icon} size-4 {colors.text}"></span>
									</div>
									<span class="text-xs font-medium tracking-wide text-neutral-400 uppercase"
										>{project.type}</span
									>
									{#if project.opensource}
										<span class="rounded bg-sage/15 px-1.5 py-0.5 text-xs font-medium text-sage"
											>OSS</span
										>
									{/if}
								</div>
								<span
									class="icon-[lucide--arrow-up-right] size-4 text-neutral-300 transition-colors duration-150 group-hover:text-neutral-500"
								></span>
							</div>
							<h3
								class="text-lg font-semibold text-neutral-700 transition-colors duration-150 group-hover:text-umber"
							>
								{project.title}
							</h3>
							<p class="mt-2 text-sm leading-relaxed text-neutral-500">{project.description}</p>
							<div class="mt-4 flex flex-wrap gap-2">
								{#each project.tags as tag (tag)}
									<span class="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-500"
										>{tag}</span
									>
								{/each}
							</div>
						</a>
					{:else}
						<div class="block rounded-lg border border-neutral-200 bg-parchment p-6 shadow-sm">
							<div class="mb-4 flex items-center justify-between">
								<div class="flex items-center gap-2">
									<div class="h-8 w-8 rounded-md {colors.bg} flex items-center justify-center">
										<span class="{project.icon} size-4 {colors.text}"></span>
									</div>
									<span class="text-xs font-medium tracking-wide text-neutral-400 uppercase"
										>{project.type}</span
									>
									{#if project.opensource}
										<span class="rounded bg-sage/15 px-1.5 py-0.5 text-xs font-medium text-sage"
											>OSS</span
										>
									{/if}
								</div>
							</div>
							<h3 class="text-lg font-semibold text-neutral-700">{project.title}</h3>
							<p class="mt-2 text-sm leading-relaxed text-neutral-500">{project.description}</p>
							<div class="mt-4 flex flex-wrap gap-2">
								{#each project.tags as tag (tag)}
									<span class="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-500"
										>{tag}</span
									>
								{/each}
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</section>
{/each}
