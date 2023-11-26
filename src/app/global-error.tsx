'use client'

import ErrorMessage from '@/ui/ErrorMessage/ErrorMessage'
import { errorMessage } from '@/utils/errorMessage'

interface Props {
	error: Error & { digest?: string }
}

const Error = ({ error }: Props) => {
	return (
		<html lang='ru'>
			<head>
				<title>Произошла ошибка!</title>
			</head>
			<body>
				<main>
					<ErrorMessage
						header='Произошла ошибка!'
						message={errorMessage(error)}
					/>
				</main>
			</body>
		</html>
	)
}

export default Error
