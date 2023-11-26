import { Metadata } from 'next'

import FeedbackForm from '@/components/FeedbackForm/FeedbackForm'
import ReportBug from '@/components/ReportBug/ReportBug'
import Social from '@/components/Social/Social'

export const metadata: Metadata = {
	title: 'Контакты',
	openGraph: {
		title: 'Контакты',
	},
}

const Contacts = () => {
	return (
		<main>
			<Social />
			<ReportBug />
			<FeedbackForm />
		</main>
	)
}

export default Contacts
