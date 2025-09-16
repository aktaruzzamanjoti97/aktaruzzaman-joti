import ArticleCard from '@/components/ArticleCard';
import { blogsData } from '@/data/blogsData';
import styles from '@/styles/ArticlesPage.module.css';
import { Article } from '@/types';

const ArticlesPage = async () => {
	// const res = await fetch(
	// 	'https://dev.to/api/articles/me/published?per_page=6',
	// 	{
	// 		headers: {
	// 			'api-key': process.env.DEV_TO_API_KEY!,
	// 		},
	// 	}
	// );

	// const articles = await res.json();
	const articles = blogsData();

	return (
		<div className={styles.layout}>
			<h1 className={styles.pageTitle}>My Articles</h1>
			<p className={styles.pageSubtitle}>
				Recent posts from{' '}
				{/* <a
					href='https://dev.to/aktaruzzaman_joti'
					target='_blank'
					rel='noopener'
					className={styles.underline}> */}
				online
				{/* </a>{' '} */}
				where I share insights and tutorials about web development.
			</p>
			<div className={styles.container}>
				{articles.length > 0 &&
					articles?.map((article: Article) => (
						<ArticleCard key={article.id} article={article} />
					))}
			</div>
		</div>
	);
};

export default ArticlesPage;
