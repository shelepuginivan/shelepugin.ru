import { Folder, Home, Image, Mail, Newspaper } from 'lucide-react'
import { Nunito } from 'next/font/google'
import Link from 'next/link'
import { FC } from 'react'

import styles from './header.module.sass'

const nunito = Nunito({
	subsets: ['cyrillic'],
	weight: '300'
})

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<Link href='/'><h1 className={nunito.className}>Шелепугин Иван</h1></Link>
				<nav>
					<Link href='/'><Home size={32}/></Link>
					<Link href='/projects'><Folder size={32}/></Link>
					<Link href='/blog'><Newspaper size={32}/></Link>
					<Link href='/gallery'><Image size={32}/></Link>
					<Link href='/contacts'><Mail size={32}/></Link>
				</nav>
			</div>
			<div className={styles.curve}></div>
		</header>
	)
}

export default Header
