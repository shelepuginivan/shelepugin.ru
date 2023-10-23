import { Folder, Home, Image, Mail, Newspaper } from 'lucide-react'
import { Nunito } from 'next/font/google'
import Link from 'next/link'
import { FC } from 'react'

import styles from './header.module.sass'

const nunito = Nunito({
	subsets: ['cyrillic'],
	weight: '300',
})

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<Link href='/'>
					<h1 className={nunito.className}>Шелепугин Иван</h1>
				</Link>
				<nav>
					<Link href='/' aria-label='Главная страница'>
						<Home size={32} aria-hidden={true} focusable={false} />
					</Link>
					<Link href='/projects' aria-label='Проекты'>
						<Folder size={32} aria-hidden={true} focusable={false} />
					</Link>
					<Link href='/blog' aria-label='Блог'>
						<Newspaper size={32} aria-hidden={true} focusable={false} />
					</Link>
					<Link href='/gallery' aria-label='Галерея'>
						<Image size={32} aria-hidden={true} focusable={false} />
					</Link>
					<Link href='/contacts' aria-label='Контакты'>
						<Mail size={32} aria-hidden={true} focusable={false} />
					</Link>
				</nav>
			</div>
			<div className={styles.curve}></div>
		</header>
	)
}

export default Header
