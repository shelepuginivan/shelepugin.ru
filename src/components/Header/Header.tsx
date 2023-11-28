import { Nunito } from 'next/font/google'
import Link from 'next/link'
import { FC } from 'react'

import Sidebar from '@/components/Sidebar/Sidebar'

import styles from './header.module.sass'

const nunito = Nunito({
	subsets: ['cyrillic'],
	weight: '400',
})

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Link className={`${nunito.className} ${styles.mainLink}`} href='/'>
				Иван Шелепугин
			</Link>
			<nav>
				<ul className={`${nunito.className} ${styles.nav}`}>
					<li>
						<Link className={styles.link} href='/projects'>
							Проекты
						</Link>
					</li>
					<li>
						<Link className={styles.link} href='/blog'>
							Блог
						</Link>
					</li>
					<li>
						<Link className={styles.link} href='/gallery'>
							Галерея
						</Link>
					</li>
					<li>
						<Link className={styles.link} href='/contacts'>
							Контакты
						</Link>
					</li>
				</ul>
			</nav>
			<Sidebar />
		</header>
	)
}

export default Header
