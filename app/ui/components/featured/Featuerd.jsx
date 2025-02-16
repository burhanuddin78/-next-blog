import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';
import { sanitizeAndTruncate } from '@/app/utils/sanitize';
import Link from 'next/link';

const Featured = ({ data: { title, description, coverImage, slug } }) => {
	const truncatedHTML = sanitizeAndTruncate(description, 450);

	// const handleReadMore = () => redirect(`/blog/${slug}`);

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<b>Welcome to AIStory Heaven!</b>
				{'  '}
				Explore captivating stories, imaginative ideas, and the art of creative storytelling.
			</h1>
			<div className={styles.post}>
				<div className={styles.imageContainer}>
					<Image
						className={styles.image}
						src={coverImage ? `${process.env.NEXT_PUBLIC_MEDIA_URL}${coverImage}` : '/p1.jpeg'}
						alt='image'
						fill
						priority
					/>
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.postTitle}>{title}</h1>
					<p
						className={styles.postDescription}
						dangerouslySetInnerHTML={{ __html: truncatedHTML }}
					/>
					<Link
						href={`/posts/${slug}`}
						className={styles.button}>
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Featured;
