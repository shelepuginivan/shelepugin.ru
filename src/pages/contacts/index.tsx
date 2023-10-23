import Head from 'next/head'

import FeedbackForm from '@/components/FeedbackForm/FeedbackForm'
import Social from '@/components/Social/Social'

const Contacts = () => {
	return (
		<>
			<Head>
				<meta name='og:title' content='Контакты | Иван Шелепугин' />
				<title>Контакты | Иван Шелепугин</title>
			</Head>
			<main>
				<Social />
				<FeedbackForm />
			</main>
		</>
	)
}

export default Contacts
