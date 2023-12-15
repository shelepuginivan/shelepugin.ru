import { MongoClient, WithId } from 'mongodb'

import { InternalServerError, NotFound } from '@/server/ServerException'
import { Article } from '@/utils/types/Article'

export class ArticleService {
	static async getAllArticles(
		page: number,
		limit: number,
	): Promise<Omit<Article, 'text'>[]> {
		if (!process.env.MONGO_URI || !process.env.MONGO_DB_NAME) {
			throw new InternalServerError('Внутренняя ошибка сервера')
		}

		const client = new MongoClient(process.env.MONGO_URI)
		await client.connect()

		try {
			const database = client.db(process.env.MONGO_DB_NAME)
			const collection = database.collection('article')

			return (await collection
				.aggregate([
					{ $sort: { publicationTime: -1 } },
					{ $skip: (page - 1) * limit },
					{ $limit: limit },
					{
						$project: {
							_id: 0,
							text: 0,
						},
					},
				])
				.toArray()) as Omit<Article, 'text'>[]
		} finally {
			await client.close()
		}
	}

	static async getArticleBySlug(articleSlug: string): Promise<Article> {
		if (!process.env.MONGO_URI || !process.env.MONGO_DB_NAME) {
			throw new InternalServerError('Внутренняя ошибка сервера')
		}

		const client = new MongoClient(process.env.MONGO_URI)
		await client.connect()

		try {
			const database = client.db(process.env.MONGO_DB_NAME)
			const collection = database.collection('article')
			const article = (await collection.findOne({
				slug: articleSlug,
			})) as WithId<Article> | null

			if (!article) throw new NotFound('Статья не найдена')

			const { title, previewUrl, publicationTime, slug, text } = article

			return {
				title,
				previewUrl,
				publicationTime,
				slug,
				text,
			}
		} finally {
			await client.close()
		}
	}

	static async getSlugs(): Promise<string[]> {
		if (!process.env.MONGO_URI || !process.env.MONGO_DB_NAME) {
			throw new InternalServerError('Внутренняя ошибка сервера')
		}

		const client = new MongoClient(process.env.MONGO_URI)
		await client.connect()

		try {
			const database = client.db(process.env.MONGO_DB_NAME)
			const collection = database.collection('article')

			return await collection.distinct('slug')
		} finally {
			await client.close()
		}
	}
}
