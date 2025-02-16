import React from 'react';
import styles from './cardList.module.css';
import Pagination from '../pagination/Pagination';
import Card from '../card/Card';

const CardList = ({ data, count }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Recent Posts</h1>

			<div className={styles.posts}>
				{data?.length > 0
					? data.map((x) => (
							<Card
								key={x._id}
								item={x}
							/>
					  ))
					: 'No Blogs Available'}
			</div>

			<Pagination count={count} />
		</div>
	);
};

export default CardList;
