'use client'

import Head from 'next/head'

import ErrorMessage from '@/ui/ErrorMessage/ErrorMessage'
import { errorMessage } from '@/utils/errorMessage'

interface Props {
	error: Error & { digest?: string }
}

const Error = ({ error }: Props) => {
	return (
		<>
			<Head>
				<title>Произошла ошибка!</title>
			</Head>
			<main>
				<ErrorMessage
					header='Произошла ошибка!'
					message={errorMessage(error)}
				/>
			</main>
		</>
	)
}

export default Error
