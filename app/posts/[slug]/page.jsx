import React from 'react';
import styles from './singlePage.module.css';
import Menu from '@/app/ui/components/menu/Menu';
import Comments from '@/app/ui/components/comments/Comments';
import Image from 'next/image';
import { getCategories, getEditorChoicePosts, getPostBySlug, trackGuestView } from '@/app/lib/action';
import { capitalizeFirstLetter, formatRegionalDate } from '@/app/ui/helpers/helper';
import Editor from '@/app/ui/components/reactQuill/reactQuill';

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const {
		success,
		data: { title, description, coverImageUrl, editor, publishedAt },
	} = await getPostBySlug(slug);

	if (!success) return {};

	// Fallback for missing images
	const imageUrl = coverImageUrl ? `${process.env.NEXT_PUBLIC_MEDIA_URL}${coverImageUrl}` : `${process.env.NEXT_PUBLIC_SITE_URL}/default-image.jpeg`;

	// Strip HTML from description for SEO
	const cleanDescription = description.replace(/<[^>]*>/g, '').slice(0, 150); // Limit to 150 chars

	// JSON-LD structured data for blog post
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: title,
		description: cleanDescription,
		image: imageUrl,
		author: {
			'@type': 'Person',
			name: editor,
		},
		datePublished: publishedAt,
		dateModified: publishedAt,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${slug}`,
		},
	};

	return {
		title: `${title} | AIStory Heaven`,
		description: cleanDescription,
		openGraph: {
			title,
			description: cleanDescription,
			url: `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${slug}`,
			type: 'article',
			images: [{ url: imageUrl }],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description: cleanDescription,
			images: [imageUrl],
		},
		other: {
			canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${slug}`,
			script: [
				{
					type: 'application/ld+json',
					content: JSON.stringify(structuredData),
				},
			],
		},
	};
}

const SinglePage = async ({ params }) => {
	const { slug } = await params;

	const {
		success,
		data: { title, description, coverImageUrl, editor, publishedAt },
	} = await getPostBySlug(slug);

	if (!success) {
		return 'No Blog Found';
	}

	const category = await getCategories();
	const { editorsChoice } = await getEditorChoicePosts();

	trackGuestView(slug);

	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.imageContainer}>
					<Image
						src={coverImageUrl ? `${process.env.NEXT_PUBLIC_MEDIA_URL}${coverImageUrl}` : '/default-image.jpeg'}
						alt={title}
						fill
						className={styles.primaryImage}
					/>
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.title}>{title}</h1>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.post}>
					<div className={styles.description}>
						<Editor
							id='description'
							theme='bubble'
							value={description}
							placeholder='Tell your story...'
							className={styles.editor}
							readOnly={true}
						/>
					</div>

					<div className={styles.user}>
						<div className={styles.userImageContainer}>
							<Image
								src='/default-avatar.jpeg'
								alt='Author avatar'
								fill
								className={styles.image}
							/>
						</div>

						<div className={styles.userTextContainer}>
							<span className={styles.username}>{capitalizeFirstLetter(editor)}</span>
							<span className={styles.date}>{formatRegionalDate(publishedAt)}</span>
						</div>
					</div>

					<div className={styles.comment}>
						<Comments postSlug={slug} />
					</div>
				</div>
				<Menu
					editorsChoice={editorsChoice}
					category={category}
				/>
			</div>
		</div>
	);
};

export default SinglePage;
