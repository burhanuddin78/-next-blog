import React from 'react';
import styles from './menu.module.css';
import Link from 'next/link';
import Image from 'next/image';

import { getEditorChoicePosts, getCategories, getMostPopular } from '@/app/lib/action';

import MenuCategories from '../menuCategories/MenuCategories';
import { capitalizeFirstLetter, formatRegionalDate } from '../../helpers/helper';

// const Menu = ({ category, editorsChoice = [] }) => {
async function Menu() {
	// let { categoryList = [] } = useContext(ThemeContext) || {};

	const category = await getCategories();

	const { posts } = await getMostPopular();
	const { editorsChoice } = await getEditorChoicePosts();

	return (
		<div className={styles.container}>
			<h2 className={styles.subtitle}>{"What's hot"}</h2>
			<h1 className={styles.title}>Most Popular</h1>
			<div className={styles.items}>
				{posts &&
					(posts || [])?.map((post) => (
						<Link
							key={post._id}
							href={`/posts/${post.slug}`}
							className={styles.item}>
							<div className={styles.textContainer}>
								<span
									className={`${styles.category}`}
									style={{ backgroundColor: `${post?.category?.color}` }}>
									{capitalizeFirstLetter(post?.category?.title || '')}
								</span>
								<h3 className={styles.postTitle}>{post.title}</h3>
								<div className={styles.detail}>
									<span className={styles.username}>{capitalizeFirstLetter(post.editor)}</span>
									<span className={styles.date}> - {formatRegionalDate(post.publishedAt)}</span>
								</div>
							</div>
						</Link>
					))}
			</div>

			<h2 className={styles.subtitle}>{'Discover by topic'}</h2>
			<h1 className={styles.title}>Categories </h1>
			<MenuCategories category={category} />

			<h2 className={styles.subtitle}>{'chosen by the editor'}</h2>
			<h1 className={styles.title}>Editors Pick </h1>
			<div className={styles.items}>
				{editorsChoice.map((post) => (
					<Link
						key={post.id}
						href={`/posts/${post.slug}`}
						className={styles.item}>
						<div className={styles.imageContainer}>
							<Image
								src={post.coverImage ? `${process.env.NEXT_PUBLIC_MEDIA_URL}${post.coverImage}` : '/p1.jpeg'}
								alt='avatar'
								fill
								className={styles.image}
							/>
						</div>
						<div className={styles.textContainer}>
							<span
								className={`${styles.category}`}
								style={{ backgroundColor: `${post?.category?.color}` }}>
								{post?.category?.title}
							</span>
							<h3 className={styles.postTitle}>{post.title}</h3>
							<div className={styles.detail}>
								<span className={styles.username}>{capitalizeFirstLetter(post.editor)}</span>
								<span className={styles.date}> - {formatRegionalDate(post.publishedAt)}</span>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Menu;
