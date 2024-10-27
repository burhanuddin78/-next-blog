import React from 'react';
import styles from './comments.module.css';
import Image from 'next/image';
const comments = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Comments</h1>

			<div className={styles.write}>
				<textarea
					className={styles.input}
					placeholder='Write a comments...'
				/>
				<button className={styles.button}>Send</button>
			</div>

			<div className={styles.comments}>
				<div className={styles.comment}>
					<Image
						src='/p1.jpeg'
						alt='user'
						height={50}
						width={50}
						className={styles.image}
					/>
					<div className={styles.userInfo}>
						<span className={styles.username}>John Doe</span>
						<span className={styles.date}>01.01.2024</span>
					</div>
				</div>
				<p className={styles.desc}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit ducimus aut facere quo magnam magni placeat. Similique tenetur aut delectus, dolorem
				</p>
			</div>
		</div>
	);
};

export default comments;
