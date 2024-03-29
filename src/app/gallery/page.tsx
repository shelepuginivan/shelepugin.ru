import { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { FC } from 'react'

import GalleryCategoriesList from '@/components/GalleryCategoriesList/GalleryCategoriesList'
import Container from '@/ui/Container/Container'

const nunito = Nunito({
	subsets: ['cyrillic'],
	weight: '300',
})

export const metadata: Metadata = {
	title: 'Галерея',
	openGraph: {
		title: 'Галерея',
	},
}

const Gallery: FC = () => {
	return (
		<main>
			<Container>
				<h1 className={nunito.className}>Галерея</h1>
				<GalleryCategoriesList />
			</Container>
		</main>
	)
}

export default Gallery
