import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.logo}>
					<Image
						src='/logo.png'
						alt='logo'
						width={50}
						height={50}
					/>
					<h1 className={styles.LogoText}>Test Blog</h1>
				</div>
				<p className={styles.desc}>
					lorem ipsum dolor sit amet, consectetur adipiscing el, sed do eiusmod, sed do eiusmod tempor incididunt, sed do eiusmod tempor inc, dolore et dol, sed
					do eiusmod tempor inc
				</p>
				<div className={styles.icons}>
					<Image
						src='/facebook.png'
						alt='facebook'
						width={18}
						height={18}
					/>
					<Image
						src='/instagram.png'
						alt='Instagram'
						width={18}
						height={18}
					/>
					<Image
						src='/tiktok.png'
						alt='tiktok'
						width={18}
						height={18}
					/>
					<Image
						src='/youtube.png'
						alt='youtube'
						width={18}
						height={18}
					/>
				</div>
			</div>
			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Links</span>
					<Link href='/Homepage'>Homepage</Link>
					<Link href='/Blog'>Blog</Link>
					<Link href='/About'>About</Link>
					<Link href='/Contact'>Contact</Link>
				</div>
				<div className={styles.list}>
					<span className={styles.listTitle}>Tags</span>
					<Link href='/Style'>Style</Link>
					<Link href='/Coding'>Coding</Link>
					<Link href='/Fashion'>Fashion</Link>
					<Link href='/Travel'>Travel</Link>
				</div>
				<div className={styles.list}>
					<span className={styles.listTitle}>Social</span>
					<Link href='/Facebook'>Facebook</Link>
					<Link href='/Instagram'>Instagram</Link>
					<Link href='/TikTok'>TikTok</Link>
					<Link href='/Youtube'>Youtube</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
