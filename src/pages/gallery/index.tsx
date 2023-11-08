import { Nunito } from 'next/font/google'
import Head from 'next/head'
import { FC } from 'react'

import GalleryCategoriesList from '@/components/GalleryCategoriesList/GalleryCategoriesList'
import Container from '@/ui/Container/Container'
import { HOST } from '@/utils/constants'

const nunito = Nunito({
	subsets: ['cyrillic'],
	weight: '300',
})

const Gallery: FC = () => {
	return (
		<>
			<Head>
				<meta name='og:title' content='Галерея | Иван Шелепугин' />
				<meta name='og:image' content={`${HOST}/favicon.png`} />
				<title>Галерея | Иван Шелепугин</title>
			</Head>
			<main>
				<Container>
					<h1 className={nunito.className}>Галерея</h1>
					<GalleryCategoriesList />
				</Container>
			</main>
		</>
	)
}

export default Gallery
