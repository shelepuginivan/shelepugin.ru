import { Nunito, Roboto_Flex } from 'next/font/google'
import Link from 'next/link'
import { FC } from 'react'

import { Article } from '@/utils/types/Article'

import styles from './articlePreview.module.sass'

type PropsType = Omit<Article, 'text' | 'previewUrl'> & {
	previewUrl: string
}

const nunito = Nunito({
	subsets: ['cyrillic', 'latin'],
	weight: '400',
})

const robotoFlex = Roboto_Flex({
	subsets: ['cyrillic', 'latin'],
	weight: '400',
})

const ArticlePreview: FC<PropsType> = ({
	title,
	slug,
	previewUrl,
	publicationTime,
}) => {
	const publicationDateString = new Date(publicationTime).toLocaleDateString(
		'ru',
	)

	return (
		<Link href={`/blog/${slug}`} className={styles.articlePreview}>
			<img src={previewUrl} alt='Article preview' className={styles.img} />
			<div className={styles.description}>
				<h2 className={nunito.className}>{title}</h2>
				<p className={robotoFlex.className}>
					Опубликовано: {publicationDateString}
				</p>
			</div>
		</Link>
	)
}

export default ArticlePreview
