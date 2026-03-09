import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter({ strict: false }) },
	preprocess: [mdsvex({ extensions: ['.md', '.svx'] })],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
