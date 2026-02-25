import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const job = await import(`../../../jobs/${params.slug}.md`);
		return {
			content: job.default,
			meta: job.metadata
		};
	} catch {
		error(404, 'Position not found');
	}
};
