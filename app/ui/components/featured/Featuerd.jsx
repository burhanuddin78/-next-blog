import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
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
						src='/p1.jpeg'
						alt='image'
						fill
					/>
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing el.</h1>
					<p className={styles.postDescription}>
						Lorem ipsum dolor sit amet, consectet adipiscing el. Cupidate, Lorem ipsum dolor sit amet, consectet adipiscing el. Lorem ipsum dolor sit amet, consectet adipiscing el.
						Lorem ipsum dolor sit amet, consectet adipiscing el.
					</p>
					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
