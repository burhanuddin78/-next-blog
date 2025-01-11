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
				<Image
					src='/facebook.png'
					alt='facebook'
					height={24}
					width={24}
				/>
				<Image
					src='/instagram.png'
					alt='instagram'
					height={24}
					width={24}
				/>
				<Image
					src='/youtube.png'
					alt='youtube'
					height={24}
					width={24}
				/>
			</div>
			<div className={styles.logo}>Test Blog</div>

			<div className={styles.links}>
				<ThemeToggle />
				<Link
					href='/'
					className={styles.link}>
					Home
				</Link>
				<Link
					href='/contact'
					className={styles.link}>
					Contact
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
