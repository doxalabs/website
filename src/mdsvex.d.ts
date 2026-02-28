declare module '*.md' {
	import type { Component } from 'svelte';
	export const metadata: Record<string, string>;
	const component: Component;
	export default component;
}
