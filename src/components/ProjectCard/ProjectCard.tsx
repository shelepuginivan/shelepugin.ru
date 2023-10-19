import { Github, Play } from 'lucide-react'
import { Roboto_Flex } from 'next/font/google'
import { FC } from 'react'

import Badge from '@/ui/Badge/Badge'

import styles from './projectCard.module.sass'

type PropsType = {
	title: string
	description: string
	previewUrl: string
	badgesUrls?: string[],
	githubLink?: string,
	demoLink?: string
}

const font = Roboto_Flex({
	subsets: ['cyrillic'],
	weight: '400'
})

const ProjectCard: FC<PropsType> = ({
	title,
	description,
	previewUrl,
	badgesUrls,
	githubLink,
	demoLink
}) => {
	return (
		<div className={`${styles.projectCard} ${font.className}`}>
			<img src={previewUrl} alt={title} className={styles.img}/>
			<div className={styles.content}>
				<h2>{title}</h2>
				<p>{description}</p>
				<div className={styles.badges}>
					{badgesUrls?.map((badge, index) =>
						<Badge key={index} href={badge}/>
					)}
				</div>
				<nav>
					{githubLink &&
						<a
							href={githubLink}
							target='_blank'
							aria-label='Репозиторий проекта на GitHub'
						>
							<Github size={32} aria-hidden={true} focusable={false}/>
						</a>
					}
					{demoLink &&
						<a
							href={demoLink}
							target='_blank'
							aria-label='Сайт проекта'
						>
							<Play size={32} aria-hidden={true} focusable={false}/>
						</a>
					}
				</nav>
			</div>
		</div>
	)
}

export default ProjectCard
