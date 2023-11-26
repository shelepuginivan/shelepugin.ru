import { Metadata } from 'next'
import { FC } from 'react'

import ArticleList from '@/components/ArticleList/ArticleList'
import ArticleListHeader from '@/components/ArticleListHeader/ArticleListHeader'
import Container from '@/ui/Container/Container'

export const metadata: Metadata = {
	title: 'Блог',
	openGraph: {
		title: 'Блог',
	},
}

const Blog: FC = () => {
	return (
		<main>
			<Container>
				<ArticleListHeader />
				<ArticleList />
			</Container>
		</main>
	)
}

export default Blog
