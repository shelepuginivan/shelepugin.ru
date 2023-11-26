import { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { FC } from 'react'

import ProjectsList from '@/components/ProjectsList/ProjectsList'
import Container from '@/ui/Container/Container'

const nunito = Nunito({
	subsets: ['cyrillic'],
	weight: '300',
})

export const metadata: Metadata = {
	title: 'Проекты',
	openGraph: {
		title: 'Проекты',
	},
}

const Projects: FC = () => {
	return (
		<main>
			<Container>
				<h1 className={nunito.className}>Проекты</h1>
			</Container>
			<ProjectsList />
		</main>
	)
}

export default Projects
