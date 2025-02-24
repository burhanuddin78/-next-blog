import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';

const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.socialIcon}>
				<Link
					href='https://www.facebook.com'
					target='_blank'>
					<Image
						src='/facebook.png'
						alt='facebook'
						height={24}
						width={24}
					/>
				</Link>
				<Link
					href='https://www.instagram.com'
					target='_blank'>
					<Image
						src='/instagram.png'
						alt='instagram'
						height={24}
						width={24}
					/>
				</Link>
				<Link
					href='https://www.youtube.com'
					target='_blank'>
					<Image
						src='/youtube.png'
						alt='youtube'
						height={24}
						width={24}
					/>
				</Link>
			</div>
			<div className={styles.logo}>AIStory Heaven</div>

			<div className={styles.links}>
				<ThemeToggle />
				<Link
					href='/'
					className={styles.link}>
					Home
				</Link>
				<Link
					href='/blogs'
					className={styles.link}>
					Blogs
				</Link>
				<Link
					href='/about'
					className={styles.link}>
					About
				</Link>
				<AuthLinks />
			</div>
		</div>
	);
};

export default Navbar;
