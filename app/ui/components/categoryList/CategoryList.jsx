import styles from './categoryList.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default async function CategoryList({ data }) {
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'AIStory Heaven – Popular Blog Categories',
		itemListElement: data?.map((category, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: category.title,
			url: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs?cat=${encodeURIComponent(category.title)}`,
		})),
	};

	return (
		<>
			<Head>
				<title>Popular Blog Categories | AIStory Heaven</title>
				<meta
					name='description'
					content='Explore our most popular blog categories at AIStory Heaven. Find articles on various topics curated just for you.'
				/>
				<link
					rel='canonical'
					href={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/categories`}
				/>

				{/* Open Graph (Facebook, LinkedIn) */}
				<meta
					property='og:title'
					content='Popular Blog Categories | AIStory Heaven'
				/>
				<meta
					property='og:description'
					content='Discover trending categories and stories on AIStory Heaven.'
				/>
				<meta
					property='og:url'
					content={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/categories`}
				/>
				<meta
					property='og:type'
					content='website'
				/>
				<meta
					property='og:image'
					content={`${process.env.NEXT_PUBLIC_SITE_URL}/default-category.jpg`}
				/>

				{/* Twitter Meta Tags */}
				<meta
					name='twitter:card'
					content='summary_large_image'
				/>
				<meta
					name='twitter:title'
					content='Popular Blog Categories | AIStory Heaven'
				/>
				<meta
					name='twitter:description'
					content='Explore trending topics and categories on AIStory Heaven.'
				/>
				<meta
					name='twitter:image'
					content={`${process.env.NEXT_PUBLIC_SITE_URL}/default-category.jpg`}
				/>

				{/* JSON-LD Structured Data */}
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
			</Head>

			<div className={styles.container}>
				<h1 className={styles.title}>Popular Categories</h1>

				<div className={styles.categories}>
					{Array.isArray(data) &&
						data.map((category) => (
							<Link
								key={category._id}
								href={`/blogs?cat=${encodeURIComponent(category.title)}`}
								className={`${styles.category} ${styles[category.title]}`}
								aria-label={`View blog posts under ${category.title}`}>
								<Image
									src={`/${category.image}`}
									alt={`${category.title} category`}
									width={32}
									height={32}
									loading='lazy'
									decoding='async'
									className={styles.image}
								/>
								{category.title}
							</Link>
						))}
				</div>
			</div>
		</>
	);
}
