export interface JobMeta {
	slug: string;
	title: string;
	tags: string[];
	excerpt: string;
}

function getJobsMeta(): JobMeta[] {
	const modules = import.meta.glob<{ metadata: Omit<JobMeta, 'slug'> }>(
		'/src/jobs/*.md',
		{ eager: true }
	);

	return Object.entries(modules).map(([path, module]) => {
		const slug = path.split('/').pop()!.replace('.md', '');
		return { slug, ...module.metadata };
	});
}

export const jobs = getJobsMeta();
