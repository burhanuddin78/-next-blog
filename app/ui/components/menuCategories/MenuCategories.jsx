import Link from 'next/link';
import React from 'react';
import styles from './menuCategories.module.css';

const MenuCategories = ({ category = [] }) => {
	return (
		<div className={styles.categoryList}>
			{category.map((x) => (
				<Link
					key={x.id}
					href={`/blog?cat=${x.title}`}
					style={{ backgroundColor: `${x.color}` }}
					className={`${styles.categoryItem}`}>
					{x.title}
				</Link>
			))}
		</div>
	);
};
export default MenuCategories;
