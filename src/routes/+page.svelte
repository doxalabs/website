<script lang="ts">
	import { projects } from '$lib/projects';
	import type { Project } from '$lib/projects';

	const featured = projects.filter((p) => p.featured);

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
	<title>Doxa Labs — Built with intention</title>
	<meta
		name="description"
		content="Doxa Labs is a builder collective. We make tools, share code, and learn in public."
	/>
</svelte:head>

<!-- Hero -->
<section class="px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
	<div class="mx-auto max-w-[75rem]">
		<div class="max-w-2xl">
			<p class="mb-4 text-sm font-medium tracking-wide text-clay uppercase">Builder Collective</p>
			<h1 class="text-4xl leading-tight font-bold tracking-tight text-umber sm:text-5xl">
				Glory in the details.
			</h1>
			<p class="mt-3 text-sm tracking-wide text-neutral-400">
				doxa (δόξα) labs — <span class="italic">glory, radiance, splendor</span>
			</p>
			<p class="mt-6 max-w-prose text-lg leading-relaxed text-neutral-600">
				Doxa Labs is a collective of builders who believe great software is made with care, shared
				generously, and refined relentlessly. We craft tools, platforms, and open-source projects.
			</p>
			<div class="mt-8 flex flex-wrap gap-4">
				<a
					href="https://github.com/doxalabs"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-md bg-clay px-5 py-2.5 font-medium text-parchment transition-colors duration-150 hover:bg-clay/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
				>
					<span class="icon-[mdi--github] size-5"></span>
					View on GitHub
				</a>
				<a
					href="#work"
					class="inline-flex items-center rounded-md border border-neutral-300 px-5 py-2.5 font-medium text-neutral-700 transition-colors duration-150 hover:bg-neutral-100"
				>
					See our work
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Featured Work -->
<section id="work" class="bg-neutral-50 px-6 py-20 sm:py-24">
	<div class="mx-auto max-w-[75rem]">
		<div class="mb-12 flex items-end justify-between">
			<div>
				<p class="mb-2 text-sm font-medium tracking-wide text-clay uppercase">Featured Work</p>
				<h2 class="text-3xl font-semibold tracking-tight text-umber">What we're building</h2>
			</div>
			<a
				href="/projects"
				class="hidden items-center gap-1 text-sm font-medium text-neutral-500 transition-colors duration-150 hover:text-umber sm:inline-flex"
			>
				View all
				<span class="icon-[lucide--chevron-right] size-4"></span>
			</a>
		</div>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each featured as project (project.title)}
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
		<div class="mt-8 sm:hidden">
			<a
				href="/projects"
				class="inline-flex items-center gap-1 text-sm font-medium text-neutral-500 transition-colors duration-150 hover:text-umber"
			>
				View all projects
				<span class="icon-[lucide--chevron-right] size-4"></span>
			</a>
		</div>
	</div>
</section>

<!-- What We Do -->
<section id="about" class="px-6 py-20 sm:py-24">
	<div class="mx-auto max-w-[75rem]">
		<div class="max-w-2xl">
			<p class="mb-2 text-sm font-medium tracking-wide text-clay uppercase">About</p>
			<h2 class="text-3xl font-semibold tracking-tight text-umber">Crafted, not assembled.</h2>
			<div class="mt-6 space-y-4 leading-relaxed text-neutral-600">
				<p>
					Doxa takes its name from the Greek word for "glory" — the kind found not in noise, but in
					craft. We're a small collective of builders who care deeply about the software we make.
				</p>
				<p>
					We build developer tools and platforms. We rebuild tutorials in modern frameworks. We
					create products — free and paid — and share what we learn along the way. Everything we
					ship is made with intention.
				</p>
				<p>
					Inspired by the artisans of Exodus 31, who were filled with wisdom, understanding, and
					skill to build something worthy, we believe the best software comes from treating code as
					craft.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Values -->
<section id="values" class="bg-neutral-50 px-6 py-20 sm:py-24">
	<div class="mx-auto max-w-[75rem]">
		<div class="mb-12">
			<p class="mb-2 text-sm font-medium tracking-wide text-clay uppercase">Our Values</p>
			<h2 class="text-3xl font-semibold tracking-tight text-umber">What we believe</h2>
		</div>
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
			<div>
				<div class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-clay/10">
					<span class="icon-[lucide--paintbrush] size-5 text-clay"></span>
				</div>
				<h3 class="text-lg font-semibold text-umber">Crafted with care</h3>
				<p class="mt-2 text-sm leading-relaxed text-neutral-500">
					Every decision is deliberate. We sweat the details because the details are where quality
					lives. No shortcuts, no half-measures.
				</p>
			</div>

			<div>
				<div class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-sage/15">
					<span class="icon-[lucide--lock-open] size-5 text-sage"></span>
				</div>
				<h3 class="text-lg font-semibold text-umber">Open by default</h3>
				<p class="mt-2 text-sm leading-relaxed text-neutral-500">
					We share our code, our process, and our lessons. Open source isn't a strategy — it's how
					we believe good software should be made.
				</p>
			</div>

			<div>
				<div class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-stone-blue/15">
					<span class="icon-[lucide--clock] size-5 text-stone-blue"></span>
				</div>
				<h3 class="text-lg font-semibold text-umber">Built to last</h3>
				<p class="mt-2 text-sm leading-relaxed text-neutral-500">
					We choose boring technology over hype. We write tests. We document. We build things that
					work today and still work a year from now.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="px-6 py-20 sm:py-24">
	<div class="mx-auto max-w-[75rem] text-center">
		<h2 class="text-2xl font-semibold tracking-tight text-umber sm:text-3xl">The work speaks.</h2>
		<p class="mx-auto mt-4 max-w-md text-neutral-500">
			Follow our journey on GitHub. Star a repo, open an issue, or just say hello.
		</p>
		<a
			href="https://github.com/doxalabs"
			target="_blank"
			rel="noopener noreferrer"
			class="mt-8 inline-flex items-center gap-2 rounded-md bg-umber px-6 py-3 font-medium text-linen transition-colors duration-150 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-umber"
		>
			<span class="icon-[mdi--github] size-5"></span>
			Follow Doxa Labs
		</a>
	</div>
</section>
