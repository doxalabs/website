<script lang="ts">
	import { page } from '$app/state';

	const links = [
		{ href: '/guides/brand', label: 'Brand Guide', icon: 'icon-[lucide--gem]' },
		{
			href: '/guides/design-system',
			label: 'Design System',
			icon: 'icon-[lucide--layout-template]'
		},
		{ href: '/guides/content', label: 'Content Standards', icon: 'icon-[lucide--pen-line]' }
	];
</script>

<aside class="lg:sticky lg:top-24 lg:self-start">
	<div class="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
		<a
			href="/guides"
			class="inline-flex items-center gap-1 text-sm font-medium text-clay hover:text-umber transition-colors duration-150"
		>
			<span class="icon-[lucide--arrow-left] size-4"></span>
			Back to all guides
		</a>

		<div class="mt-4 border-t border-neutral-200 pt-4 space-y-1">
			{#each links as link (link.href)}
				<a
					href={link.href}
					aria-current={page.url.pathname === link.href ? 'page' : undefined}
					class="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 {page.url.pathname === link.href ? 'bg-clay/10 text-clay' : 'text-neutral-600 hover:text-umber hover:bg-neutral-100'}"
				>
					<span class="{link.icon} size-4"></span>
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</aside>
