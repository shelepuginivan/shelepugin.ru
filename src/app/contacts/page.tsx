import Head from 'next/head'

import FeedbackForm from '@/components/FeedbackForm/FeedbackForm'
import ReportBug from '@/components/ReportBug/ReportBug'
import Social from '@/components/Social/Social'
import { HOST } from '@/utils/constants'

const Contacts = () => {
	return (
		<>
			<Head>
				<meta name='og:title' content='Контакты | Иван Шелепугин' />
				<meta name='og:image' content={`${HOST}/favicon.png`} />
				<title>Контакты | Иван Шелепугин</title>
			</Head>
			<main>
				<Social />
				<ReportBug />
				<FeedbackForm />
			</main>
		</>
	)
}

export default Contacts
