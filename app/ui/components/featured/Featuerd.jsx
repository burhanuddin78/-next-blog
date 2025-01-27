import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = ({ data: { title, description, category, coverImage } }) => {
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
					/>
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.postTitle}>{title}</h1>
					<p className={styles.postDescription}>{description ? description.substr(0, 500) + '....' : ''}</p>
					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
