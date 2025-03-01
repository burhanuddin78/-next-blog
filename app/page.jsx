import styles from './homepage.module.css';
import Featured from '@/app/ui/components/featured/Featuerd';
import CategoryList from '@/app/ui/components/categoryList/CategoryList';
import CardList from '@/app/ui/components/cardList/CardList';
import Menu from '@/app/ui/components/menu/Menu';
import { getFeaturedPost, getCategories, getAllPosts } from './lib/action';

export async function generateMetadata(props) {
	const params = await props.searchParams;
	const page = parseInt(params?.page, 10) || 1;
	const { posts, count } = await getAllPosts({ page });

	const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;
	const MEDIA_URL = process.env.NEXT_PUBLIC_MEDIA_URL;

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'AIStory Heaven – The Ultimate Blog App',
		itemListElement: posts?.map((post, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			url: post.coverImage ? `${MEDIA_URL}${post.coverImage}` : `${BASE_URL}/default-thumbnail.jpg`,
			name: post.title,
		})),
		author: {
			'@type': 'Organization',
			name: 'AIStory Heaven',
			url: BASE_URL,
		},
		publisher: {
			'@type': 'Organization',
			name: 'AIStory Heaven',
			logo: {
				'@type': 'ImageObject',
				url: `${BASE_URL}/logo.png`,
			},
		},
	};

	return {
		title: 'AIStory Heaven – The Ultimate Blog App',
		description: 'Discover AI-generated stories that captivate your imagination. Read, explore, and stay inspired with our latest AI-powered blogs.',
		keywords: [
			'AI Story',
			'AI Story Heaven',
			'Heaven',
			'AI Stories',
			'AI Blog',
			'Artificial Intelligence',
			'Storytelling',
			'Machine Learning',
			'AI Generated Content',
			'Creative Writing',
			'Short Stories',
			'Fiction',
			'Narrative Writing',
			'Fantasy Stories',
			'Science Fiction',
			'AI Story Generator',
			'AI Fiction',
			'AI-Powered Storytelling',
			'Innovative Storytelling',
			'AI Literature',
			'AI and Creativity',
			'AI-Driven Narratives',
			'AI Fantasy Stories',
			'AI Sci-Fi',
			'Writing with AI',
			'AI Blog Platform',
			'Digital Storytelling',
			'Online Fiction',
			'Best AI Stories',
			'AI-Generated Novels',
			'Imaginative Writing',
			'Interactive Storytelling',
			'AI Writing Assistant',
			'Machine Learning in Writing',
			'Story Creation',
			'AI Short Stories',
			'AI-Powered Fiction',
			'AI-Powered Books',
			'AI-Generated Poetry',
			'Storytelling Community',
			'AI Content Creation',
			'AI-Powered Creativity',
		],
		openGraph: {
			title: 'AIStory Heaven – The Ultimate Blog App',
			description: 'Discover AI-generated stories that captivate your imagination. Read, explore, and stay inspired with our latest AI-powered blogs.',
			url: `${BASE_URL}/`,
			siteName: 'AIStory Heaven',
			images: [{ url: `${BASE_URL}/default-thumbnail.jpg` }],
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title: 'AIStory Heaven – The Ultimate Blog App',
			description: 'Explore AI-generated stories and unleash your imagination!',
			images: [`${BASE_URL}/default-thumbnail.jpg`],
		},
		other: {
			canonical: `${BASE_URL}/`,
			prev: page > 1 ? `${BASE_URL}/?page=${page - 1}` : undefined,
			next: count > page * 10 ? `${BASE_URL}/?page=${page + 1}` : undefined,
		},
		script: [
			{
				type: 'application/ld+json',
				children: JSON.stringify(structuredData),
			},
		],
	};
}

export default async function Home(props) {
	const params = await props.searchParams;
	const page = parseInt(params.page, 10) || 1;

	const { featuredPost } = await getFeaturedPost();
	const category = await getCategories();
	const { posts, count } = await getAllPosts({ page });

	return (
		<div className={styles.container}>
			<Featured data={featuredPost} />
			<CategoryList data={category} />
			<div className={styles.content}>
				<CardList
					page={page}
					count={count}
					data={posts}
				/>
				<Menu />
			</div>
		</div>
	);
}
