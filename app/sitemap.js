import { getPostsForSiteMap, getCategories } from '@/app/lib/action';

export default async function sitemap() {
	const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;
	const { posts } = await getPostsForSiteMap();
	const categories = await getCategories();

	// Generate post URLs
	const urls = posts.map((post) => ({
		url: `${BASE_URL}/posts/${encodeURIComponent(post.slug)}`,
		lastModified: new Date(post.updatedAt),
		priority: 0.8,
	}));

	// Generate category URLs
	const categoryUrls = categories.map((category) => ({
		url: `${BASE_URL}/blogs?cat=${encodeURIComponent(category.title)}`,
		lastModified: new Date(category.updatedAt || new Date()), // Ensure valid Date object
		priority: 0.7,
	}));

	return [
		{
			url: BASE_URL,
			lastModified: new Date(),
			priority: 1.0,
		},
		...categoryUrls,
		...urls,
	];
}
