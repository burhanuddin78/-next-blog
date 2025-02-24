import styles from './homepage.module.css';
import Featured from '@/app/ui/components/featured/Featuerd';
import CategoryList from '@/app/ui/components/categoryList/CategoryList';
import CardList from '@/app/ui/components/cardList/CardList';
import Menu from '@/app/ui/components/menu/Menu';
import { getFeaturedPost, getCategories, getAllPosts } from './lib/action';

export async function generateMetadata(props) {
	const params = await props.searchParams;
	const page = parseInt(params?.page, 10) || 1;
	const { posts, count } = await getAllPosts({ page });

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'AIStory Heaven – The Ultimate Blog App',
		itemListElement: posts?.map((post, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			url: post.coverImage ? `${process.env.NEXT_PUBLIC_MEDIA_URL}${post.coverImage}` : `${process.env.NEXT_PUBLIC_SITE_URL}/default-thumbnail.jpg`,
			name: post.title,
		})),
	};

	return {
		title: 'AIStory Heaven – The Ultimate Blog App',
		description: 'Explore nightly AI-generated stories and unleash your imagination!',
		openGraph: {
			title: 'AIStory Heaven – The Ultimate Blog App',
			description: 'Explore nightly AI-generated stories and unleash your imagination!',
			url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
			siteName: 'AIStory Heaven',
			images: [{ url: `${process.env.NEXT_PUBLIC_SITE_URL}/default-thumbnail.jpg` }],
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title: 'AIStory Heaven – The Ultimate Blog App',
			description: 'Explore nightly AI-generated stories and unleash your imagination!',
			images: [`${process.env.NEXT_PUBLIC_SITE_URL}/default-thumbnail.jpg`],
		},
		other: {
			canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
			prev: page > 1 ? `${process.env.NEXT_PUBLIC_SITE_URL}/?page=${page - 1}` : undefined,
			next: count > page * 10 ? `${process.env.NEXT_PUBLIC_SITE_URL}/?page=${page + 1}` : undefined,
		},
		script: [
			{
				type: 'application/ld+json',
				children: JSON.stringify(structuredData),
			},
		],
	};
}

export default async function Home(props) {
	const params = await props.searchParams;
	const page = parseInt(params.page, 10) || 1;

	const { featuredPost } = await getFeaturedPost();
	const category = await getCategories();
	const { posts, count } = await getAllPosts({ page });

	return (
		<div className={styles.container}>
			<Featured data={featuredPost} />
			<CategoryList data={category} />
			<div className={styles.content}>
				<CardList
					page={page}
					count={count}
					data={posts}
				/>
				<Menu />
			</div>
		</div>
	);
}
