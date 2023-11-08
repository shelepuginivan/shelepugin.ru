import Head from 'next/head'
import { FC } from 'react'

import ArticleList from '@/components/ArticleList/ArticleList'
import ArticleListHeader from '@/components/ArticleListHeader/ArticleListHeader'
import Container from '@/ui/Container/Container'
import { HOST } from '@/utils/constants'

const Blog: FC = () => {
	return (
		<>
			<Head>
				<meta name='og:title' content='Блог | Иван Шелепугин' />
				<meta name='og:image' content={`${HOST}/favicon.png`} />
				<title>Блог | Иван Шелепугин</title>
			</Head>
			<main>
				<Container>
					<ArticleListHeader />
					<ArticleList />
				</Container>
			</main>
		</>
	)
}

export default Blog
