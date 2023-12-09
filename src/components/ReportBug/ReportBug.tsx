import { Github, Mail } from 'lucide-react'
import { Nunito, Roboto_Flex } from 'next/font/google'
import { FC } from 'react'

import styles from './reportBug.module.sass'

const nunito = Nunito({
	subsets: ['cyrillic'],
	weight: '300',
})

const robotoFlex = Roboto_Flex({
	subsets: ['latin'],
	weight: '400',
})

const ReportBug: FC = () => {
	return (
		<div className={styles.reportBug}>
			<h2 className={`${styles.reportBugHeader} ${nunito.className}`}>
				Нашли баг?
			</h2>
			<p className={`${styles.reportBugMessage} ${robotoFlex.className}`}>
				Если вы столкнулись с проблемой, пожалуйста, опишите её и отправьте
				любым удобным для вас способом:
			</p>
			<nav>
				<ul className={`${styles.linkList} ${robotoFlex.className}`}>
					<li>
						<Mail size={20} aria-hidden={true} focusable={false} />
						<a href='mailto:shelepuginivanm@gmail.com'>На почту</a>
					</li>
					<li>
						<Github size={20} aria-hidden={true} focusable={false} />
						<a href='https://github.com/shelepuginivan/shelepugin.ru/issues/new'>
							В GitHub Issues
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default ReportBug
