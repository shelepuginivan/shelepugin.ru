import { Nunito, Roboto_Flex } from 'next/font/google'
import Image from 'next/image'
import { FC } from 'react'

import ivan from '@/assets/ivan.png'

import styles from './aboutMe.module.sass'

const nunito = Nunito({
	subsets: ['cyrillic'],
	weight: '400',
})

const robotoFlex = Roboto_Flex({
	subsets: ['cyrillic'],
	weight: '400',
})

const AboutMe: FC = () => {
	return (
		<section className={styles.about}>
			<div className={styles.text}>
				<h2 className={nunito.className}>Обо мне</h2>
				<p className={robotoFlex.className}>
					Увлекаюсь информатикой, программированием, веб-разработкой. В
					свободное время пишу статьи на интересующие меня темы. Участвую в
					проектных конкурсах и олимпиадах по разным предметам.
				</p>
			</div>
			<Image width={200} height={300} src={ivan.src} alt='Ivan Shelepugin' />
		</section>
	)
}

export default AboutMe
