import { notFound } from 'next/navigation'

import { ArticleService } from '@/server/ArticleService'
import { ServerException } from '@/server/ServerException'
import { Article } from '@/utils/types/Article'

interface Params {
	params: {
		slug: string
	}
}

export const GET = async (request: Request, { params }: Params) => {
	let article: Article

	try {
		article = await ArticleService.getArticleBySlug(params.slug)
	} catch (error) {
		if (!(error instanceof ServerException)) {
			return new Response(`Ошибка: ${error}`, {
				status: 500,
			})
		}

		if (error.status == 404) {
			notFound()
		}

		return new Response(error.toString(), {
			status: error.status,
		})
	}

	const filename = encodeURIComponent(`${article.title}.txt`)

	return new Response(article.text, {
		status: 200,
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Content-Disposition': `attachment; filename=${filename}`,
		},
	})
}
