export interface PostMeta {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	readingTime: string;
}

function getPostsMeta(): PostMeta[] {
	const modules = import.meta.glob<{ metadata: Omit<PostMeta, 'slug'> }>('/src/posts/*.md', {
		eager: true
	});

	const posts: PostMeta[] = Object.entries(modules).map(([path, module]) => {
		const slug = path.split('/').pop()!.replace('.md', '');
		return { slug, ...module.metadata };
	});

	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const posts = getPostsMeta();

export function formatDate(dateString: string): string {
	return new Date(dateString).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}
