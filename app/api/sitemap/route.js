import { getPostsForSiteMap } from '@/app/lib/action';

export async function GET() {
	const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;
	const { posts } = await getPostsForSiteMap();

	let urls = posts
		.map(
			(post) => `
      <url>
        <loc>${BASE_URL}/posts/${encodeURIComponent(post.slug)}</loc>
        <lastmod>${new Date(post.updatedAt).toISOString()}</lastmod>
        <priority>0.8</priority>
      </url>`,
		)
		.join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${BASE_URL}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>1.0</priority>
    </url>
    ${urls}
  </urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'text/xml',
			'Cache-Control': 'public, max-age=3600',
		},
	});
}
