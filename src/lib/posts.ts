interface RawPostMeta {
	title: string;
	date: string;
	excerpt: string;
	tags: string[];
	authors?: string[];
	draft?: boolean;
}

export interface PostMeta extends RawPostMeta {
	slug: string;
	reading_time: string;
}

function calculate_reading_time(content: string): string {
	const text = content
		.replace(/---[\s\S]*?---/, '')
		.replace(/[#*`\[\]()>~_|]/g, '')
		.trim();
	const words = text.split(/\s+/).length;
	const minutes = Math.max(1, Math.round(words / 230));
	return `${minutes} min read`;
}

function get_posts_meta(): PostMeta[] {
	const modules = import.meta.glob<{ metadata: RawPostMeta }>(
		'/src/posts/*.md',
		{ eager: true }
	);

	const raw_files = import.meta.glob<string>(
		'/src/posts/*.md',
		{ eager: true, query: '?raw', import: 'default' }
	);

	const posts: PostMeta[] = Object.entries(modules)
		.map(([path, module]) => {
			const slug = path.split('/').pop()!.replace('.md', '');
			const raw = raw_files[path] ?? '';
			return {
				slug,
				...module.metadata,
				reading_time: calculate_reading_time(raw)
			};
		})
		.filter((post) => !post.draft);

	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const posts = get_posts_meta();

export function format_date(date_string: string): string {
	return new Date(date_string).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}
