import '@/styles/globals.sass'
import '@/styles/reset.sass'
import '@/styles/variables.sass'
import '@/styles/media.sass'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

import Providers from './providers'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='ru'>
			<head>
				<meta name='charset' content='UTF-8' />
				<meta name='author' content='Иван Шелепугин' />
				<meta name='copyright' content='Иван Шелепугин' />
				<meta name='og:locale' content='ru_RU' />
				<link rel='manifest' href='/manifest.json' />
				<link rel='icon' href='/favicon.png' />
				<link rel='shortcut icon' href='/favicon.png' />
				<link rel='favicon' href='/favicon.png' />
			</head>
			<body>
				<Header />
				<Providers>{children}</Providers>
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
