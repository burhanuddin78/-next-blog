import styles from './homepage.module.css';
import Featured from '@/app/ui/components/featured/Featuerd';
import CategoryList from '@/app/ui/components/categoryList/CategoryList';
import CardList from '@/app/ui/components/cardList/CardList';
import Menu from '@/app/ui/components/menu/Menu';

export default async function Home(props) {
	const searchParams = await props.searchParams;
	const q = searchParams?.q || '';
	const page = searchParams?.page || 1;

	return (
		<div className={styles.container}>
			<Featured />
			<CategoryList />
			<div className={styles.content}>
				<CardList page={page} />
				<Menu />
			</div>
		</div>
	);
}
