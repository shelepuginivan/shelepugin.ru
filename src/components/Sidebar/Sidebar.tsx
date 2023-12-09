'use client'

import { Menu } from 'lucide-react'
import { Roboto_Flex } from 'next/font/google'
import Link from 'next/link'
import { FC, useId, useState } from 'react'

import styles from './sidebar.module.sass'

const robotoFlex = Roboto_Flex({
	subsets: ['cyrillic'],
	weight: '400',
})

const Sidebar: FC = () => {
	const [visible, setVisible] = useState(false)
	const sidebarId = useId()

	const toggleSidebar = () => {
		setVisible((visible) => !visible)
	}

	return (
		<>
			<button
				className={styles.sidebarToggleButton}
				onClick={toggleSidebar}
				aria-controls={sidebarId}
				aria-expanded={visible}
				aria-label='Меню'
			>
				<Menu color='#e15252' size={32} aria-hidden={true} focusable={false} />
			</button>
			<aside id={sidebarId} className={styles.aside} data-visible={visible}>
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
