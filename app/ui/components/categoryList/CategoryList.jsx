import styles from './categoryList.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default async function CategoryList({ data }) {
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'AIStory Heaven – The Ultimate Blog App',
		itemListElement: data?.map((category, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: category.title,
			item: `${process.env.NEXT_PUBLIC_SITE_URL}/blog?cat=${category.title}`,
		})),
	};
	return (
		<>
			<Head>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
			</Head>
			<div className={styles.container}>
				<h1 className={styles.title}>Popular Category</h1>

				<div className={styles.categories}>
					{Array.isArray(data) &&
						data.map((category) => (
							<Link
								key={category._id}
								href={`/blog?cat=${category.title}`}
								className={`${styles.category} ${styles[category.title]}`}>
								<Image
									src={'/' + category.image}
									alt={category.title}
									width={32}
									height={32}
									priority
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
