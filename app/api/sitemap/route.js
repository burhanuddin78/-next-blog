import { getPostsForSiteMap } from '@/app/lib/action';

export async function GET() {
	const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;
	const { posts } = await getPostsForSiteMap(); // Fetch blog posts from DB

	let urls = posts.map((post) => `<url><loc>${BASE_URL}/posts/${post.slug}</loc></url>`).join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>${BASE_URL}</loc></url>
    ${urls}
  </urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'text/xml',
		},
	});
}
