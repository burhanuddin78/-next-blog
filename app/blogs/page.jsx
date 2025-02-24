import React from 'react';
import styles from './blogPage.module.css';
import CardList from '@/app/ui/components/cardList/CardList';
import Menu from '@/app/ui/components/menu/Menu';
import { getAllPosts } from '../lib/action';
import { capitalizeFirstLetter } from '../ui/helpers/helper';

export async function generateMetadata(props) {
	const searchParams = await props.searchParams;

	const page = parseInt(searchParams?.page, 10) || 1;
	const cat = searchParams?.cat || 'All';

	const title = `${capitalizeFirstLetter(cat)} Blogs - Page ${page} | AIStory Heaven`;
	const description = `Discover the latest ${cat !== 'All' ? cat : ''} blogs on AIStory Heaven. Stay informed, inspired, and engaged with our curated content.`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			url: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs?page=${page}&cat=${cat}`,
			siteName: 'AIStory Heaven',
			images: [{ url: `${process.env.NEXT_PUBLIC_SITE_URL}/default-thumbnail.jpg` }],
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [`${process.env.NEXT_PUBLIC_SITE_URL}/default-thumbnail.jpg`],
		},
		other: {
			canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs?page=${page}&cat=${cat}`,
			prev: page > 1 ? `${process.env.NEXT_PUBLIC_SITE_URL}/blogs?page=${page - 1}&cat=${cat}` : undefined,
			next: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs?page=${page + 1}&cat=${cat}`,
		},
	};
}

export default async function BlogPage(props) {
	const params = await props.searchParams;

	const page = parseInt(params?.page, 10) || 1;
	const cat = params?.cat || '';

	const { posts, count } = await getAllPosts({ page, categoryTitle: cat });

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{cat ? capitalizeFirstLetter(cat) : 'All'} Blogs</h1>
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
