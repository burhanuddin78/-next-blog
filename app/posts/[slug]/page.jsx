import React from 'react';
import styles from './singlePage.module.css';
import Menu from '@/app/ui/components/menu/Menu';
import Comments from '@/app/ui/components/comments/Comments';
import Image from 'next/image';
import { getCategories, getEditorChoicePosts, getPostBySlug } from '@/app/lib/action';
import { capitalizeFirstLetter, formatRegionalDate } from '@/app/ui/helpers/helper';
import Editor from '@/app/ui/components/reactQuill/reactQuill';
import Head from 'next/head';

const SinglePage = async ({ params }) => {
	const { slug } = await params;

	const {
		data: { title, description, coverImageUrl, editor, publishedAt },
	} = await getPostBySlug(slug);

	// JSON-LD structured data for blog post
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: title,
		image: coverImageUrl ? `${process.env.NEXT_PUBLIC_MEDIA_URL}${coverImageUrl}` : '/p1.jpeg',
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

	const category = await getCategories();
	const { editorsChoice } = await getEditorChoicePosts();

	return (
		<>
			<Head>
				<title>{title} | AIStory Heaven </title>
				<meta
					name='description'
					content={description}
				/>
				<link
					rel='canonical'
					href={`${process.env.NEXT_PUBLIC_SITE_URL}/posts/${slug}`}
				/>

				{/* Open Graph (Facebook, LinkedIn) */}
				<meta
					property='og:title'
					content={title}
				/>
				<meta
					property='og:description'
					content={description}
				/>
				<meta
					property='og:url'
					content={`${process.env.NEXT_PUBLIC_SITE_URL}/posts/${slug}`}
				/>
				<meta
					property='og:type'
					content='article'
				/>
				<meta
					property='og:image'
					content={coverImageUrl ? `${process.env.NEXT_PUBLIC_MEDIA_URL}${coverImageUrl}` : '/p1.jpeg'}
				/>

				{/* Twitter Card */}
				<meta
					name='twitter:card'
					content='summary_large_image'
				/>
				<meta
					name='twitter:title'
					content={title}
				/>
				<meta
					name='twitter:description'
					content={description}
				/>
				<meta
					name='twitter:image'
					content={coverImageUrl ? `${process.env.NEXT_PUBLIC_MEDIA_URL}${coverImageUrl}` : '/p1.jpeg'}
				/>

				{/* JSON-LD Structured Data */}
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
			</Head>
			<div className={styles.container}>
				<div className={styles.infoContainer}>
					<div className={styles.imageContainer}>
						<Image
							src={coverImageUrl ? `${process.env.NEXT_PUBLIC_MEDIA_URL}${coverImageUrl}` : '/p1.jpeg'}
							alt=''
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
						{/* <div
						className={styles.description}
						dangerouslySetInnerHTML={{ __html: description }}
						/> */}
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
									src='/p1.jpeg'
									alt='avatar'
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
		</>
	);
};

export default SinglePage;
