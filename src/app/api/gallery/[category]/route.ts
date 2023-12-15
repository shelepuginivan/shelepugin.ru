import { NextRequest, NextResponse } from 'next/server'

import { GalleryService } from '@/server/GalleryService'
import { ServerException } from '@/server/ServerException'

interface Params {
	params: {
		category: string
	}
}

export const GET = async (request: NextRequest, { params }: Params) => {
	const searchParams = request.nextUrl.searchParams

	const category = params.category
	const page = Number(searchParams.get('page')) || 1
	const limit = Number(searchParams.get('limit')) || 10

	try {
		const images = await GalleryService.getGalleryItemsByCategory(
			category,
			page,
			limit,
		)

		return NextResponse.json(images, { status: 200 })
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
