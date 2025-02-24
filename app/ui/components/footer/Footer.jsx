import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.info}>
					<div className={styles.logo}>
						<Image
							src='/logo.png'
							alt='logo'
							width={50}
							height={50}
						/>
						<h1 className={styles.logoText}>AIStory Heaven</h1>
					</div>
					<p className={styles.desc}>
						AIStory Heaven is a creative space where captivating stories, imaginative ideas, and the art of storytelling come to life. Dive into a world of
						limitless possibilities and explore narratives that spark your imagination.
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
						<Link href='/'>Homepage</Link>
						<Link href='/blogs'>Blog</Link>
						<Link href='/about'>About</Link>
						{/* <Link href='/contact'>Contact</Link> */}
					</div>
					<div className={styles.list}>
						<span className={styles.listTitle}>Tags</span>
						<Link href='/blogs?cat=style'>Style</Link>
						<Link href='/blogs?cat=coding'>Coding</Link>
						<Link href='/blogs?cat=fashion'>Fashion</Link>
						<Link href='/blogs?cat=travel'>Travel</Link>
						<Link href='/blogs?cat=culture'>Culture</Link>
					</div>
					<div className={styles.list}>
						<span className={styles.listTitle}>Social</span>
						<Link
							href='https://www.facebook.com'
							target='_blank'>
							Facebook
						</Link>
						<Link
							href='https://www.instagram.com'
							target='_blank'>
							Instagram
						</Link>
						<Link
							href='https://www.tiktok.com'
							target='_blank'>
							TikTok
						</Link>
						<Link
							href='https://www.youtube.com'
							target='_blank'>
							Youtube
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.footerBottom}>
				<p>
					Made with <span className={styles.heart}>❤️</span> by Burhanuddin Imran &copy; {new Date().getFullYear()}
				</p>
			</div>
		</div>
	);
};

export default Footer;
