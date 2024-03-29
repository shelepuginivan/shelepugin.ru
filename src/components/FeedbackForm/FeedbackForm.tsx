'use client'

import { Roboto_Flex } from 'next/font/google'
import { FC, FormEvent } from 'react'

import FeedbackFormHeader from '@/components/FeedbackFormHeader/FeedbackFormHeader'
import { useSubmitFeedbackMutation } from '@/hooks/useSubmitFeedbackMutation'
import Button from '@/ui/Button/Button'
import Input from '@/ui/Input/Input'
import TextArea from '@/ui/TextArea/TextArea'
import {
	EMAIL_MAX_LENGTH,
	FEEDBACK_MAX_LENGTH,
	FIRSTNAME_MAX_LENGTH,
	LASTNAME_MAX_LENGTH,
} from '@/utils/constants'
import { Feedback } from '@/utils/types/Feedback'

import styles from './feedbackForm.module.sass'

const robotoFlex = Roboto_Flex({
	subsets: ['cyrillic', 'latin'],
	weight: '400',
})

const FeedbackForm: FC = () => {
	const { mutate: submitFeedback, error, status } = useSubmitFeedbackMutation()

	const onSubmit = (event: FormEvent) => {
		event.preventDefault()

		const form = event.target as unknown as Record<
			keyof Feedback,
			HTMLInputElement
		>

		const feedback: Feedback = {
			firstname: form.firstname.value,
			lastname: form.lastname.value,
			email: form.email.value,
			message: form.message.value,
		}

		submitFeedback(feedback)
	}

	return (
		<div className='container'>
			<FeedbackFormHeader error={error} status={status} />
			<form
				onSubmit={onSubmit}
				className={`${styles.form} ${robotoFlex.className}`}
				aria-label='Отправить обратную связь'
			>
				<Input
					name='firstname'
					id='firstname'
					type='text'
					placeholder='Имя'
					maxLength={FIRSTNAME_MAX_LENGTH}
					required
					aria-label='Имя'
					aria-required={true}
				/>
				<Input
					name='lastname'
					id='lastname'
					type='text'
					placeholder='Фамилия'
					maxLength={LASTNAME_MAX_LENGTH}
					required
					aria-label='Фамилия'
					aria-required={true}
				/>
				<Input
					id='email'
					name='email'
					type='email'
					placeholder='Email'
					maxLength={EMAIL_MAX_LENGTH}
					required
					aria-label='Email'
					aria-required={true}
				/>
				<TextArea
					className={robotoFlex.className}
					id='message'
					name='message'
					placeholder={`Введите ваше сообщение (до ${FEEDBACK_MAX_LENGTH} символов)`}
					maxLength={FEEDBACK_MAX_LENGTH}
					required
					aria-label={`Ваше сообщение (до ${FEEDBACK_MAX_LENGTH} символов)`}
					aria-required={true}
				/>
				<Button type='submit'>Отправить</Button>
			</form>
		</div>
	)
}

export default FeedbackForm
