import { MongoClient, WithId } from 'mongodb'

import { InternalServerError, NotFound } from '@/server/ServerException'
import { GalleryCategory } from '@/utils/types/GalleryCategory'
import { Image } from '@/utils/types/Image'

export class GalleryService {
	static async getCategories(): Promise<string[]> {
		if (!process.env.MONGO_URI || !process.env.MONGO_DB_NAME) {
			throw new InternalServerError('Внутренняя ошибка сервера')
		}

		const client = new MongoClient(process.env.MONGO_URI)
		await client.connect()

		const database = client.db(process.env.MONGO_DB_NAME)

		try {
			return await database.collection('image').distinct('category')
		} finally {
			await client.close()
		}
	}

	static async getCategoriesWithPreviews(): Promise<GalleryCategory[]> {
		if (!process.env.MONGO_URI || !process.env.MONGO_DB_NAME) {
			throw new InternalServerError('Внутренняя ошибка сервера')
		}

		const client = new MongoClient(process.env.MONGO_URI)
		await client.connect()

		try {
			const database = client.db(process.env.MONGO_DB_NAME)
			const collection = database.collection('image')

			return await collection
				.aggregate([
					{ $group: { _id: '$category', images: { $push: '$url' } } },
					{ $project: {
						name: '$_id',
						_id: 0,
						previewUrl: {
							$arrayElemAt: [
								'$images',
								{ $floor: { $multiply: [{ $size: '$images' }, Math.random()] } }
							]
						}
					} }
				])
				.toArray() as GalleryCategory[]
		} finally {
			await client.close()
		}
	}

	static async getGalleryItemsByCategory(
		category: string,
		page: number,
		imagesPerPage: number
	): Promise<string[]> {
		if (!process.env.MONGO_URI || !process.env.MONGO_DB_NAME) {
			throw new InternalServerError('Внутренняя ошибка сервера')
		}

		const client = new MongoClient(process.env.MONGO_URI)
		await client.connect()

		try {
			const database = client.db(process.env.MONGO_DB_NAME)
			const collection = database.collection('image')

			const galleryItems = await collection
				.find({ category })
				.skip(imagesPerPage * (page - 1))
				.limit(imagesPerPage)
				.toArray() as WithId<Image>[]

			if (!galleryItems) {
				throw new NotFound(`Категория ${category} не найдена`)
			}

			return galleryItems.map(item => item.url)
		} finally {
			await client.close()
		}
	}
}
