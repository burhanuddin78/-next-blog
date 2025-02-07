import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image
					src='/p1.jpeg'
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
					<h1>Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
				</Link>

				<p className={styles.desc}>
					Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur
					adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet.....
				</p>

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
