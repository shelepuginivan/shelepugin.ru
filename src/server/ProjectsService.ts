import { MongoClient } from 'mongodb'

import { InternalServerError } from '@/server/ServerException'
import { Project } from '@/utils/types/Project'

export class ProjectService {
	static async getAllProjects(page: number, limit: number): Promise<Project[]> {
		if (!process.env.MONGO_URI || !process.env.MONGO_DB_NAME) {
			throw new InternalServerError('Внутренняя ошибка сервера')
		}

		const client = new MongoClient(process.env.MONGO_URI)
		await client.connect()

		try {
			const database = client.db(process.env.MONGO_DB_NAME)
			const collection = database.collection('project')

			return (await collection
				.find()
				.sort('title')
				.skip(limit * (page - 1))
				.limit(limit)
				.project({ _id: 0 })
				.toArray()) as Project[]
		} finally {
			await client.close()
		}
	}
}
