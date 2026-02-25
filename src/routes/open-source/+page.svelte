<svelte:head>
	<title>Open Source — Doxa Labs</title>
	<meta name="description" content="Our open-source philosophy, how we build in public, and how you can contribute." />
</svelte:head>

<section class="px-6 pt-24 pb-12 sm:pt-32 sm:pb-16">
	<div class="max-w-[75rem] mx-auto">
		<div class="max-w-2xl">
			<p class="text-clay font-medium text-sm tracking-wide uppercase mb-4">Open Source</p>
			<h1 class="text-4xl sm:text-5xl font-bold text-umber leading-tight tracking-tight">
				Open by default
			</h1>
			<p class="mt-6 text-lg text-neutral-600 max-w-prose leading-relaxed">
				We build in public. Our code, our process, our mistakes — all out in the open. Here's why, and how you can be part of it.
			</p>
		</div>
	</div>
</section>

<!-- Philosophy -->
<section class="px-6 py-12 sm:py-16">
	<div class="max-w-[75rem] mx-auto">
		<div class="max-w-2xl space-y-6 text-neutral-600 leading-relaxed">
			<h2 class="text-2xl font-semibold text-umber tracking-tight">Our philosophy</h2>
			<p>
				Open source isn't a business strategy for us. It's a belief about how good software gets made. When code is public, it gets better — more eyes find more bugs, more perspectives lead to better APIs, and more people benefit from the work.
			</p>
			<p>
				Every tool we build starts as an open repo. We don't build in private and release later. The first commit is public. The messy early code is public. The discussions about what to name things are public. We think transparency about the process is as valuable as the final product.
			</p>
			<p>
				We're inspired by the artisans of Exodus 31 — craftsmen given wisdom and skill to build something worthy. A workshop isn't a closed room. It's a place where people learn by watching, asking, and eventually building alongside you.
			</p>
		</div>
	</div>
</section>

<!-- How to contribute -->
<section class="px-6 py-12 sm:py-16 bg-neutral-50">
	<div class="max-w-[75rem] mx-auto">
		<div class="max-w-2xl">
			<h2 class="text-2xl font-semibold text-umber tracking-tight mb-8">How to contribute</h2>
			<div class="space-y-8">
				<div class="flex gap-4">
					<div class="w-8 h-8 rounded-md bg-clay/10 flex items-center justify-center shrink-0 mt-0.5">
						<span class="text-clay font-semibold text-sm">1</span>
					</div>
					<div>
						<h3 class="text-umber font-semibold">Pick a project</h3>
						<p class="text-neutral-500 mt-1 text-sm leading-relaxed">
							Browse our <a href="/projects" class="text-clay underline decoration-clay/30 hover:decoration-clay">projects page</a> or our <a href="https://github.com/doxalabs" target="_blank" rel="noopener noreferrer" class="text-clay underline decoration-clay/30 hover:decoration-clay">GitHub org</a>. Each repo has a README explaining what it does and how to set it up.
						</p>
					</div>
				</div>

				<div class="flex gap-4">
					<div class="w-8 h-8 rounded-md bg-clay/10 flex items-center justify-center shrink-0 mt-0.5">
						<span class="text-clay font-semibold text-sm">2</span>
					</div>
					<div>
						<h3 class="text-umber font-semibold">Start small</h3>
						<p class="text-neutral-500 mt-1 text-sm leading-relaxed">
							Fix a typo. Improve an error message. Add a test case. Small contributions are real contributions. They help you learn the codebase and they help us ship better software.
						</p>
					</div>
				</div>

				<div class="flex gap-4">
					<div class="w-8 h-8 rounded-md bg-clay/10 flex items-center justify-center shrink-0 mt-0.5">
						<span class="text-clay font-semibold text-sm">3</span>
					</div>
					<div>
						<h3 class="text-umber font-semibold">Open an issue first</h3>
						<p class="text-neutral-500 mt-1 text-sm leading-relaxed">
							For larger changes, open an issue before writing code. Describe what you want to change and why. This saves everyone time — we might already be working on it, or we might have context that changes the approach.
						</p>
					</div>
				</div>

				<div class="flex gap-4">
					<div class="w-8 h-8 rounded-md bg-clay/10 flex items-center justify-center shrink-0 mt-0.5">
						<span class="text-clay font-semibold text-sm">4</span>
					</div>
					<div>
						<h3 class="text-umber font-semibold">Submit a PR</h3>
						<p class="text-neutral-500 mt-1 text-sm leading-relaxed">
							Keep PRs focused. One change per PR. Write a clear description of what you changed and why. We review everything and try to respond within a few days.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Principles -->
<section class="px-6 py-12 sm:py-16">
	<div class="max-w-[75rem] mx-auto">
		<div class="max-w-2xl">
			<h2 class="text-2xl font-semibold text-umber tracking-tight mb-8">What we care about in contributions</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
				<div class="border border-neutral-200 rounded-lg p-5">
					<h3 class="text-umber font-semibold text-sm">Clarity over cleverness</h3>
					<p class="text-neutral-500 mt-2 text-sm leading-relaxed">
						Code that's easy to read is more valuable than code that's impressive. If a reviewer has to puzzle over what your code does, simplify it.
					</p>
				</div>
				<div class="border border-neutral-200 rounded-lg p-5">
					<h3 class="text-umber font-semibold text-sm">Tests are not optional</h3>
					<p class="text-neutral-500 mt-2 text-sm leading-relaxed">
						If you add a feature, add a test. If you fix a bug, add a test that would have caught it. Tests are how we stay confident in the code.
					</p>
				</div>
				<div class="border border-neutral-200 rounded-lg p-5">
					<h3 class="text-umber font-semibold text-sm">Small PRs ship faster</h3>
					<p class="text-neutral-500 mt-2 text-sm leading-relaxed">
						A 50-line PR gets reviewed in a day. A 500-line PR sits for a week. Break large changes into smaller, shippable pieces.
					</p>
				</div>
				<div class="border border-neutral-200 rounded-lg p-5">
					<h3 class="text-umber font-semibold text-sm">Be kind</h3>
					<p class="text-neutral-500 mt-2 text-sm leading-relaxed">
						Code review is a conversation, not a judgment. We critique code, not people. Everyone here is trying to build something good.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="px-6 py-16 sm:py-20 pb-24">
	<div class="max-w-[75rem] mx-auto">
		<div class="max-w-2xl">
			<h2 class="text-2xl font-semibold text-umber tracking-tight">Ready to contribute?</h2>
			<p class="mt-4 text-neutral-500 leading-relaxed">
				Browse our repos, find something interesting, and jump in. No formal application, no onboarding process. Just good code and good intentions.
			</p>
			<a
				href="https://github.com/doxalabs"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 mt-6 bg-clay text-parchment px-5 py-2.5 rounded-md font-medium hover:bg-clay/85 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
			>
				<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
				</svg>
				Browse repos on GitHub
			</a>
		</div>
	</div>
</section>
