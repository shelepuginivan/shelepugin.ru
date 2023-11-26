import { Metadata } from 'next'

import ErrorMessage from '@/ui/ErrorMessage/ErrorMessage'

export const metadata: Metadata = {
	title: '404 - Ресурс не найден',
}

const NotFound = () => {
	return (
		<main>
			<ErrorMessage header='404' message='Запрашиваемый ресурс не найден' />
		</main>
	)
}

export default NotFound
