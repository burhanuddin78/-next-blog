import React from 'react';
import styles from './blogPage.module.css';
import CardList from '@/app/ui/components/cardList/CardList';
import Menu from '@/app/ui/components/menu/Menu';
import { getAllPosts } from '../lib/action';
import { capitalizeFirstLetter } from '../ui/helpers/helper';

export default async function BlogPage(props) {
	const searchParams = await props.searchParams;
	const page = searchParams?.page || 1;
	const cat = searchParams?.cat || '';

	const { posts, count } = await getAllPosts({ page, categoryTitle: cat });

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{capitalizeFirstLetter(cat)} Blog</h1>
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
