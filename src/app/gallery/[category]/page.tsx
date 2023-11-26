import { Nunito } from 'next/font/google'
import Head from 'next/head'
import { FC } from 'react'

import CategoryImages from '@/components/CategoryImages/CategoryImages'
import Container from '@/ui/Container/Container'

interface Props {
	params: {
		category: string
	}
}

const nunito = Nunito({
	subsets: ['cyrillic'],
	weight: '300',
})

const Category: FC<Props> = ({ params }) => {
	const category = decodeURIComponent(params.category)
	const title = `Галерея${category ? ` - ${category}` : ''} | Иван Шелепугин`

	return (
		<>
			<Head>
				<meta name='og:title' content={title} />
				<title>{title}</title>
			</Head>
			<main>
				<Container>
					<h1 className={nunito.className}>{category}</h1>
					<CategoryImages category={category} />
				</Container>
			</main>
		</>
	)
}

export default Category
