'use client';

import React, { useContext } from 'react';
import styles from './categoryList.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';

const CategoryList = () => {
	const { categoryList = [] } = useContext(ThemeContext) || {};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Popular Category</h1>

			<div className={styles.categories}>
				{categoryList.map((category) => (
					<Link
						key={category.id}
						href='/blog?cat=style'
						className={`${styles.category} ${styles[category.title]}`}>
						<Image
							src={category.src}
							alt={category.title}
							width={32}
							height={32}
							className={styles.image}
						/>
						{category.title}
					</Link>
				))}
			</div>
		</div>
	);
};

export default CategoryList;
