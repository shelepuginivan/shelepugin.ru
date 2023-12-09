'use client'

import { FC, useEffect, useRef, useState } from 'react'

import ContentCard from '@/components/ContentCard/ContentCard'
import { useGalleryCategoriesQuery } from '@/hooks/useGalleryCategoriesQuery'
import Center from '@/ui/Center/Center'
import ErrorMessage from '@/ui/ErrorMessage/ErrorMessage'
import Loader from '@/ui/Loader/Loader'
import { errorMessage } from '@/utils/errorMessage'

import styles from './galleryCategoriesList.module.sass'

const GalleryCategoriesList: FC = () => {
	const [showSecret, setShowSecret] = useState<boolean>(false)
	const { data: categories, error, isLoading } = useGalleryCategoriesQuery()
	const secretCode = useRef('')

	const secretCodeEnter = (event: KeyboardEvent) => {
		switch (event.key) {
			case 'Enter':
				return setShowSecret(
					secretCode.current === process.env.NEXT_PUBLIC_UNLOCK_SECRET_PASSWORD,
				)
			case 'Backspace':
				secretCode.current = secretCode.current.slice(0, -1)
				break
			case 'Alt':
			case 'Control':
			case 'OS':
			case 'Shift':
			case 'Tab':
				break
			default:
				secretCode.current += event.key
		}
	}

	useEffect(() => {
		document.body.addEventListener('keydown', secretCodeEnter)

		return () => document.body.removeEventListener('keydown', secretCodeEnter)
	}, [])

	if (isLoading) {
		return (
			<div id='wrapper' aria-live='polite' aria-busy={true}>
				<Center>
					<Loader />
				</Center>
			</div>
		)
	}

	if (error) {
		return <ErrorMessage message={errorMessage(error)} />
	}

	return (
		<div
			id='wrapper'
			className={styles.wrapper}
			aria-live='polite'
			aria-busy={false}
		>
			{categories &&
				categories.map((category) => {
					if (
						!showSecret &&
						category.name === process.env.NEXT_PUBLIC_SECRET_CATEGORY
					) {
						return null
					}

					return (
						<ContentCard
							key={category.name}
							title={category.name}
							backgroundImage={category.previewUrl}
							href={`/gallery/${category.name}`}
						/>
					)
				})}
		</div>
	)
}

export default GalleryCategoriesList
