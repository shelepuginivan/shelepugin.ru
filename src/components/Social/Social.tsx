import { Github, Mail, Send } from 'lucide-react'
import { Nunito, Roboto_Flex } from 'next/font/google'
import Image from 'next/image'
import { FC, useState } from 'react'

import phone from '@/assets/phone.png'

import styles from './social.module.sass'

const nunito = Nunito({
	subsets: ['cyrillic'],
	weight: '300'
})

const robotoFlex = Roboto_Flex({
	subsets: ['latin'],
	weight: '400'
})

const Social: FC = () => {
	const [clickCount, setClickCount] = useState(0)

	return (
		<div className={styles.social}>
			<div>
				<h1 className={nunito.className}>Контакты</h1>

				<ul className={`${robotoFlex.className} ${styles.linkList}`}>
					<li>
						<Mail size={20}/>
						<a href='mailto:shelepuginivanm@gmail.com'>shelepuginivanm@gmail.com</a>
					</li>
					<li>
						<Send size={20}/>
						<a href='https://t.me/shelepugin_ivan'>https://t.me/shelepugin_ivan</a>
					</li>
					<li>
						<Github size={20}/>
						<a href='https://github.com/shelepuginivan'>https://github.com/shelepuginivan</a>
					</li>
				</ul>
			</div>
			{clickCount < 9
				? <Image src={phone} alt='Old phone' onClick={() => setClickCount(prev => prev + 1)}/>
				: <div className={`${robotoFlex.className} ${styles.imageFallback}`}>Ты его сломал!!1!</div>
			}
		</div>
	)
}

export default Social
