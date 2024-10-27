'use client';

import React, { useContext } from 'react';
import styles from './menu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';

import MenuCategories from '../MenuCategories/MenuCategories';

const Menu = () => {
	let { categoryList = [] } = useContext(ThemeContext) || {};

	return (
		<div className={styles.container}>
			<h2 className={styles.subtitle}>{"What's hot"}</h2>
			<h1 className={styles.title}>Most Popular</h1>
			<div className={styles.items}>
				{categoryList.slice(0, 4).map((category) => (
					<Link
						key={category.id}
						href='/'
						className={styles.item}>
						<div className={styles.textContainer}>
							<span
								className={`${styles.category}`}
								style={{ backgroundColor: `${category.color}` }}>
								{category.title}
							</span>
							<h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
							<div className={styles.detail}>
								<span className={styles.username}>John Doe</span>
								<span className={styles.date}>- 10.03.2023</span>
							</div>
						</div>
					</Link>
				))}
			</div>

			<h2 className={styles.subtitle}>{'Discover by topic'}</h2>
			<h1 className={styles.title}>Categories </h1>
			<MenuCategories category={categoryList} />

			<h2 className={styles.subtitle}>{'chosen by the editor'}</h2>
			<h1 className={styles.title}>Editors Pick </h1>
			<div className={styles.items}>
				{categoryList.slice(0, 4).map((category) => (
					<Link
						key={category.id}
						href='/'
						className={styles.item}>
						<div className={styles.imageContainer}>
							<Image
								src='/p1.jpeg'
								alt='avatar'
								fill
								className={styles.image}
							/>
						</div>
						<div className={styles.textContainer}>
							<span
								className={`${styles.category}`}
								style={{ backgroundColor: `${category.color}` }}>
								{category.title}
							</span>
							<h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
							<div className={styles.detail}>
								<span className={styles.username}>John Doe</span>
								<span className={styles.date}>- 10.03.2023</span>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Menu;
