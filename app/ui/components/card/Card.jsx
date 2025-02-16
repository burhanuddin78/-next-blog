import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { sanitizeAndTruncate } from '@/app/utils/sanitize';
import { formatRegionalDate, capitalizeFirstLetter } from '../../helpers/helper';

const Card = ({ item: { title, description, category, coverImage, publishedAt, slug } }) => {
	const truncatedHTML = sanitizeAndTruncate(description, 200);

	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image
					src={coverImage ? `${process.env.NEXT_PUBLIC_MEDIA_URL}${coverImage}` : '/p1.jpeg'}
					alt=''
					fill
					priority
					className={styles.image}
				/>
			</div>
			<div className={styles.textContainer}>
				<div className={styles.detail}>
					<div className={styles.date}>{formatRegionalDate(publishedAt)} -</div>

					<div className={styles.category}>{capitalizeFirstLetter(category?.title || '')}</div>
				</div>
				<Link href={`/posts/${slug}`}>
					<h1>{title}</h1>
				</Link>
				<p
					className={styles.desc}
					dangerouslySetInnerHTML={{ __html: truncatedHTML }}
				/>

				<Link
					className={styles.link}
					href={`/posts/${slug}`}>
					Read More
				</Link>
			</div>
		</div>
	);
};

export default Card;
