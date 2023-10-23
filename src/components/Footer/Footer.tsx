import { Rss } from 'lucide-react'
import { Nunito } from 'next/font/google'
import { FC } from 'react'

import styles from './footer.module.sass'

const nunito = Nunito({
	subsets: ['cyrillic'],
	weight: '400',
})

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.curve}></div>
			<div className={`${styles.content} ${nunito.className}`}>
				&copy; Шелепугин Иван, 2021&ndash;{new Date().getFullYear()}
				<a href='/feed.xml'>
					<Rss aria-hidden={true} focusable={false} /> RSS
				</a>
			</div>
			<p className={styles.secret}>Никто не должен это прочитать</p>
		</footer>
	)
}

export default Footer
