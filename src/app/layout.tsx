import '@/styles/globals.sass'
import '@/styles/reset.sass'
import '@/styles/variables.sass'
import '@/styles/media.sass'

import { Metadata } from 'next'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { HOST } from '@/utils/constants'

import Providers from './providers'

export const metadata: Metadata = {
	metadataBase: new URL(HOST),
	title: {
		template: '%s | Иван Шелепугин',
		default: 'Иван Шелепугин',
	},
	authors: {
		name: 'Иван Шелепугин',
	},
	creator: 'Иван Шелепугин',
	icons: {
		icon: { url: '/favicon.png', type: 'image/png' },
		shortcut: { url: '/favicon.png', type: 'image/png' },
	},
	openGraph: {
		title: {
			template: '%s | Иван Шелепугин',
			default: 'Иван Шелепугин',
		},
		locale: 'ru_RU',
		siteName: 'Иван Шелепугин',
		images: `${HOST}/favicon.png`,
	},
	manifest: '/manifest.json',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='ru'>
			<body>
				<Header />
				<Providers>{children}</Providers>
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
