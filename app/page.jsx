import styles from './homepage.module.css';
import Featured from '@/app/ui/components/featured/Featuerd';
import CategoryList from '@/app/ui/components/categoryList/CategoryList';
import CardList from '@/app/ui/components/cardList/CardList';
import Menu from '@/app/ui/components/menu/Menu';
import { getHomePagePosts } from './lib/action';

export default async function Home(props) {
	const searchParams = await props.searchParams;
	const q = searchParams?.q || '';
	const page = searchParams?.page || 1;

	const { featuredPost, editorsChoice, recentPosts } = await getHomePagePosts();

	console.log(featuredPost, editorsChoice, recentPosts);

	return (
		<div className={styles.container}>
			<Featured data={featuredPost} />
			<CategoryList />
			<div className={styles.content}>
				<CardList
					page={page}
					data={recentPosts}
				/>
				<Menu data={editorsChoice} />
			</div>
		</div>
	);
}
