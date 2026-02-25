<script lang="ts">
	import { jobs } from '$lib/jobs';
</script>

<svelte:head>
	<title>Careers — Doxa Labs</title>
	<meta
		name="description"
		content="Join Doxa Labs. We're looking for people who care about craft, simplicity, and building tools that last."
	/>
</svelte:head>

<section class="px-6 pt-24 pb-12 sm:pt-32 sm:pb-16">
	<div class="mx-auto max-w-[75rem]">
		<div class="max-w-2xl">
			<p class="mb-4 text-sm font-medium tracking-wide text-clay uppercase">Careers</p>
			<h1 class="text-4xl leading-tight font-bold tracking-tight text-umber sm:text-5xl">
				Build with us
			</h1>
			<p class="mt-6 max-w-prose text-lg leading-relaxed text-neutral-600">
				We're a small team that values craft over speed and clarity over cleverness. If that sounds
				like your kind of work, take a look at what's open.
			</p>
		</div>
	</div>
</section>

<section class="px-6 py-12 pb-24">
	<div class="mx-auto max-w-[75rem]">
		<div class="max-w-2xl space-y-6">
			{#each jobs as job (job.slug)}
				<a
					href="/careers/{job.slug}"
					class="group block rounded-lg border border-neutral-200 p-6 transition-colors duration-150 hover:border-clay/40"
				>
					<div class="flex items-start justify-between gap-4">
						<div>
							<h2
								class="text-lg font-semibold text-umber transition-colors duration-150 group-hover:text-clay"
							>
								{job.title}
							</h2>
							<p class="mt-2 text-sm leading-relaxed text-neutral-500">
								{job.excerpt}
							</p>
							<div class="mt-4 flex flex-wrap gap-2">
								{#each job.tags as tag}
									<span
										class="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600"
										>{tag}</span
									>
								{/each}
							</div>
						</div>
						<span
							class="mt-1 icon-[lucide--chevron-right] size-5 shrink-0 text-neutral-300 transition-colors duration-150 group-hover:text-clay"
						></span>
					</div>
				</a>
			{/each}
		</div>

		<div class="mt-16 max-w-2xl border-t border-neutral-200 pt-8">
			<h2 class="text-xl font-semibold tracking-tight text-umber">Don't see a fit?</h2>
			<p class="mt-3 leading-relaxed text-neutral-500">
				We're always interested in hearing from people who care about building good software. Drop
				us a line at <a
					href="mailto:hello@doxalabs.com"
					class="text-clay underline decoration-clay/30 hover:decoration-clay">hello@doxalabs.com</a
				> with what you're working on and why Doxa Labs interests you.
			</p>
		</div>
	</div>
</section>
