import styles from './about.module.css';
import Link from 'next/link';
export const metadata = {
	title: 'About Us | AISearch Heaven', // Override title for this page
	description: 'Learn more about how our AI-powered blog generates fresh content every night.',
	openGraph: {
		title: 'About Us | AISearch Heaven',
		description: 'Discover how we create content through AI every day.',
		url: process.env.NEXT_PUBLIC_SITE_URL + '/about',
		siteName: 'AISearch Heaven',
		images: [{ url: 'https://www.aistoryheaven.fun/logo.png' }],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'About Us | AISearch Heaven',
		description: 'Find out how our AI-powered platform generates daily content.',
		image: 'https://www.aistoryheaven.fun/logo.png',
	},
};

export default function AboutPage() {
	return (
		<main className={styles.container}>
			{/* <h1 className={styles.title}>About Us</h1> */}

			<p className={styles.description}>
				Welcome to <strong>AISearch Heaven</strong> – an AI-powered blog that delivers fresh, insightful content every night.
			</p>

			<div className={styles.cardContainer}>
				<div className={styles.card}>
					<h2>📌 How It Works</h2>
					<p>Our AI scans the latest trends, research, and discussions, then generates well-structured articles across multiple topics.</p>
				</div>

				<div className={styles.card}>
					<h2>🎯 Our Mission</h2>
					<p>We believe in harnessing AI to simplify knowledge sharing. Our goal is to provide valuable, high-quality content.</p>
				</div>

				<div className={styles.card}>
					<h2>🚀 Who Is This For?</h2>
					<p>Whether you're a tech enthusiast, business professional, or casual reader, our AI-driven content is designed for you!</p>
				</div>
			</div>

			<div className={styles.floatingText}>🚀 AI-Generated Daily</div>

			<div className={styles.contactButtonWrapper}>
				<Link
					href='/contact'
					className={styles.contactButton}>
					Contact Us
				</Link>
			</div>
		</main>
	);
}
