import React from 'react';
import styles from './cardList.module.css';
import Pagination from '../pagination/Pagination';
import Card from '../card/Card';
import Image from 'next/image';

const CardList = ({ data }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Recent Posts</h1>

			<div className={styles.posts}>
				{data.length > 0
					? data.map((x) => (
							<Card
								key={x._id}
								item={x}
							/>
					  ))
					: 'No Blogs Available'}
			</div>

			<Pagination />
		</div>
	);
};

export default CardList;
