import { getPostsForSiteMap, getCategories } from '@/app/lib/action';
import fs from 'fs';
import path from 'path';

export async function GET(req) {
	if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
		return Response.json({ success: false, message: 'Unauthorized' }, { status: 401 });
	}
	const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;
	const { posts } = await getPostsForSiteMap();
	const categories = await getCategories();

	const urls = posts
		.map(
			(post) => `
      <url>
        <loc>${BASE_URL}/posts/${encodeURIComponent(post.slug)}</loc>
        <lastmod>${new Date(post.updatedAt).toISOString()}</lastmod>
        <priority>0.8</priority>
      </url>
    `,
		)
		.join('');

	// Generate category URLs
	const categoryUrls = categories
		.map(
			(category) => `
				<url>
				  <loc>${BASE_URL}/blogs?cat=${encodeURIComponent(category.title)}</loc>
				  <lastmod>${new Date(category.updatedAt || new Date()).toISOString()}</lastmod>
				  <priority>0.7</priority>
				</url>
			  `,
		)
		.join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${BASE_URL}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>1.0</priority>
      </url>
	${categoryUrls}
      ${urls}
    </urlset>`;

	// Save the sitemap to /public
	const filePath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
	fs.writeFileSync(filePath, sitemap);

	return new Response('✅ Sitemap generated successfully!', { status: 200 });
}
