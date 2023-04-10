import {MongoClient} from 'mongodb'

import {ServerExceptionFactory} from '@/utils/ServerExceptionFactory'

export class FeedbackService {
	static async sendFeedback(
		firstname: string,
		lastname: string,
		email: string,
		feedback: string,
	): Promise<void> {
		if (!process.env.MONGO_URI || !process.env.MONGO_DB_NAME)
			throw ServerExceptionFactory.internalServerError('Внутренняя ошибка сервера')
		
		const client = new MongoClient(process.env.MONGO_URI)
		await client.connect()

		try {
			const database = client.db(process.env.MONGO_DB_NAME)

			await database.collection('feedback').insertOne({
				firstname, lastname, email, feedback
			})
		} finally {
			await client.close()
		}
	}
}
