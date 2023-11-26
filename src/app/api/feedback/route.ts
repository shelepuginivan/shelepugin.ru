import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

import { FeedbackService } from '@/server/FeedbackService'
import { feedbackSchema } from '@/utils/schemas/feedback.schema'

export const POST = async (request: Request) => {
	const body = await request.json()

	try {
		const feedback = feedbackSchema.parse(body)
		await FeedbackService.sendFeedback(feedback)

		return new Response('', { status: 200 })
	} catch (error) {
		let status = 500
		let message = 'Внутренняя ошибка сервера'

		if (error instanceof ZodError) {
			status = 422
			message = error.errors[0].message
		}

		return NextResponse.json({ message }, { status })
	}
}
