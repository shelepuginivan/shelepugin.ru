import { Metadata } from 'next'
import { Nunito } from 'next/font/google'
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

export const generateMetadata = async ({
	params,
}: Props): Promise<Metadata> => {
	const category = decodeURIComponent(params.category)
	const title = `Галерея${category ? ` - ${category}` : ''}`

	return {
		title,
		openGraph: {
			title,
		},
	}
}

const Category: FC<Props> = ({ params }) => {
	const category = decodeURIComponent(params.category)

	return (
		<main>
			<Container>
				<h1 className={nunito.className}>{category}</h1>
				<CategoryImages category={category} />
			</Container>
		</main>
	)
}

export default Category
