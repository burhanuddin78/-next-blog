import styles from './homepage.module.css';
import Featured from '@/app/ui/components/featured/Featuerd';
import CategoryList from '@/app/ui/components/categoryList/CategoryList';
import CardList from '@/app/ui/components/cardList/CardList';
import Menu from '@/app/ui/components/menu/Menu';
import Head from 'next/head';

import { getFeaturedPost, getCategories, getAllPosts } from './lib/action';

export default async function Home(props) {
	const searchParams = await props.searchParams;
	const page = searchParams?.page || 1;

	const { featuredPost } = await getFeaturedPost();
	const category = await getCategories();
	const { posts, count } = await getAllPosts({ page });

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'AIStory Heaven – The Ultimate Blog App',
		itemListElement: posts?.map((post, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			url: post.coverImage ? `${process.env.NEXT_PUBLIC_MEDIA_URL}${post.coverImage}` : '/p1.jpeg',
			name: post.title,
		})),
	};

	return (
		<>
			<Head>
				<title>AIStory Heaven – The Ultimate Blog App</title>
				<meta
					name='description'
					content='Explore nightly AI-generated stories and unleash your imagination!'
				/>
				<link
					rel='canonical'
					href={`${process.env.NEXT_PUBLIC_SITE_URL}/`}
				/>

				{/* Open Graph (Facebook, LinkedIn) */}
				<meta
					property='og:title'
					content='AIStory Heaven – The Ultimate Blog App'
				/>
				<meta
					property='og:description'
					content='Explore nightly AI-generated stories and unleash your imagination!'
				/>
				<meta
					property='og:url'
					href={`${process.env.NEXT_PUBLIC_SITE_URL}/`}
				/>
				<meta
					property='og:type'
					content='website'
				/>
				<meta
					property='og:image'
					content={`${process.env.NEXT_PUBLIC_SITE_URL}/default-thumbnail.jpg`}
				/>

				{/* Twitter Card */}
				<meta
					name='twitter:card'
					content='summary_large_image'
				/>
				<meta
					name='twitter:title'
					content='Latest Blog Posts | My Blog'
				/>
				<meta
					name='twitter:description'
					content='Explore the latest tech and programming blogs on My Blog.'
				/>
				<meta
					name='twitter:image'
					content={`${process.env.NEXT_PUBLIC_SITE_URL}/default-thumbnail.jpg`}
				/>

				{/* JSON-LD Structured Data */}
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>

				{page > 1 && (
					<link
						rel='prev'
						href={`${process.env.NEXT_PUBLIC_SITE_URL}/?page=${page - 1}`}
					/>
				)}
				{count > page * 10 && (
					<link
						rel='next'
						href={`${process.env.NEXT_PUBLIC_SITE_URL}/?page=${page + 1}`}
					/>
				)}
			</Head>
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
		</>
	);
}
