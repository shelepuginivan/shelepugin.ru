import type { NextApiRequest, NextApiResponse } from 'next'
import { ZodError } from 'zod'

import { FeedbackService } from '@/server/FeedbackService'
import { feedbackSchema } from '@/utils/schemas/feedback.schema'

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	try {
		const feedback = feedbackSchema.parse(req.body)
		await FeedbackService.sendFeedback(feedback)

		res.status(200).end()
	} catch (error) {
		if (error instanceof ZodError) {
			const errorMessage = error.errors[0].message
			res.status(400).json({ message: errorMessage })
		} else {
			res.status(500).json({ message: 'Внутренняя ошибка сервера' })
		}
	}
}

export default handler
