import { error } from '@sveltejs/kit';
import { posts } from '$lib/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../posts/${params.slug}.md`);
		const index = posts.findIndex((p) => p.slug === params.slug);
		return {
			content: post.default,
			meta: { ...post.metadata, reading_time: posts[index].reading_time },
			prev: posts[index + 1] ?? null,
			next: posts[index - 1] ?? null
		};
	} catch {
		error(404, 'Post not found');
	}
};
