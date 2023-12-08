'use client'

import { Menu } from 'lucide-react'
import { Roboto_Flex } from 'next/font/google'
import Link from 'next/link'
import { FC, useState } from 'react'

import styles from './sidebar.module.sass'

const robotoFlex = Roboto_Flex({
	subsets: ['cyrillic'],
	weight: '400',
})

const Sidebar: FC = () => {
	const [visible, setVisible] = useState(false)

	const toggleSidebar = () => {
		setVisible((visible) => !visible)
	}

	return (
		<>
			<button className={styles.sidebarToggleButton} onClick={toggleSidebar}>
				<Menu color='#e15252' size={32} />
			</button>
			<aside className={styles.aside} data-visible={visible}>
				<nav>
					<ul className={`${robotoFlex.className} ${styles.nav}`}>
						<li>
							<Link className={styles.link} href='/'>
								Главная
							</Link>
						</li>
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
			</aside>
		</>
	)
}

export default Sidebar