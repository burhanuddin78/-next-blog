import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ item: { title, description, category, coverImage } }) => {
	console.log(title, description, category, coverImage);
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image
					src={coverImage ? `${process.env.NEXT_PUBLIC_MEDIA_URL}${coverImage}` : '/p1.jpeg'}
					alt=''
					fill
					className={styles.image}
				/>
			</div>
			<div className={styles.textContainer}>
				<div className={styles.detail}>
					<div className={styles.date}>11.02.2023 -</div>
					<div className={styles.category}>Culture</div>
				</div>

				<Link href='/'>
					<h1>{title}</h1>
				</Link>

				<p className={styles.desc}>{description ? description.substr(0, 230) + '....' : ''}</p>

				<Link
					className={styles.link}
					href='/'>
					Read More
				</Link>
			</div>
		</div>
	);
};

export default Card;
