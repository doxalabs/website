<script lang="ts">
	import { projects } from '$lib/projects';
	const ossProjects = projects.filter((p) => p.opensource && p.featured);
</script>

<svelte:head>
	<title>Open Source — Doxa Labs</title>
	<meta
		name="description"
		content="Our open-source philosophy, how we build in public, and how you can contribute."
	/>
</svelte:head>

<section class="px-6 pt-24 pb-12 sm:pt-32 sm:pb-16">
	<div class="mx-auto max-w-[75rem]">
		<div class="max-w-2xl">
			<p class="mb-4 text-sm font-medium tracking-wide text-clay uppercase">Open Source</p>
			<h1 class="text-4xl leading-tight font-bold tracking-tight text-umber sm:text-5xl">
				Open by default
			</h1>
			<p class="mt-6 max-w-prose text-lg leading-relaxed text-neutral-600">
				We build in public. Our code, our process, our mistakes — all out in the open. Here's why,
				and how you can be part of it.
			</p>
		</div>
	</div>
</section>

<!-- Philosophy -->
<section class="px-6 py-12 sm:py-16">
	<div class="mx-auto max-w-[75rem]">
		<div class="max-w-2xl space-y-6 leading-relaxed text-neutral-600">
			<h2 class="text-2xl font-semibold tracking-tight text-umber">Our philosophy</h2>
			<p>
				Open source isn't a business strategy for us. It's a belief about how good software gets
				made. When code is public, it gets better — more eyes find more bugs, more perspectives lead
				to better APIs, and more people benefit from the work.
			</p>
			<p>
				Every tool we build starts as an open repo. We don't build in private and release later. The
				first commit is public. The messy early code is public. The discussions about what to name
				things are public. We think transparency about the process is as valuable as the final
				product.
			</p>
			<p>
				We're inspired by the artisans of Exodus 31 — craftsmen given wisdom and skill to build
				something worthy. A workshop isn't a closed room. It's a place where people learn by
				watching, asking, and eventually building alongside you.
			</p>
		</div>
	</div>
</section>

<!-- Our Repos -->
<section class="bg-neutral-50 px-6 py-12 sm:py-16">
	<div class="mx-auto max-w-[75rem]">
		<div class="mb-8 flex items-end justify-between">
			<div>
				<h2 class="text-2xl font-semibold tracking-tight text-umber">Our repos</h2>
				<p class="mt-2 text-sm text-neutral-500">A few things we've open-sourced.</p>
			</div>
			<a
				href="/projects"
				class="hidden items-center gap-1 text-sm font-medium text-neutral-500 transition-colors duration-150 hover:text-umber sm:inline-flex"
			>
				View all
				<span class="icon-[lucide--chevron-right] size-4"></span>
			</a>
		</div>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each ossProjects as project (project.title)}
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					class="group block rounded-lg border border-neutral-200 px-5 py-4 transition-colors duration-150 hover:border-neutral-300"
				>
					<div class="flex items-center justify-between">
						<h3
							class="font-semibold text-umber transition-colors duration-150 group-hover:text-clay"
						>
							{project.title}
						</h3>
						<span
							class="icon-[lucide--arrow-up-right] size-3.5 text-neutral-300 transition-colors duration-150 group-hover:text-neutral-500"
						></span>
					</div>
					<p class="mt-1 line-clamp-2 text-sm leading-relaxed text-neutral-500">
						{project.description}
					</p>
					<div class="mt-3 flex flex-wrap gap-1.5">
						{#each project.tags as tag (tag)}
							<span class="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-400"
								>{tag}</span
							>
						{/each}
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- How to contribute -->
<section class="px-6 py-12 sm:py-16">
	<div class="mx-auto max-w-[75rem]">
		<div class="max-w-2xl">
			<h2 class="mb-8 text-2xl font-semibold tracking-tight text-umber">How to contribute</h2>
			<div class="space-y-8">
				<div class="flex gap-4">
					<div
						class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-clay/10"
					>
						<span class="text-sm font-semibold text-clay">1</span>
					</div>
					<div>
						<h3 class="font-semibold text-umber">Pick a project</h3>
						<p class="mt-1 text-sm leading-relaxed text-neutral-500">
							Browse our <a
								href="/projects"
								class="text-clay underline decoration-clay/30 hover:decoration-clay"
								>projects page</a
							>
							or our
							<a
								href="https://github.com/doxalabs"
								target="_blank"
								rel="noopener noreferrer"
								class="text-clay underline decoration-clay/30 hover:decoration-clay">GitHub org</a
							>. Each repo has a README explaining what it does and how to set it up.
						</p>
					</div>
				</div>

				<div class="flex gap-4">
					<div
						class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-clay/10"
					>
						<span class="text-sm font-semibold text-clay">2</span>
					</div>
					<div>
						<h3 class="font-semibold text-umber">Start small</h3>
						<p class="mt-1 text-sm leading-relaxed text-neutral-500">
							Fix a typo. Improve an error message. Add a test case. Small contributions are real
							contributions. They help you learn the codebase and they help us ship better software.
						</p>
					</div>
				</div>

				<div class="flex gap-4">
					<div
						class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-clay/10"
					>
						<span class="text-sm font-semibold text-clay">3</span>
					</div>
					<div>
						<h3 class="font-semibold text-umber">Open an issue first</h3>
						<p class="mt-1 text-sm leading-relaxed text-neutral-500">
							For larger changes, open an issue before writing code. Describe what you want to
							change and why. This saves everyone time — we might already be working on it, or we
							might have context that changes the approach.
						</p>
					</div>
				</div>

				<div class="flex gap-4">
					<div
						class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-clay/10"
					>
						<span class="text-sm font-semibold text-clay">4</span>
					</div>
					<div>
						<h3 class="font-semibold text-umber">Submit a PR</h3>
						<p class="mt-1 text-sm leading-relaxed text-neutral-500">
							Keep PRs focused. One change per PR. Write a clear description of what you changed and
							why. We review everything and try to respond within a few days.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Principles -->
<section class="px-6 py-12 sm:py-16">
	<div class="mx-auto max-w-[75rem]">
		<div class="max-w-2xl">
			<h2 class="mb-8 text-2xl font-semibold tracking-tight text-umber">Our standards</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
				<div class="rounded-lg border border-neutral-200 p-5">
					<h3 class="text-sm font-semibold text-umber">Clarity over cleverness</h3>
					<p class="mt-2 text-sm leading-relaxed text-neutral-500">
						Code that's easy to read is more valuable than code that's impressive. If a reviewer has
						to puzzle over what your code does, simplify it.
					</p>
				</div>
				<div class="rounded-lg border border-neutral-200 p-5">
					<h3 class="text-sm font-semibold text-umber">Tests are not optional</h3>
					<p class="mt-2 text-sm leading-relaxed text-neutral-500">
						If you add a feature, add a test. If you fix a bug, add a test that would have caught
						it. Tests are how we stay confident in the code.
					</p>
				</div>
				<div class="rounded-lg border border-neutral-200 p-5">
					<h3 class="text-sm font-semibold text-umber">Small PRs ship faster</h3>
					<p class="mt-2 text-sm leading-relaxed text-neutral-500">
						A 50-line PR gets reviewed in a day. A 500-line PR sits for a week. Break large changes
						into smaller, shippable pieces.
					</p>
				</div>
				<div class="rounded-lg border border-neutral-200 p-5">
					<h3 class="text-sm font-semibold text-umber">Be kind</h3>
					<p class="mt-2 text-sm leading-relaxed text-neutral-500">
						Code review is a conversation, not a judgment. We critique code, not people. Everyone
						here is trying to build something good.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="px-6 py-16 pb-24 sm:py-20">
	<div class="mx-auto max-w-[75rem]">
		<div class="max-w-2xl">
			<h2 class="text-2xl font-semibold tracking-tight text-umber">Ready to contribute?</h2>
			<p class="mt-4 leading-relaxed text-neutral-500">
				Browse our repos, find something interesting, and jump in. No formal application, no
				onboarding process. Just good code and good intentions.
			</p>
			<a
				href="https://github.com/doxalabs"
				target="_blank"
				rel="noopener noreferrer"
				class="mt-6 inline-flex items-center gap-2 rounded-md bg-clay px-5 py-2.5 font-medium text-parchment transition-colors duration-150 hover:bg-clay/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
			>
				<span class="icon-[mdi--github] size-4"></span>
				Browse repos on GitHub
			</a>
		</div>
	</div>
</section>
