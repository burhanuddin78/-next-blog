import React from 'react';
import styles from './singlePage.module.css';
import Menu from '@/app/ui/components/menu/Menu';
import Comments from '@/app/ui/components/comments/Comments';
import Image from 'next/image';

const SinglePage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.textContainer}>
					<h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et e </h1>

					<div className={styles.user}>
						<div className={styles.userImageContainer}>
							<Image
								src='/p1.jpeg'
								alt=''
								fill
								className={styles.avatar}
							/>
						</div>
						<div className={styles.userTextContainer}>
							<span className={styles.username}>John Doe</span>
							<span className={styles.date}>01.01.2024</span>
						</div>
					</div>
				</div>

				<div className={styles.imageContainer}>
					<Image
						src='/p1.jpeg'
						alt=''
						fill
						className={styles.image}
					/>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.post}>
					<div className={styles.description}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ex sed libero quidem, doloribus laudantium accusantium illo perspiciatis aspernatur maxime expedita
							provident commodi, veritatis vel in molestiae facilis ab debitis. Lorem ipsum dolor sit amet consectetur adipisicing
						</p>
						<h2>veritatis numquam beatae ex tempore</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ex sed libero quidem, doloribus laudantium accusantium illo perspiciatis aspernatur maxime expedita
							provident commodi, veritatis vel in molestiae facilis ab debitis. Lorem ipsum dolor sit amet consectetur adipisicing
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ex sed libero quidem, doloribus laudantium accusantium illo perspiciatis aspernatur maxime expedita
							provident commodi, veritatis vel in molestiae facilis ab debitis. Lorem ipsum dolor sit amet consectetur adipisicing
						</p>
					</div>
					<div className={styles.comments}>
						<Comments />
					</div>
				</div>
				<Menu />
			</div>
		</div>
	);
};

export default SinglePage;
