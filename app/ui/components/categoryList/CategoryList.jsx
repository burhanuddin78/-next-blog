import styles from './categoryList.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '@/app/lib/action';

export default async function CategoryList() {
	const categoryList = await getCategories();

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Popular Category</h1>

			<div className={styles.categories}>
				{Array.isArray(categoryList) &&
					categoryList.map((category) => (
						<Link
							key={category._id}
							href={`/blog?cat=${category.title}`}
							className={`${styles.category} ${styles[category.title]}`}>
							<Image
								src={'/' + category.image}
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
}
