import { z } from 'zod'

import {
	EMAIL_MAX_LENGTH,
	FEEDBACK_MAX_LENGTH,
	FIRSTNAME_MAX_LENGTH,
	LASTNAME_MAX_LENGTH,
} from '@/utils/constants'

export const feedbackSchema = z.object({
	firstname: z
		.string()
		.regex(/^[А-Яа-я][а-я]*$/, 'Введите настоящее имя')
		.min(2, 'Минимальная длина - 2')
		.max(
			FIRSTNAME_MAX_LENGTH,
			`Максимальная длина имени - ${FIRSTNAME_MAX_LENGTH}`,
		),
	lastname: z
		.string()
		.regex(/^[А-Яа-я][а-я]*$/, 'Введите настоящую фамилию')
		.min(2, 'Минимальная длина - 2')
		.max(
			LASTNAME_MAX_LENGTH,
			`Максимальная длина фамилии - ${LASTNAME_MAX_LENGTH}`,
		),
	email: z
		.string()
		.email({ message: 'Введите валидный Email' })
		.max(EMAIL_MAX_LENGTH, `Максимальная длина Email - ${EMAIL_MAX_LENGTH}`),
	message: z
		.string()
		.max(
			FEEDBACK_MAX_LENGTH,
			`Максимальная длина сообщения - ${FEEDBACK_MAX_LENGTH}`,
		),
})
