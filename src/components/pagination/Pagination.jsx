import React from 'react';
import styles from './pagination.module.css';

const Pagination = () => {
	return (
		<div className={styles.container}>
			<button className={styles.button}>Prev Page</button>
			<button className={styles.button}>Next Page</button>
		</div>
	);
};

export default Pagination;
