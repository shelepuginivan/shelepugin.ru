import { NextApiRequest, NextApiResponse } from 'next'

import { GalleryService } from '@/server/GalleryService'
import { ServerException } from '@/server/ServerException'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const categoriesWithPreview = await GalleryService.getCategoriesWithPreviews()

		res.status(200).json(categoriesWithPreview)
	} catch (error) {
		if (error instanceof ServerException) {
			res.status(error.status).json({ message: error.message })
		} else {
			res.status(500).json({ message: 'Внутренняя ошибка сервера' })
		}
	}
}

export default handler
