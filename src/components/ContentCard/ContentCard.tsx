import { Nunito } from 'next/font/google'
import Link from 'next/link'
import { FC } from 'react'

import { imgToCssUrl } from '@/utils/imgToCssUrl'

import styles from './contentCard.module.sass'

type PropsType = {
	title: string
	backgroundImage: string | Record<'src', string>
	href: string
}

const nunito = Nunito({
	subsets: ['latin'],
	weight: '400'
})

const ContentCard: FC<PropsType> = ({
	title,
	href,
	backgroundImage: bgImage,
}) => {
	const backgroundImage = imgToCssUrl(bgImage)

	return (
		<Link
			href={href}
			className={styles.cardWrapper}
			style={{ backgroundImage }}
		>
			<div className={styles.card}>
				<h1 className={nunito.className}>{title}</h1>
			</div>
		</Link>
	)
}

export default ContentCard
