import { NextRequest, NextResponse } from 'next/server'

import { ArticleService } from '@/server/ArticleService'
import { ServerException } from '@/server/ServerException'

export const GET = async (request: NextRequest) => {
	const searchParams = request.nextUrl.searchParams

	const page = Number(searchParams.get('page')) || 1
	const articlesPerPage = Number(searchParams.get('articlesPerPage')) || 10

	try {
		const articlesOnThisPage = await ArticleService.getAllArticles(
			page,
			articlesPerPage,
		)

		return NextResponse.json(articlesOnThisPage, { status: 200 })
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
