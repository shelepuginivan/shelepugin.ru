import { NextResponse } from 'next/server'

import { GalleryService } from '@/server/GalleryService'
import { ServerException } from '@/server/ServerException'

export const GET = async () => {
	try {
		const categoriesWithPreview =
			await GalleryService.getCategoriesWithPreviews()

		return NextResponse.json(categoriesWithPreview, { status: 200 })
	} catch (error) {
		if (error instanceof ServerException) {
			return NextResponse.json(
				{ message: error.message },
				{ status: error.status },
			)
		}
		return NextResponse.json(
			{ message: 'Внутренняя ошибка сервера' },
			{ status: 500 },
		)
	}
}
